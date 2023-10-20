import avatar from "../assets/zsu.PNG";
import { AiOutlineWechat } from "react-icons/ai";
import { SiSinaweibo } from "react-icons/si";
import { AiFillPhone } from "react-icons/ai";
const Footer = function (props) {
  return (
    <footer className="footer sm:grid-flow-col p-10 bg-neutral text-neutral-content">
      <aside>
        <div className="avatar ">
          <div className="w-16 rounded">
            <img src={avatar} alt="avatar"></img>
          </div>
        </div>
        <p>
          中山大学 @1992
          <br />
          备案号：
        </p>
      </aside>
      <nav>
        <header className="footer-title">联系我们：</header>
        <div className="grid grid-flow-col gap-4">
          <a>
            <AiOutlineWechat size={24}></AiOutlineWechat>
          </a>
          <a>
            <AiFillPhone size={24}></AiFillPhone>
          </a>
          <a>
            <SiSinaweibo size={24}></SiSinaweibo>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
