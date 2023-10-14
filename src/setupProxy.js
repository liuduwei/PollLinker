const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/auth", {
      target: "https://api.weibo.com/oauth2/access_token",
      changeOrigin: true,
      ws: true,
      pathRewrite: { "^/api/auth": "" },
    })
  );
  app.use(
    createProxyMiddleware("/api/logout", {
      target: "https://api.weibo.com/oauth2/revokeoauth2",
      changeOrigin: true,
      ws: true,
      pathRewrite: { "^/api/logout": "" },
    })
  );
  app.use(
    createProxyMiddleware("/api/getUserInfo", {
      target: "https://api.weibo.com/2/users/show.json",
      changeOrigin: true,
      ws: true,
      pathRewrite: { "^/api/getUserInfo": "" },
    })
  );
};
