// Advanced djs slash command handler made by dano! [github.com/danodee]
const { green, white, cyanBright } = require("chalk");

module.exports = {
    name: "ready",
    once: true,
    execute: async() => {
        console.log(white.bold("[") + green.bold("STATUS") + white.bold("] ") + cyanBright.bold("ONLINE"));
    },
};