const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.whyour.cn"
    : "http://localhost:3000";

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: baseUrl,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
