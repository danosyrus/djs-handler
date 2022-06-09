const client = require("@root");

process.on("unhandledRejection", (error) => {
    client.utils.log(error);
});

process.on("uncaughtException", (error) => {
    client.utils.log(error);
});

process.on("exit", error => {
    client.utils.log(error);
});

process.on("multipleResolves", (error) => {
    client.utils.log(error);
});
