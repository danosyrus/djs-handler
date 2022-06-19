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

            if (command.developersCmd) {
                let developersId = config.client.developersId;
                if (!developersId.includes(interaction.user.id)) {
                    return;
                };
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