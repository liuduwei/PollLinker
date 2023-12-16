import http from "./http";
// api config
const client_secret = "a5bd128c703c6401c31a6605b3f48f9f";
const client_id = "3828707668";
const grant_type = "authorization_code";
const URL = "https://sysu-psysv.cn/#/login";
const redirect_uri_encode = encodeURIComponent(URL);

export const authUrl = `https://api.weibo.com/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_uri_encode}`;

// 登陆
const login = (code) =>
  http.post("/api/auth", {
    code,
    client_secret,
    client_id,
    grant_type,
    redirect_uri: URL,
  });

const logout = (token) =>
  http.post("/api/logout", {
    access_token: token,
  });

// 获取登录者信息
const queryUserInfo = (token, uid) =>
  http.get("/api/getUserInfo", {
    params: {
      access_token: token,
      uid,
    },
  });

/* 暴露API */
const api = {
  login,
  logout,
  queryUserInfo,
};

export default api;
