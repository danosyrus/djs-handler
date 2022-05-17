const { red } = require("chalk");

process.on("unhandledRejection", (error) => {
    console.error(red.bold(error));
});

process.on("uncaughtException", (error) => {
    console.error(red.bold(error));
});

process.on("exit", error => {
    console.error(red.bold(error));
});

process.on("multipleResolves", (error) => {
    console.error(red.bold(error));
});
