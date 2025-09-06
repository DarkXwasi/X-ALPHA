module.exports = {
  handle: async function({ api, event }) {
    try {
      console.log(`[Event] ${event.logMessageType} in thread ${event.threadID}`);
      // Add custom event logic here
    } catch (err) {
      console.error("handleEvent error:", err);
    }
  }
};