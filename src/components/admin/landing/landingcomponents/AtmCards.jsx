import { FaArrowRight } from "react-icons/fa";
import AtmCard from "../../../../assets/images/3-cards.png";
import Button from "./Button";
import Person from "../../../../assets/images/person.png";

const AtmCards = () => {
  return (
    <div>
      <div className="">
        <div className="bg-[#1E293B] h-[550px] rounded-tr-[104px] p-6 container w-[70%] mx-auto"> 
          <div className="grid grid-cols-12 gap-6 h-full">
            <div className="col-span-5 flex flex-col justify-center space-y-4 ml-10 ">
              <div className="text-white font-font-aspekta text-[44px] font-bold leading-[44px]">
                Build a flexible card program for your business needs
              </div>
              <div className="mt-8 font-font-aspekta text-[#94a3b8] text-lg leading-7 font-normal">
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
      
                {/* <Button
                  className="text-white bg-blue-600 font-font-aspekta font-semibold p-2 rounded-full px-5 flex items-center group hover:bg-blue-700"
                  text="Get your card"
                  icon={FaArrowRight}
                /> */}
              </div>
              <div className="flex">
                <img
                  src={Person}
                  alt="person"
                  className="w-8 h-8  rounded-full ml-2 cursor-pointer mt-3"
                />
                <p className="font-font-aspekta text-[#94a3b8] text-lbase leading-6 font-normal ml-2 mt-3">
                  “We know the card market very well and this product provides
                  the speed, flexible account model and API-first approach that
                  no one else can.”
                </p>
              </div>
            </div>
            <div className="col-span-7 space-y-4">
              <div >
                <img
                  src={AtmCard}
                  alt=""
                  className="rotate-45 h-[500px] absolute mt-48"
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
