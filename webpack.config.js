// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const dotenv = require('dotenv');
const webpack = require('webpack');

// Load correct .env file based on NODE_ENV
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  mode: 'development',
  devServer: {
    static: './dist',
    open: true,
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],

  },
  plugins: [
     new ModuleFederationPlugin({
      name: "microfrontend1",
      filename: "remoteEntry.js",
      exposes: {
        './App': './src/App.js', // Expose the React component to be shared with the host app
      },
      remotes: {
        host_app: `host_app@${process.env.REACT_APP_REMOTE_HOST_URL}`,
      },
shared: {
  react: {
    singleton: true,
    requiredVersion: '^19.1.0',
  },
  'react-dom': {
    singleton: true,
    requiredVersion: '^19.1.0',
  },
  'react-i18next': {
    singleton: true,
    requiredVersion: '^13.0.0',
  },
  i18next: {
    singleton: true,
    requiredVersion: '^23.0.0',
  },
}


    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_ENV': JSON.stringify(process.env.REACT_APP_ENV),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
