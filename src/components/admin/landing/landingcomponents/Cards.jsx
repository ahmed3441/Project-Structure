import Card1 from "../../../../assets/svg/card1.svg";
import Card2 from "../../../../assets/svg/card2.svg";
import Card3 from "../../../../assets/svg/card3.svg";

const Cards = () => {
  return (
    <div className="py-10 mt-24 mb-12">
      <div className="container mx-auto md:w-3/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded flex flex-col relative">
          <img src={Card1} alt="Card 1" className="w-12 h-12 mb-4" />
          <h2 className="text-xl font-bold leading-7 font-font-aspekta mb-2">Create Custom Cards</h2>
          <p className="text-base leading-6 font-normal text-gray-600">
            Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.
          </p>
          <div className="absolute inset-y-0 right-0 w-0.5 h-16 bg-gray-300" style={{ margin: "auto 0" }}></div>

        </div>
        <div className="bg-white p-4 rounded flex flex-col relative">
          <img src={Card2} alt="Card 2" className="w-12 h-12 mb-4" />
          <h2 className="text-xl font-bold leading-7 font-font-aspekta mb-2">Create Custom Cards</h2>
          <p className="text-base leading-6 font-normal text-gray-600">
            Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.
          </p>
          <div className="absolute inset-y-0 right-0 w-0.5 h-16 bg-gray-300" style={{ margin: "auto 0" }}></div>
        </div>
        <div className="bg-white p-4 rounded flex flex-col">
          <img src={Card3} alt="Card 3" className="w-12 h-12 mb-4" />
          <h2 className="text-xl font-bold leading-7 font-font-aspekta mb-2">Create Custom Cards</h2>
          <p className="text-base leading-6 font-normal text-gray-600">
            Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
