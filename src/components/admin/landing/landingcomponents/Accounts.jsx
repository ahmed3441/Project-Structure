import Logos from "../../../../assets/images/logos.png"

import Card1 from "../../../../assets/svg/card1.svg";
import Card2 from "../../../../assets/svg/card2.svg";
import Card3 from "../../../../assets/svg/card3.svg";
import WhiteShadow from "../../../../assets/svg/logosIllustration.svg";

const Accounts = () => {
    return (
      <div>
        <div className="mt-10 container w-full md:w-[70%] mx-auto bg-[#3478F3] 2xl:h-[850px] rounded-tr-[104px] p-6">
            <div className=" mt-8">
                <div className="md:ml-28">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8">
              <div className="text-white font-font-aspekta text-[44px] font-bold leading-[44px]">
                Get started in minutes and connect all your accounts in one place
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7">
              <div className="mt-4 font-font-aspekta text-[#A4C9FC] text-lg leading-7 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
          </div>

          <div className="flex items-center justify-center mt-16">
          <img
                  src={Logos}
                  alt=""
                  className=" w-[800px] z-10"
                />
          </div>

<div className="relative">
          <div className="absolute inset-0 flex items-end top-44  justify-center">
        <img
          src={WhiteShadow}
          alt=""
          className=""
        />
      </div>
      </div>



          <div className="">
      <div className="container mx-auto w-5/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-start    ">
        <div className=" p-4 rounded flex flex-col relative">
          <img src={Card1} alt="Card 1" className="w-12 h-12 mb-4" />
          <h2 className="text-xl font-bold leading-7 font-font-aspekta mb-2 text-white">Create Custom Cards</h2>
          <p className=" font-font-aspekta text-[#A4C9FC] text-base leading-6 font-normal">
            Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.
          </p>
          <div className="absolute inset-y-0 right-0 w-0.5 h-16 bg-gray-300" style={{ margin: "auto 0" }}></div>

        </div>
        <div className=" p-4 rounded flex flex-col relative">
          <img src={Card2} alt="Card 2" className="w-12 h-12 mb-4" />
          <h2 className="text-xl font-bold leading-7 font-font-aspekta mb-2 text-white">Create Custom Cards</h2>
          <p className=" font-font-aspekta text-[#A4C9FC] text-base leading-6 font-normal">
            Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.
          </p>
          <div className="absolute inset-y-0 right-0 w-0.5 h-16 bg-gray-300" style={{ margin: "auto 0" }}></div>
        </div>
        <div className=" p-4 rounded flex flex-col">
          <img src={Card3} alt="Card 3" className="w-12 h-12 mb-4" />
          <h2 className="text-xl font-bold leading-7 font-font-aspekta mb-2 text-white">Create Custom Cards</h2>
          <p className=" font-font-aspekta text-[#A4C9FC] text-base leading-6 font-normal">
            Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.
          </p>
        </div>
      </div>
    </div>
    </div>
        </div>
      </div>
    );
  };
  
  export default Accounts;
  