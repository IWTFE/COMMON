var webpack=require('webpack');
module.exports={
  entry:['webpack-dev-server/client?http://127.0.0.1:8080','webpack/hot/only-dev-server','./index.js'],
  output:{
    path:__dirname,
    filename:'bundle.js'
  },
  devtool:'source-map',
  module:{
    loaders:[
      {test:/\.js$/,loader:'babel'},
      {test:/\.css$/,loader:'style!css'}
    ]
  },
  devServer:{
    inline:true
  }
}
