import Card1 from "../../../../assets/svg/card1.svg";
import Card2 from "../../../../assets/svg/card2.svg";
import Card3 from "../../../../assets/svg/card3.svg";

const Cards = () => {
  return (
    <div className="py-10 mt-24 mb-12">
      <div className="container mx-auto md:w-3/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


        <div className="card-main">
          <img src={Card1} alt="Card 1" className="card-img" />
          <h2 className="card-heading">Create Custom Cards</h2>
          <p className="card-content">
            Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.
          </p>
          <div className="card-divider" style={{ margin: "auto 0" }}></div>
        </div>


        <div className="card-main">
          <img src={Card2} alt="Card 2" className="card-img" />
          <h2 className="card-heading">Create Custom Cards</h2>
          <p className="card-content">
            Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.
          </p>
          <div className="card-divider" style={{ margin: "auto 0" }}></div>
        </div>


        <div className="card-main">
          <img src={Card3} alt="Card 3" className="card-img" />
          <h2 className="card-heading">Create Custom Cards</h2>
          <p className="card-content">
            Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.
          </p>
        </div>

        
      </div>
    </div>
  );
}

export default Cards;
