// Advanced djs slash command handler made with ❤️ by dano! [github.com/danodee]
require("module-alias/register");
// ———————————————[Client Requirement]———————————————
const { Client, Discord, Intents, Collection } = require("discord.js");
const client = new Client({ intents: 32767 });
const config = require("@config");
// ———————————————[Client Export]———————————————
module.exports = client;
client.commands = new Collection();
// Structure Intialization
["commands", "events"].forEach((file) => {
    require(`@structures/${file}`)(client);
});
// ———————————————[Client Login]———————————————
client.login(config.client.token);

