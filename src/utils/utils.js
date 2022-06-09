const { whiteBright, blueBright, greenBright } = require("chalk");
const { MessageEmbed } = require("discord.js");
const moment = require("moment");

module.exports.log = (args) => {
    const date = `[${moment().format("DD-MM-YY ~ H:m:s")}]`
    console.log(blueBright.bold(date) + whiteBright.bold(" - ") + greenBright.bold("[LOG]: ") + whiteBright.bold(args))
};

module.exports.embed = async(embed) => {
    let newEmbed = new MessageEmbed()
    embed = {...newEmbed, ...embed }
    return embed;
};
