const client = require("@root");

module.exports = {
    name: "warn",
    once: false,
    execute: async(error) => {
       client.utils.log(error)
    },
};
