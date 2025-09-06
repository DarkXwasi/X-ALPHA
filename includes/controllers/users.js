const Users = require("../models/Users");

module.exports = function() {
	async function getData(userID) {
		try {
			const user = await Users.findOne({ where: { userID } });
			return user ? user.get({ plain: true }) : false;
		} catch (error) {
			console.error(error);
			throw new Error("User data fetch karte waqt error: " + error);
		}
	}

	async function setData(userID, options = {}) {
		if (typeof options !== 'object') throw new Error("Options object hona chahiye");
		try {
			const user = await Users.findOne({ where: { userID }});
			if(user) await user.update(options);
			else await Users.create({ userID, ...options });
			return true;
		} catch (error) {
			console.error(error);
			throw new Error("User update karte waqt error: " + error);
		}
	}

	async function delData(userID) {
		try {
			const user = await Users.findOne({ where: { userID }});
			if(user) await user.destroy();
			return true;
		} catch (error) {
			console.error(error);
			throw new Error("User delete karte waqt error: " + error);
		}
	}

	return { getData, setData, delData };
};