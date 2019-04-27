const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "main.min.css",
});

const extractAdmin = new ExtractTextPlugin({
  filename: "fallback.min.css",
});

const extractSettings = {
  use: [{
      loader: "css-loader",
      options: {
        url: false,
      }
  }, 
  
  
  
  {
    loader: "sass-loader",
  },
 
],
  // use style-loader in development
  fallback: "style-loader"
}

module.exports =  {

   

  resolve: {
    alias: {
      assets: path.resolve(__dirname, '../dist/assets'),
    },
  },
  
  entry: 
  {
  
    main: './src/index.js',
  }
  ,
  plugins: [
      extractSass,
    extractAdmin
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
    },
  
    

  //When run in WordPress we want to use external jquery
  externals: {
    //jquery: 'jQuery'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        },
        { loader: "ifdef-loader", options: {
          DEBUG: false,
        } } 
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },

      {
        test: /\.scss$/,
        exclude: /fallback\.scss$/,
        use: extractSass.extract(extractSettings)
      },

     {
        test: /fallback\.scss$/,
        use: extractAdmin.extract(extractSettings)
      }, 
      
      
      
      {
        test: /\.css$/,
        loader: 'style-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        options: {
          minimize: true
        }
      }
    
    ]
  }

};