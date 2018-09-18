const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin')
const DeleteFiles = require('./plugins/production.plugins')
const config = require('./plugins/config')
const webpack = require('webpack')

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    node: {
        fs: "empty",
        net: "empty"
    },
    externals: ['express'],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'awesome-typescript-loader',
                exclude: [/node_modules/]
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                exclude: [/node_modules/]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'node-style-loader',
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            namedExport: true,
                            camelCase: true,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: './webpack/'
                            }
                        }
                    },
                ]
            },
        ]
    },
        plugins: [
            new webpack.DefinePlugin({
                __ENV__: JSON.stringify(config)
            }),
            new LiveReloadPlugin(),
            new DeleteFiles({options: true})
	    ]
}
/*
module.exports = function(env, argv){
  if (argv.mode === 'development') {
    config.devtool = 'inline-source-map';
  }
  
  if (argv.mode === 'production') {
    //...
  }
  
  return config;
}
  */