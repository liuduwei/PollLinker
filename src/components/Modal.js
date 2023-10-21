const Modal = function ({ authUrl }) {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box  text-neutral">
        <h3 className="font-bold text-lg">需要登陆</h3>
        <p className="py-4">
          需要登陆您的
          <span className="text-primary font-bold text-lg"> 微博账号 </span>
          以完成填写，点击下方
          <span className="text-primary font-bold text-lg"> 确认 </span>
          跳转到微博登陆
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-primary mr-4">取消</button>
            <a className="btn btn-primary" href={authUrl}>
              确认
            </a>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
