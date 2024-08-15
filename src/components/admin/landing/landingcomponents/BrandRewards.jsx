import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Button from "./Button";
import FourCards from "../../../../assets/images/4-cards.png";
const AtmCards = () => {
    const physicalStoresItems = [
        "Star bucks",
        "Tesco",
        "American Eagle",
        "Bershka",
        "Sainsburry's",
        "Marks & Spencer",
        "Primark",
        "Sportsdirct",
      ];
    
      const onlineStoresItems = [
        "Amazon Prime",
        "Universal Store",
        "Apple One",
        "Booking.com",
        "Netflix",
        "Deliveroo",
        "Spotify",
        "Well made Clothes",
      ];
  return (
    <div>
      <div className="mt-10 container w-[70%] mx-auto">
        <div className="border border-gray-200 h-[650px] rounded-tr-[104px] p-6"> 
          <div className="grid grid-cols-12 gap-6 h-full">
            <div className="col-span-6 flex flex-col justify-center space-y-4 ml-10 ">
              <div className=" text-[#1e293b] font-font-aspekta text-[44px] font-bold leading-[44px]">
              Get cashback rewards on your favourite brands
              </div>
              <div className="mt-8 font-font-aspekta text-[#94a3b8] text-lg leading-7 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>


         
              <div className="grid grid-cols-12">
      <div className="col-span-6 flex flex-col justify-center space-y-4">
        <div className="text-lg font-bold">Physical Stores</div>
        <ul className="list-none">
          {physicalStoresItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-2 text-base text-[#64748b] font-medium mb-3">
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-blue-300" />
                <span>{item}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-6 flex flex-col justify-center space-y-4">
        <div className="text-lg font-bold">Online Stores</div>
        <ul className="list-none">
          {onlineStoresItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-2 text-base text-[#64748b] font-medium mb-3">
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-blue-300" />
                <span>{item}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

              <div>
                <Button
                  className="text-white bg-blue-600 font-font-aspekta font-semibold p-2 rounded-full px-5 flex items-center group hover:bg-blue-700"
                  text="Get your card"
                  icon={FaArrowRight}
                />
              </div>
            
            </div>
            <div className="col-span-6 space-y-4 flex items-center justify-center">
              <div >
                <img
                  src={FourCards}
                  alt=""
                  className=" h-[500px] "
                />
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtmCards;
