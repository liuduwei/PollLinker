const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const qs = require("qs");
const app = express();
const port = 3000; // 你可以选择任何你需要的端口号

// 使用 bodyParser 解析 JSON 请求体
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// 创建一个 POST 路由以处理转发
app.post("/api/auth", (req, res) => {
  console.log("123");
  const { code, client_secret, client_id, grant_type, redirect_uri } = req.body;
  console.log(
    "code, client_secret, client_id, grant_type, redirect_uri ",
    code,
    client_secret,
    client_id,
    grant_type,
    redirect_uri
  );
  // 这是你想要转发到的目标服务器 URL
  const targetUrl = "https://api.weibo.com/oauth2/access_token";

  // 使用 axios 发送 POST 请求到目标服务器
  axios
    .post(
      targetUrl,
      qs.stringify({
        code,
        client_secret,
        client_id,
        grant_type,
        redirect_uri,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((response) => {
      // 请求成功，返回目标服务器的响应
      console.log(response);
      res.json(response.data);
    })
    .catch((error) => {
      // 请求失败，返回错误信息
      if (error.response) {
        console.log("error : ", error);
        // 服务器回应了请求，但状态码不是 2xx
        res.status(error.response.status).json(error.response.data);
      } else if (error.request) {
        // 请求已发送，但未收到响应
        res.status(500).json({ message: "No response received" });
      } else {
        // 请求设置触发错误
        res.status(500).json({ message: "Error", error: error.message });
      }
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
