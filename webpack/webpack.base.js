const path = require('path');
const devMode = process.env.NODE_ENV !== 'production'

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    devtool: 'source-map',
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
                    { loader:  MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
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
            new MiniCssExtractPlugin({
                filename: '[name].css'
            }),
            devMode && new LiveReloadPlugin()
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