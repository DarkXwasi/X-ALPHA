const config = require("../config.json");

module.exports = function() {
	function isAdmin(userID) {
		return config.ADMINBOT.includes(userID);
	}

	function isOwner(userID) {
		return userID === config.ADMINBOT[0]; // Owner UID
	}

	return { isAdmin, isOwner };
};