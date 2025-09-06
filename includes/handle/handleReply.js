module.exports = {
  handle: async function({ api, event, replyMessage }) {
    try {
      console.log(`[Reply] Reply in thread ${event.threadID}`);
      api.sendMessage(replyMessage, event.threadID);
    } catch (err) {
      console.error("handleReply error:", err);
    }
  }
};