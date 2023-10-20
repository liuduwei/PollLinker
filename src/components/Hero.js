import hero from "../assets/hero.jpg";
import avatar from "../assets/zsu.PNG";
import { SiSinaweibo } from "react-icons/si";
const Hero = function ({ isLogin }) {
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
          <h1 className="mb-5 text-5xl font-bold">欢迎来到中山大学问卷平台</h1>
          <p className="mb-5">
            中文乱数，又称中文虚构文本、中文伪文本，是印刷和排版领域所使用的文本。它是一种在排版、打字和印刷中，为了让文字内容不受文本的影响而使用的虚构文字。中文乱数有字体、字号和排版的特性，能够以最接近真实文字的外观及书写结构呈现出来。中文乱数在不让读者分心的情况下，能够让文字及其字母之间的间距和字母之间的间距明显呈现出来。
          </p>
          <button className="btn btn-primary btn-lg btn-wide">开始填写</button>
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
                <p>用户86787878</p>
                <a className="btn btn-primary">登出</a>
              </>
            ) : (
              <a className="btn btn-primary">
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
