import card from "../assets/card.png";

const Card = function ({ isLogin, userId, title, description, url }) {
  return (
    <div className="card max-w-7xl bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={card} alt="card" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
        <div className="mt-4 card-actions">
          {isLogin ? (
            <a href={`${url}${userId}`}>
              <button className="btn btn-primary">参加调查</button>
            </a>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              参加调查
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
