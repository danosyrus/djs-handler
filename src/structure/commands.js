const { readdirSync } = require("fs");

module.exports = async(client) => {
    const array = [];

    client.categories.forEach((dir) => {
        let files = readdirSync(`${process.cwd()}/src/commands/${dir}`).filter((file) => file.endsWith(".js"));

        for (let file of files) {
            let cmd = require(`${process.cwd()}/src/commands/${dir}/${file}`)

            client.commands.set(cmd.name, cmd);
            array.push(cmd);

            if (cmd.aliases) {
                cmd.aliases.map(x => client.commands.set(x, cmd))
            }
        }
    })
    client.on("ready", async() => {
        await client.application.commands.set(array)
    })
}