// start by requiring the default path module to access the file location and make changes to the file location.
const path = require('path');
// the HTMLWebpackPlugin to generate an HTML file to be used for serving bundled JavaScript file/files.
const HtmlWebpackPlugin = require('html-webpack-plugin');


// Export.module object with some properties in them.
module.exports = { 
  //This property defines where the application starts
  // The entry property, which is used to specify which file webpack should start with to get the internal dependency graph created.
  entry:'./src/index.js',
  //This property defines the file path and the file name which will be used for deploying the bundled file 
  output: {   
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js' 
  },
  //Setup loaders
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  // Setup plugin to use a HTML file for serving bundled js files
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }) 
  ]
}