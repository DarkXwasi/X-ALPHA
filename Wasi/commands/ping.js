module.exports = {
  name: "ping",
  description: "Checks if the bot is alive",
  execute: async (event, api) => {
    // event = message event
    // api = messenger bot API object

    try {
      await api.sendMessage("Pong! 🏓", event.threadID);
    } catch (err) {
      console.error("Error sending ping:", err);
    }
  },
};