const path = require("path");
const merge = require("webpack-merge");
const baseConf = require("./webpack.base.js");
var nodeExternals = require('webpack-node-externals');

const config  = {
  entry: './server/server.ts',
  output: {
    filename: 'server.js',
    path: path.join(__dirname, '../dist')
  },
  externals: [nodeExternals()]
};

module.exports = merge(config, baseConf);
