const { green, white, cyanBright } = require("chalk");
const config = require("@config");
const client = require("@root");

module.exports = {
    name: "ready",
    once: true,
    execute: async() => {

        const activites = config.presence.activites;
        let activity = 0;
        await client.user.setPresence({ status: config.presence.status, activity: config.presence.activites[0] });

        setInterval(() => {
            activity++
            client.user.setActivity(activites[Math.floor(Math.random() * activites.length)])
        }, 120000);
        console.log(white.bold("[") + green.bold("STATUS") + white.bold("] ") + cyanBright.bold("ONLINE"));
    },
};
