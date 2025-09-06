module.exports = function({ api }) {
	async function react(messageID, emoji) {
		try {
			await api.setMessageReaction(emoji, messageID);
		} catch(e) {
			console.error("Reaction error:", e);
		}
	}

	return { react };
};