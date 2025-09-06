const cron = require("node-cron");

module.exports = function() {
	function scheduleJob(time, callback) {
		// Example: "0 5 * * *" => every day 5:00
		return cron.schedule(time, callback);
	}

	return { scheduleJob };
};