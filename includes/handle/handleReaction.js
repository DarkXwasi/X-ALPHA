module.exports = {
  handle: async function({ api, event, reaction }) {
    try {
      console.log(`[Reaction] ${reaction} by ${event.senderID} in thread ${event.threadID}`);
      // Add reaction logic here
    } catch (err) {
      console.error("handleReaction error:", err);
    }
  }
};