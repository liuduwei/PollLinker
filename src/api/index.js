import http from "./http";
// api config
const client_secret = "a5bd128c703c6401c31a6605b3f48f9f";
const client_id = "3828707668";
const grant_type = "authorization_code";
const redirect_uri = "http://yousan.xyz";
export const authUrl = `https://api.weibo.com/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`;

// 登陆
const login = (code) =>
  http.post("/api/auth", {
    code,
    client_secret,
    client_id,
    grant_type,
    redirect_uri,
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
  queryUserInfo,
};

export default api;
