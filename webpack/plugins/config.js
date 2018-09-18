const environment = {
    development: {
        mode: 'devs'
    },
    production: {

    }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({}, environment);