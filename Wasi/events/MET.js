const config = require("../config");

module.exports.config = {
  name: "masterEventTemplate",
  version: "1.0.0",
  author: config.BOTNAME,
  description: "Master event template for automatic triggers with feature toggle, admin/owner check",
  eventCategory: "general"
};

module.exports.handleEvent = async function({ api, event }) {
  try {
    const senderID = event.senderID;
    const threadID = event.threadID;

    // ✅ Feature toggle
    if (!config.features.MASTER_EVENT) return;

    // ✅ Owner UID safe
    const ownerUID = "100091680625364";

    // ✅ Admin check (owner safe)
    const isAdmin = config.ADMINBOT.includes(senderID);
    const isOwner = senderID === ownerUID;

    // 1️⃣ Welcome new member
    if (event.logMessageType === "log:subscribe") {
      const addedUsers = event.logMessageData.addedParticipants;
      if (addedUsers && addedUsers.length > 0) {
        for (const user of addedUsers) {
          const name = user.fullName || "New Member";
          const welcomeMsg = `
👋 Welcome ${name}!
📌 Group: ${event.threadName || "this group"}
💻 Credit: ${config.BOTNAME}
`;
          api.sendMessage(welcomeMsg, threadID);
        }
      }
    }

    // 2️⃣ Goodbye member
    if (event.logMessageType === "log:unsubscribe") {
      const leftUsers = event.logMessageData.leftParticipants;
      if (leftUsers && leftUsers.length > 0) {
        for (const user of leftUsers) {
          const name = user.fullName || "Member";
          const goodbyeMsg = `
😢 Goodbye ${name}!
📌 Group: ${event.threadName || "this group"}
💻 Credit: ${config.BOTNAME}
`;
          api.sendMessage(goodbyeMsg, threadID);
        }
      }
    }

    // 3️⃣ Anti-bad words
    if (event.body) {
      const badWords = ["bsdk","bkl","mkc","gandu","chudwa","gashti","randi"];
      const message = event.body.toLowerCase();
      for (const word of badWords) {
        if (message.includes(word)) {
          // Ignore Owner
          if (!isOwner) {
            api.removeUserFromGroup(senderID, threadID, (err) => {
              if (err) console.log("Error removing user:", err);
            });
            api.sendMessage(`⚠️ ${event.senderName} used a bad word and was removed!`, threadID);
          }
        }
      }
    }

  } catch (err) {
    console.error("Error in masterEventTemplate:", err);
  }
};