const Logs = require("../models/Logs");

module.exports = function() {
	async function addLog(threadID, userID, action) {
		await Logs.create({ threadID, userID, action, timestamp: Date.now() });
		return true;
	}

	async function getLogs(threadID, limit = 50) {
		return Logs.findAll({ where: { threadID }, limit, order: [['timestamp', 'DESC']] });
	}

	return { addLog, getLogs };
};