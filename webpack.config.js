var getConfig = require("hjs-webpack");
var config = require('./presentation/config');

var webpackConfig = getConfig({
  in: './index.jsx',
  out: 'dist',
  clearBeforeBuild: true
  // html: config.html
});

webpackConfig.module.loaders = [
 {
  test: /(\.jsx?$)/,
  exclude: /node_modules/,
  loaders: [
    "babel-loader?stage=1"
  ]
 },
 {
  test: /\.(jpe?g|gif|png|ico|svg|woff|ttf)$/,
  loader: "file-loader?name=[path][name].[ext]"
 },
 {
  test: /\.scss$/,
  loader: "style-loader!css-loader?sourceMap!sass-loader!postcss-loader"
 },
 {
  test: /\.css$/,
  exclude: /(node_modules|bower_components)/,
  loader: "style!css"
 },
];


if(process.argv[1].indexOf("webpack-dev-server") !== -1){
  webpackConfig.module.loaders[0].loaders.unshift("react-hot")
}

module.exports = webpackConfig;