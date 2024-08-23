import { FaArrowRight } from "react-icons/fa";
import Map from "../../../../assets/images/map.png";
import Button from "./Button";
import Person from "../../../../assets/images/person.png";

const AtmCards = () => {
  return (
    <div className="container w-full md:w-[70%] mx-auto mt-36 md:mt-20">
      <div className="bg-gradient-to-b from-[#F3F7FA] to-white lg:h-[550px] rounded-tl-[104px] p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Text Section */}
          <div className="col-span-1 md:col-span-6 flex flex-col justify-center items-center md:items-start space-y-4 order-1 md:order-2">
            <div className="text-[#1E293B] font-font-aspekta text-[32px] leading-8 md:text-[44px] font-bold md:leading-[44px] text-center md:text-left">
              Spend your money everywhere, pay anyone effortlessly
            </div>
            <div className="mt-8 font-font-aspekta text-[#64748b] text-[clamp(0.875rem, 1.5vw, 1rem)] leading-[clamp(1.25rem, 2vw, 1.5rem)] text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam, quis nostrud exercitation.
            </div>
            <div>
              <Button
                color="darkBlue"
                text="Get your card"
                icon={FaArrowRight}
              />
            </div>
            <div className="flex items-center mt-3">
              <img
                src={Person}
                alt="person"
                className="w-8 h-8 rounded-full ml-2 cursor-pointer"
              />
              <p className="font-font-aspekta text-[#64748b] text-[clamp(0.875rem, 1vw, 1rem)] leading-6 font-normal ml-2 mt-3 text-center md:text-left">
                “We know the card market very well and this product provides
                the speed, flexible account model and API-first approach that
                no one else can.”
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-span-1 md:col-span-6 flex justify-center items-center order-2 md:order-1">
            <img
              src={Map}
              alt=""
              className="h-[500px] w-full md:w-auto mx-0 md:mx-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtmCards;
