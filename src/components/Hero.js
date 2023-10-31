import hero from "../assets/hero.jpg";
import avatar from "../assets/zsu.PNG";
import { useEffect } from "react";
import { SiSinaweibo } from "react-icons/si";
import _ from "../assets/utils";
const Hero = function ({ isLogin, authUrl, handleLogout }) {
  useEffect(() => {
    _.scrollSmooth();
  }, [isLogin, authUrl]);
  return (
    <div
      className="hero h-screen relative"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            我们诚邀您参加新浪微博用户调查
          </h1>
          <p className="mb-5" style={{ textAlign: "start" }}>
            <span style={{ marginBottom: "16px", display: "block" }}>
              &#x2022;本调查由中山大学医学统计系课题团队发起，旨在通过社交媒体资料洞察用户情绪波动和心理状态，希望您支持我们的研究！
            </span>
            <span style={{ marginBottom: "16px", display: "block" }}>
              &#x2022;本调查将会收集您最近一年内公开发布的微博，团队向您承诺，收集到的所有信息都会严格保密。
            </span>
            <span style={{ marginBottom: "16px", display: "block" }}>
              &#x2022;参与调查，您可以深入了解最近自己的情绪状态，我们还会未满足数据要求的参与者发放，感谢金，谢谢您的支持！
            </span>
          </p>
          {isLogin ? (
            <a href="#card" id="scroll-smooth">
              <button className="btn btn-primary btn-lg btn-wide">
                开始填写
              </button>
            </a>
          ) : (
            <>
              <button
                className="btn btn-primary btn-lg btn-wide"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                开始填写
              </button>
            </>
          )}
        </div>
        <div className="w-[calc(100vw-24px)] flex justify-between items-center absolute top-6">
          <div className="avatar ">
            <div className="w-16 rounded">
              <img src={avatar} alt="avatar"></img>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {isLogin ? (
              <>
                <p>你好，微博用户</p>
                <button className="btn btn-primary" onClick={handleLogout}>
                  登出
                </button>
              </>
            ) : (
              <a href={authUrl} className="btn btn-primary">
                <SiSinaweibo size={"2rem"}></SiSinaweibo>
                登陆
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
