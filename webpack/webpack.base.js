const path = require('path');

module.exports = {
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
    },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/,
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
          { loader: 'style-loader' },
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
  }
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