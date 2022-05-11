// Advanced djs slash command handler made with ❤️ by dano! [github.com/danodee]
const fs = require("fs")

module.exports = async(client) => {
    const array = [];

    fs.readdirSync(`${process.cwd()}/src/commands`).forEach((dir) => {
        let files = fs.readdirSync(`${process.cwd()}/src/commands/${dir}`).filter((file) => file.endsWith(".js"));

        for (let file of files) {
            let cmd = require(`${process.cwd()}/src/commands/${dir}/${file}`)

            client.commands.set(cmd.name, cmd);
            array.push(cmd);
        }
    })
    client.on("ready", async() => {
        await client.application.commands.set(array)
    })
}
