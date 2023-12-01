import avatar from "../assets/zsu.PNG";
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
          备案号：鄂ICP备2023021023号-1
        </p>
      </aside>
      <nav>
        <header className="footer-title">联系我们：</header>
        <div className="grid grid-flow-row gap-4">
          <div>
            <a
              target="_blank"
              href="https://sph.sysu.edu.cn/?page=4"
              rel="noreferrer"
            >
              学院官网
            </a>
          </div>
          <div>电话: 8620－87330678</div>
          <div>邮箱: gwxyb@mail.sysu.edu.cn</div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
