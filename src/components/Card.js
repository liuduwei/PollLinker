import card from "../assets/card.png";

const Card = function (props) {
  return (
    <div className="card max-w-7xl bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={card} alt="card" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">社会满意度调查</h2>
        <p>当今社会越来越好了，这项调查是针对社区居民的社会满意度调查来写的</p>
        <div className="mt-4 card-actions">
          <button className="btn btn-primary">参加调查</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
