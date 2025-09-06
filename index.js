const fs = require("fs");
const path = require("path");

// Commands folder path updated to 'Wasi'
const commandsPath = path.join(__dirname, "Wasi");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

const commands = [];

for (const file of commandFiles) {
  const command = require(`./Wasi/${file}`);
  commands.push(command);
}

// Example: Execute a command
const fakeMessage = {
  channel: { send: console.log }
};

const args = [];
commands.forEach(cmd => {
  if(cmd.name === "ping") cmd.execute(fakeMessage, args);
});