module.exports={
  lintOnSave:false,
  devServer:{
    port:8080,
    proxy:{
      "/api":{
        ws:true,
        changeOrigin:true,
        target:'http://127.0.0.1:8080',
        pathRewrite:{'^/api':'/api'}
      },

    },
    disableHostCheck:true,
    host:'0.0.0.0'
  },
}
