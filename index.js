const fs = require("fs");
const path = require("path");
const login = require("facebook-chat-api");

// Load your AppState JSON file
const appState = require("./appstate.json");

login({ appState: appState }, (err, api) => {
  if (err) return console.error("Login failed:", err);

  console.log("Messenger bot logged in with AppState!");

  // Load commands
  const commandsPath = path.join(__dirname, "commands");
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

  const commands = [];
  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command);
  }

  // Listen for messages
  api.listenMqtt(async (err, event) => {
    if (err) return console.error(err);

    if (event.type === "message" && event.body) {
      const msg = event.body.toLowerCase();

      for (const cmd of commands) {
        if (msg.startsWith(cmd.name)) {
          await cmd.execute(event, api, commands);
        }
      }
    }
  });
});