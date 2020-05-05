module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://wannianrili.51240.com",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
