const Users = require("../models/Users");

module.exports = function() {
	async function getBalance(userID) {
		const user = await Users.findOne({ where: { userID }});
		return user ? user.balance : 0;
	}

	async function addBalance(userID, amount) {
		const user = await Users.findOne({ where: { userID }});
		if(user) {
			user.balance += amount;
			await user.save();
		} else await Users.create({ userID, balance: amount });
		return true;
	}

	async function subtractBalance(userID, amount) {
		const user = await Users.findOne({ where: { userID }});
		if(user) {
			user.balance = Math.max(0, user.balance - amount);
			await user.save();
		}
		return true;
	}

	return { getBalance, addBalance, subtractBalance };
};