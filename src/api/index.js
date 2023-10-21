import http from "./http";
// api config
const client_secret = "a5bd128c703c6401c31a6605b3f48f9f";
const client_id = "3828707668";
const grant_type = "authorization_code";
/*redirect_uri convert by https://anspoon.com/url-conveter use convert value*/
const redirect_uri_convert = "http%3A%2F%2Flocal.polllinker.com%2F%23%2Flogin";
// const redirect_uri = "http://yousan.xyz";
const redirect_uri = "http://local.polllinker.com/#/login";
export const authUrl = `https://api.weibo.com/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_uri_convert}`;

// 登陆
const login = (code) =>
  http.post("/api/auth", {
    code,
    client_secret,
    client_id,
    grant_type,
    redirect_uri,
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
