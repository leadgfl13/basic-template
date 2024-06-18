const path = require('path');



const HtmlWebpackPlugin = require('html-webpack-plugin');

    

module.exports = {
    mode:"development",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      scriptloading:'defer',
    }),
],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
    
  },
  
};