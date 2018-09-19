const environment = {
    development: {
        apiPath: 'https://api.github.com/',
    },
    production: {
        apiPath: 'https://api.github.com/',
    }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({}, environment);