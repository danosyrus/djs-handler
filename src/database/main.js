const mongoose = require("mongoose");
const config = require("@config");
const client = require("@root");

if (config.client.database.enabled === true) {
    mongoose.connect(config.client.database.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(client.utils.log("CONNECTED TO DATABASE"));
};
