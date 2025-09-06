module.exports = function({ api }) {
	async function send(threadID, message) {
		return api.sendMessage(message, threadID);
	}

	async function reply(event, message) {
		return api.sendMessage(message, event.threadID, event.messageID);
	}

	return { send, reply };
};