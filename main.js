// Advanced djs slash command handler made by dano! [github.com/danodee]
require("module-alias/register");
// ———————————————[Client Requirement]———————————————
const { Client, Discord, Intents, Collection } = require("discord.js");
const client = new Client({ intents: 32767 });

const fs = require("fs");
const config = require("@config/config")
// ———————————————[Client Export]———————————————
module.exports = client;
client.commands = new Collection();
client.events = fs.readdirSync(`${process.cwd()}/src/events`);
client.categories = fs.readdirSync(`${process.cwd()}/src/commands`);

// Structure Intialization
["commands", "events"].forEach((file) => {
    require(`@structures/${file}`)(client)
});
// ———————————————[Client Login]———————————————
client.login(config.token);

