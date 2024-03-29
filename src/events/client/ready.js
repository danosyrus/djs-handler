const config = require("@config");
const client = require("@root");

module.exports = {
    name: "ready",
    once: true,
    execute: async() => {

        const activites = config.client.presence.activites;
        let activity = 0;
        await client.user.setPresence({ status: config.client.presence.status, activity: config.client.presence.activites[0] });

        setInterval(() => {
            activity++
            client.user.setActivity(activites[Math.floor(Math.random() * activites.length)])
        }, 120000);
         client.utils.log("CLIENT ONLINE")
    },
};
