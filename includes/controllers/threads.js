const Threads = require("../models/Threads");

module.exports = function() {
	async function getInfo(threadID) {
		try {
			const result = await api.getThreadInfo(threadID);
			return result;
		} catch (error) {
			console.error(error);
			throw new Error("Threads info fetch karte waqt error: " + error);
		}
	}

	async function getData(threadID) {
		try {
			const data = await Threads.findOne({ where: { threadID } });
			return data ? data.get({ plain: true }) : false;
		} catch (error) {
			console.error(error);
			throw new Error("Threads data fetch karte waqt error: " + error);
		}
	}

	async function setData(threadID, options = {}) {
		if (typeof options !== 'object') throw new Error("Options object hona chahiye");
		try {
			const thread = await Threads.findOne({ where: { threadID }});
			if(thread) await thread.update(options);
			else await Threads.create({ threadID, ...options });
			return true;
		} catch (error) {
			console.error(error);
			throw new Error("Threads update karte waqt error: " + error);
		}
	}

	async function delData(threadID) {
		try {
			const thread = await Threads.findOne({ where: { threadID } });
			if(thread) await thread.destroy();
			return true;
		} catch (error) {
			console.error(error);
			throw new Error("Threads delete karte waqt error: " + error);
		}
	}

	return { getInfo, getData, setData, delData };
};