import avatar from "../assets/logo.png";
import { useEffect } from "react";
import _ from "../assets/utils";
import styles from "./styles.module.less";
const Hero = function ({ isLogin, authUrl, handleLogout }) {
  useEffect(() => {
    _.scrollSmooth();
  }, [isLogin, authUrl]);
  return (
    <div
      className="hero h-screen relative"
      style={{
        backgroundImage:
          "url(https://pic-resource-yousan.oss-cn-hangzhou.aliyuncs.com/bg.jpg)",
      }}
    >
      <div className={`hero-overlay ${styles.overShadow}`}></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">心理树洞</h1>
          <p className="mb-5" style={{ textAlign: "start" }}>
            <span
              className="text-center"
              style={{ marginBottom: "16px", display: "block" }}
            >
              我们诚邀您参加新浪微博用户调查
            </span>
          </p>
          {isLogin ? (
            <a href="#card" id="scroll-smooth">
              <button
                className="btn btn-primary btn-lg btn-wide"
                style={{ marginTop: "30px" }}
              >
                开始填写
              </button>
            </a>
          ) : (
            <>
              <button
                className="btn btn-primary btn-lg btn-wide"
                style={{ marginTop: "30px" }}
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                开始填写
              </button>
            </>
          )}
        </div>
        <div className="w-[calc(100vw-24px)] flex justify-between items-center absolute top-2">
          <div className="w-64">
            <img src={avatar} alt="avatar"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
