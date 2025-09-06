const Settings = require("../models/Settings");

module.exports = function() {
	async function get(threadID) {
		const s = await Settings.findOne({ where: { threadID } });
		return s ? s.get({ plain: true }) : {};
	}

	async function set(threadID, options = {}) {
		const s = await Settings.findOne({ where: { threadID } });
		if(s) await s.update(options);
		else await Settings.create({ threadID, ...options });
		return true;
	}

	return { get, set };
};