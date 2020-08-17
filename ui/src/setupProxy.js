const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://51.136.76.17:8080",
      headers: {
        Connection: "keep-alive"
      },
      changeOrigin: true
    })
  );
};
