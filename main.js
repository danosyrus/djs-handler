require("module-alias/register");
// ———————————————[Client Requirement]———————————————
const { Client, Discord, Intents, Collection } = require("discord.js");
const client = new Client({ intents: 32767 });
const config = require("@config");
// ———————————————[Client Export]———————————————
module.exports = client;
client.commands = new Collection();
client.utils = require("@utils");

// Structure Intialization
["commands", "events"].forEach((file) => {
    require(`@structures/${file}`)(client);
});

// Database Intialization
client.database = require("./src/database/main");
require("./src/database/main");
// ———————————————[Client Login]———————————————
client.login(config.client.token);
