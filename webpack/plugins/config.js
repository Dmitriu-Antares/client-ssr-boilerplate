
const environment = {
    development: {
        apiPath: 'https://api.github.com/',
        isClient: typeof(window) !== "undefined"
    },
    production: {
        apiPath: 'https://api.github.com/',
        isClient: typeof(window) !== "undefined"
    }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({}, environment);