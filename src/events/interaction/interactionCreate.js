// Advanced djs slash command handler made with ❤️ by dano! [github.com/danodee]
const config = require("@config");
const client = require("@root");

module.exports = {
    name: "interactionCreate",
    once: false,
    execute: async(interaction) => {

        if (interaction.isCommand()) {

            const command = client.commands.get(interaction.commandName);
            if (!client.commands.has(interaction.commandName) || !command) {
                return;
            }

            if (command.owner) {
                if (!config.owner.includes(interaction.user.id)) {
                    return;
                }
            };

            if (command.userpermissions) {
                if (!interaction.member.permissions.has(command.userpermissions || [])) {
                    return;
                }
            };

            if (command.botpermissions) {
                if (!interaction.guild.me.permissions.has(command.botpermissions || [])) {
                    return;
                }
            };

            await command.run(client, interaction);

        }
    },
};
