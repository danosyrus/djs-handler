const config = require("@config");
const mongoose = require("mongoose");

if (config.client.database.enabled === true) {
    mongoose.connect(config.client.database.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};
