import { useEffect, useState } from "react";
import api, { authUrl } from "../api/index";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import { Toaster, toast } from "sonner";
import Card from "../components/Card";
import Footer from "../components/Footer";
import _ from "../assets/utils";
import Modal from "../components/Modal";
const Home = function (props) {
  const pollData = [
    {
      title: "心理健康调查",
      description:
        "采用权威有效的情绪水平和心理状态测评工具，可帮助您深入了解自己最近的情绪波动。",
      url: "https://www.wjx.cn/vm/OFmwYD1.aspx?sojumpparm=",
    },
    {
      title: "社会满意度调查",
      description:
        "采用权威有效的BFI-44量表，可帮助您深入了解自己的人格特质。 <br/> 请您先完成新浪微博用户心理健康调查再参与本调查，谢谢!",
      url: "https://www.wjx.cn/vm/YHy33D2.aspx?sojumpparm=",
    },
  ];
  const [isLogin, setIsLogin] = useState(false);
  const [userId, setUserId] = useState("");
  const [pollList] = useState(pollData);
  const [usp] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = async () => {
    toast.loading("登出中...");
    const tk = _.storage.get("tk", 86400);
    try {
      const { result } = await api.logout(tk);
      if (result) {
        _.storage.remove("tk");
        _.storage.remove("uid");
        setIsLogin(false);
        toast.success("登出成功");
      }
    } catch (_) {
      console.log(_);
      toast.error("网络原因，登出失败, 请重试");
    }
  };
  useEffect(() => {
    if (
      _.storage.get("tk", 86400) !== null &&
      _.storage.get("uid", 86400) !== null
    ) {
      setIsLogin(true);
      setUserId(_.storage.get("uid", 86400));
      // toast.success(`欢迎回来`);
      return;
    }
    (async () => {
      try {
        if (usp.size === 0 && usp.get("code") === null) return;
        toast.loading("登陆中...");
        const authCode = usp.get("code");
        const { uid, access_token } = await api.login(authCode);
        if (uid === undefined && access_token === undefined) {
          toast.error("登陆失败，请重试");
          throw new Error("获取token失败, 请重试，或联系开发者");
        } else {
          _.storage.set("uid", uid);
          _.storage.set("tk", access_token);
          setIsLogin(true);
          setUserId(uid);
          toast.success("登陆成功");
          navigate("/Home");
        }
      } catch (_) {
        toast.error("网络繁忙，稍后再试");
        navigate("/Home");
        return;
      }
    })();
  }, [location]);
  return (
    <>
      <Toaster richColors position="top-center"></Toaster>
      <div className="Home">
        <section className="mb-8">
          <Hero
            isLogin={isLogin}
            authUrl={authUrl}
            handleLogout={handleLogout}
          ></Hero>
        </section>
        <div
          className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4 justify-items-center px-4 mb-8"
          id="card"
        >
          {pollList.map((item, index) => (
            <Card
              key={index}
              isLogin={isLogin}
              title={item.title}
              description={item.description}
              url={item.url}
              userId={userId || _.storage.get("uid", 86400)}
            ></Card>
          ))}
        </div>
        <Footer></Footer>
      </div>
      {isLogin ? null : <Modal authUrl={authUrl}></Modal>}
    </>
  );
};

export default Home;
