const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://20.50.219.119:8080/",
      headers: {
        Connection: "keep-alive"
      },
      changeOrigin: true
    })
  );
};
