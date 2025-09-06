const cron = require("node-cron");

module.exports = {
  schedule: function({ time, callback }) {
    try {
      cron.schedule(time, callback);
      console.log(`[Schedule] Task scheduled at ${time}`);
    } catch (err) {
      console.error("handleSchedule error:", err);
    }
  }
};