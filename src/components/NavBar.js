import avatar from "../assets/avatar.png";
const NavBar = function ({ avatar1, isLogin }) {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="avatar">
          <div className="w-10 rounded">
            <img src={avatar} alt="avatar"></img>
          </div>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">问卷平台</a>
      </div>
      <div className="navbar-end">
        {isLogin ? (
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>用户7099898</summary>
                <ul className="p-2 bg-base-100 mt-1">
                  <li>
                    <a>登出</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        ) : (
          <a className="btn btn-primary">微博登陆</a>
        )}
      </div>
    </div>
  );
};

export default NavBar;