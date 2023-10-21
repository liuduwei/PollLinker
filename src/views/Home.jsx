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
      title: "社会满意度调查",
      description:
        "当今社会越来越好了，这项调查是针对社区居民的社会满意度调查来写的",
      url: "https://www.wjx.cn/vm/YHy33D2.aspx?sojumpparm=",
    },
    {
      title: "社会满意度调查",
      description:
        "当今社会越来越好了，这项调查是针对社区居民的社会满意度调查来写的",
      url: "https://www.wjx.cn/vm/YHy33D2.aspx?sojumpparm=",
    },
    {
      title: "社会满意度调查",
      description:
        "当今社会越来越好了，这项调查是针对社区居民的社会满意度调查来写的",
      url: "https://www.wjx.cn/vm/YHy33D2.aspx?sojumpparm=",
    },
    {
      title: "社会满意度调查",
      description:
        "当今社会越来越好了，这项调查是针对社区居民的社会满意度调查来写的",
      url: "https://www.wjx.cn/vm/YHy33D2.aspx?sojumpparm=",
    },
    {
      title: "社会满意度调查",
      description:
        "当今社会越来越好了，这项调查是针对社区居民的社会满意度调查来写的",
      url: "https://www.wjx.cn/vm/YHy33D2.aspx?sojumpparm=",
    },
    {
      title: "社会满意度调查",
      description:
        "当今社会越来越好了，这项调查是针对社区居民的社会满意度调查来写的",
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
      toast.success(`欢迎回来`);
      return;
    }
    (async () => {
      try {
        if (usp.size === 0 && usp.get("code") === null) return;
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
        toast.error(_);
        return;
      }
    })();
  }, [location]);
  return (
    <>
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
      <Toaster richColors position="top-center"></Toaster>
    </>
  );
};

export default Home;
