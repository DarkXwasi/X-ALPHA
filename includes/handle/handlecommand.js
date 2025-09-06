const config = require("../config");

module.exports = {
  execute: async function({ api, event, command }) {
    try {
      const senderID = event.senderID;
      if (!config.ADMINBOT.includes(senderID)) {
        return api.sendMessage("❌ You are not allowed to use this command!", event.threadID, event.messageID);
      }

      // Log command execution
      console.log(`[Command] ${command} used by ${senderID} in thread ${event.threadID}`);

      // Execute command logic here
      if (command.run) await command.run({ api, event });
    } catch (err) {
      console.error("handleCommand error:", err);
    }
  }
};