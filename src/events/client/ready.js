// Advanced djs slash command handler made with ❤️ by dano! [github.com/danodee]
const { green, white, cyanBright } = require("chalk");
const config = require("@config");

module.exports = {
    name: "ready",
    once: true,
    execute: async() => {
        
        const activites = config.activites;
        let activity = 0;
        await client.user.setPresence({ status: "dnd", activity: activites[0] });
        setInterval(() => {
            activity++
            client.user.setActivity(activites[Math.floor(Math.random() * activites.length)])
        }, 120000);
        
        console.log(white.bold("[") + green.bold("STATUS") + white.bold("] ") + cyanBright.bold("ONLINE"));
    },
};
