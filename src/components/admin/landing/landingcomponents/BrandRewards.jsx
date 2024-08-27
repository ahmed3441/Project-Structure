import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Button from "./Button";
import FourCards from "../../../../assets/images/4-cards.png";

const AtmCards = () => {
  const physicalStoresItems = [
    "Starbucks",
    "Tesco",
    "American Eagle",
    "Bershka",
    "Sainsbury's",
    "Marks & Spencer",
    "Primark",
    "Sportsdirect",
  ];

  const onlineStoresItems = [
    "Amazon Prime",
    "Universal Store",
    "Apple One",
    "Booking.com",
    "Netflix",
    "Deliveroo",
    "Spotify",
    "Well Made Clothes",
  ];

  return (
    <div>
      <div className="mt-10 container w-full md:w-[70%] mx-auto">
        <div className="border border-gray-200 xl:h-[650px] rounded-tr-[104px] p-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
            <div className="col-span-1 md:col-span-6 flex flex-col justify-center space-y-4 md:ml-10 order-1 md:order-2">
              <div className="text-[#1e293b] font-font-aspekta text-[44px] font-bold leading-[44px] text-center md:text-left">
                Get cashback rewards on your favourite brands
              </div>
              <div className="mt-8 font-font-aspekta text-[#94a3b8] text-lg leading-7 font-normal text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="col-span-1 sm:col-span-6 flex flex-col space-y-4">
                  <div className="text-lg font-bold text-center sm:text-left">Physical Stores</div>
                  <ul className="grid grid-cols-2 sm:grid-cols-1 list-none">
                    {physicalStoresItems.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-2 text-base text-[#64748b] font-medium mb-3 justify-center sm:justify-start"
                      >
                        <FaCheckCircle className="text-blue-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-span-1 sm:col-span-6 flex flex-col space-y-4">
                  <div className="text-lg font-bold text-center sm:text-left">Online Stores</div>
                  <ul className="grid grid-cols-2 sm:grid-cols-1 list-none">
                    {onlineStoresItems.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-2 text-base text-[#64748b] font-medium mb-3 justify-center sm:justify-start"
                      >
                        <FaCheckCircle className="text-blue-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-center md:justify-start">
                <Button color="darkBlue" text="Get your card" icon={FaArrowRight} />
              </div>
            </div>

            <div className="col-span-1 md:col-span-6 flex items-center justify-center order-1 md:order-2">
              <img
                src={FourCards}
                alt=""
                className="lg:h-[500px] w-full md:w-auto mx-0 md:mx-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtmCards;
