module.exports = {
    name: "warn",
    once: false,
    execute: async(error) => {
        console.warn(error)
    },
};
