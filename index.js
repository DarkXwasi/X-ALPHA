const fs = require("fs");
const path = require("path");
const config = require("./config.json");

const commands = new Map();
const events = [];

// Load commands
fs.readdirSync(path.join(__dirname, "commands")).forEach(file => {
  if (file.endsWith(".js")) {
    const cmd = require(`./commands/${file}`);
    commands.set(cmd.config.name, cmd);
  }
});

// Load events
fs.readdirSync(path.join(__dirname, "events")).forEach(file => {
  if (file.endsWith(".js")) {
    const evt = require(`./events/${file}`);
    events.push(evt);
  }
});

// Simulated Bot Event Listener
function onMessage(event) {
  const message = event.body;
  if (!message.startsWith(config.PREFIX)) return;
  const args = message.slice(config.PREFIX.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = commands.get(commandName);
  if (command) {
    command.run({ api: fakeApi, event, args });
  }
}

// Simulated Event Trigger
function onEvent(event) {
  for (const evt of events) {
    evt.handleEvent({ api: fakeApi, event });
  }
}

// Fake API for example
const fakeApi = {
  sendMessage: (msg, threadID) => console.log("Send to", threadID, msg),
  removeUserFromGroup: (uid, threadID, cb) => { console.log(`Removed ${uid} from ${threadID}`); if(cb) cb(null) }
};

// Example Usage
onMessage({ body: "$masterTemplate hello world", senderID: "100091680625364", threadID: "123" });
onEvent({ logMessageType: "log:subscribe", logMessageData: { addedParticipants: [{ userID: "1001", fullName: "Ali" }] }, threadID: "123", senderID: "1001", threadName: "Test Group" });