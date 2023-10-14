import { useEffect, useState } from "react";
import api, { authUrl } from "../api/index";
import { useSearchParams } from "react-router-dom";
import _ from "../assets/utils";

const Home = function (props) {
  const [isLogin, setIsLogin] = useState(false);
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [usp] = useSearchParams();
  // const handleClick = (e) => {
  //   console.log(e);
  // };
  const handleClickButton = async (e) => {
    try {
      const { id, screen_name } = await api.queryUserInfo(
        _.storage.get("tk"),
        _.storage.get("uid")
      );
      if (id === undefined && screen_name === undefined) {
        throw new Error("获取token失败");
      } else {
        setUserId(id);
        setUserName(screen_name);
      }
    } catch (_) {
      console.log(_);
    }
  };
  useEffect(() => {
    if (_.storage.get("tk") !== null) {
      setIsLogin(true);
      return;
    }
    (async () => {
      try {
        console.log(usp, "djfke");
        if (usp.size === 0) return;
        const authCode = usp.get("code");
        const { uid, access_token } = await api.login(authCode);
        console.log(uid, access_token);
        if (uid === undefined && access_token === undefined) {
          throw new Error("获取token失败");
        } else {
          _.storage.set("uid", uid);
          _.storage.set("tk", access_token);
          console.log("setIslogin true");
          setIsLogin(true);
        }
        // cosnt { id, screen_name} = await api.queryUserInfo()
      } catch (_) {
        console.log(_);
        return;
      }
    })();
    // }
    // else {
    //   setIsLogin(true);
    // }
  }, []);
  return (
    <div className="Home">
      <h1>问卷调查平台</h1>
      {!isLogin ? (
        <>
          <p> 尚未登陆</p>
          <a href={authUrl}>登陆(跳转到新浪weibo)</a>
        </>
      ) : (
        <>
          <p>登陆成功，uid：{_.storage.get("uid")}</p>
          <button onClick={handleClickButton}>点击查询账户信息</button>
          <p>用户id: {userId}</p>
          <p>用户名name: {userName}</p>
        </>
      )}
    </div>
  );
};

export default Home;
