// work with all paths in a cross-platform manner
const path = require('path');

// plugins covered below
var webpack= require('webpack');
 var MiniCssExtractPlugin = require("mini-css-extract-plugin");
 


module.exports = {
    devtool: 'eval',
    entry:  __dirname + "/src/script1.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
      filename: "bundle.js",
   
    },
  resolve: { alias: {
    'jquery': path.join(__dirname, '/node_modules/jquery/dist/jquery.min.js')
},
      extensions: ['.js', '.jsx', '.css', '.png', '.jpg', '.gif', '.jpeg'], },
    module:{
        /*  loaders:[{
            
              exclude:[/node_modules/],
              query: {
                  presets: ['es2015'],
                  plugins: ["transform-object-assign", "transform-runtime"]
                },
                loaders: "babel-loader"
          }]
      ,*/
       //  rules: [
        //  {
             /* test: /\.js$/,
              enforce: "pre",
              loaders: "babel-loader",
                 exclude: /node_modules/, // exclude any and all files in the node_modules folder
  */      //  test: /\.js$/,
           // enforce: "pre", // preload the jshint loader
       //     exclude: /node_modules/, // exclude any and all files in the node_modules folder
        //    exclude: path.join(__dirname, '/node_modules'),
  
        //  }]
      
        
          rules: [
              { test: /\.css$/,  
              use: [
                MiniCssExtractPlugin.loader,
          "css-loader"
              ]
            },
            //  { test: /\.ts$/, use: 'ts-loader' },
              {
                 
                  // ,
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: '/node_modules',
              enforce: "pre",
             
                          
              },
              
              {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader',
              },
              {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                  'file-loader?name=images/[name].[ext]',
                  'image-webpack-loader?bypassOnDebug'
                ]
              }
          ]
  
      
      },
      plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery',
          }),
       
        
        new MiniCssExtractPlugin({
          filename: "bundle.css"
        })
      ]
      
     /* plugins: [
          new Webpack.ProvidePlugin({
              $: 'jquery',
              jQuery: 'jquery',
              'window.jQuery': 'jquery'
          }),
      ]*/
      }