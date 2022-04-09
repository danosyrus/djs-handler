const { readdirSync } = require("fs");

module.exports = async(client) => {

    client.events.forEach((dir) => {
        let files = readdirSync(`${process.cwd()}/src/events/${dir}`).filter((file) => file.endsWith(".js"));

        for (let file of files) {
            let event = require(`${process.cwd()}/src/events/${dir}/${file}`)

            if (event.once) {
                client.once(event.name, (...args) => event.execute(...args));

            } else {
                client.on(event.name, (...args) => event.execute(...args));
            }
        }
    })
}