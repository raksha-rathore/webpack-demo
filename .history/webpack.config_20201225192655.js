// start by requiring the default path module to access the file location and make changes to the file location.
const path = require('path');
// the HTMLWebpackPlugin to generate an HTML file to be used for serving bundled JavaScript file/files.
const HtmlWebpackPlugin = require('html-webpack-plugin');


// Export.module object with some properties in them.
module.exports = { 
  // Define where the application starts
  // The entry property, which is used to specify which file webpack should start with to get the internal dependency graph created.
  entry:'./src/index.js',
  // The output property specifies where the bundled file should be generated and what the name of the bundled file would be.
  // This is done by the output.path and output.filename properties.
  output: {   
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js' 
  },
  //Setup loaders
  // specify what webpack should do for a specific type for file.
  // Webpack out of box only understands JavaScript and JSON,
  // but if your project has any other language used, this would be the place to specify what to do with that new language.
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