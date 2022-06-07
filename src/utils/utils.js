const { MessageEmbed } = require("discord.js");

module.exports.embed = async(embed) => {
    let newEmbed = new MessageEmbed()
    embed = {...newEmbed, ...embed }
    return embed;
};
