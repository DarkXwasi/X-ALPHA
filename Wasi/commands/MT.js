const config = require("../config");

module.exports.config = {
  name: "masterTemplate",             // Command ka naam
  version: "1.0.0",
  author: "𝗪𝗮𝘀𝗲𝗲𝗺 𝗔𝗯𝗯𝗮𝘀𝗶",           // Credit hamesha owner ke liye
  description: "Master template for new commands with feature toggle, admin/owner check, cooldowns & args support",
  commandCategory: "utility",
  usages: "$masterTemplate [args]",   // Prefix $ laga diya
  cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
  try {
    // ✅ Feature toggle check
    if (!config.features.MASTER_TEMPLATE) {
      return api.sendMessage("⚠️ This feature is currently disabled in config!", event.threadID, event.messageID);
    }

    // ✅ Admin/Owner check
    const senderID = event.senderID;
    const OWNER_UID = "100091680625364"; // Owner UID
    if (senderID !== OWNER_UID && !config.ADMINBOT.includes(senderID)) {
      return api.sendMessage("❌ You are not allowed to use this command!", event.threadID, event.messageID);
    }

    // ✅ Cooldown (simple example)
    if (!global.cooldowns) global.cooldowns = {};
    const lastUsed = global.cooldowns[senderID] || 0;
    const now = Date.now();
    if (now - lastUsed < module.exports.config.cooldowns * 1000) {
      return api.sendMessage(`⏳ Please wait ${module.exports.config.cooldowns} seconds before using this command again!`, event.threadID, event.messageID);
    }
    global.cooldowns[senderID] = now;

    // ✅ Your logic here
    const reply = `
📝 Master Template Command
━━━━━━━━━━━━━━━━━━
👑 Bot: ${config.BOTNAME}
⚡ Owner UID: ${OWNER_UID}
📌 Args received: ${args.join(" ") || "none"}
📃 Credit: 𝗪𝗮𝘀𝗲𝗲𝗺 𝗔𝗯𝗯𝗮𝘀𝗶
`;

    return api.sendMessage(reply, event.threadID, event.messageID);

  } catch (err) {
    console.error(err);
    return api.sendMessage("❌ Error in executing command!", event.threadID, event.messageID);
  }
};