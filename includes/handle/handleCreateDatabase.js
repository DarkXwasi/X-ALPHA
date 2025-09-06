module.exports = {
  createThread: async function({ models, threadID }) {
    try {
      const Threads = models.use("Threads");
      await Threads.findOrCreate({ where: { threadID }, defaults: {} });
      console.log(`[DB] Thread ${threadID} ensured in database`);
    } catch (err) {
      console.error("handleCreateDatabase error:", err);
    }
  },
  createUser: async function({ models, userID }) {
    try {
      const Users = models.use("Users");
      await Users.findOrCreate({ where: { userID }, defaults: {} });
      console.log(`[DB] User ${userID} ensured in database`);
    } catch (err) {
      console.error("handleCreateDatabase error:", err);
    }
  }
};