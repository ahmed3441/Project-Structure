import { BsGearFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import CircleSvg from "../../../../assets/svg/circle.svg";
import Card from "../../../../assets/images/cards.png";
import Button from "../landingcomponents/Button.jsx";


import Cards from "../landingcomponents/Cards.jsx";
import AtmCards from "./AtmCards.jsx";
import MapCard from "./MapCard.jsx";
import BrandRewards from "./BrandRewards.jsx";
import Accounts from "./Accounts.jsx";
import ComplianceCard from "./ComplianceCard.jsx";

const MainPage = () => {
  return (
    <div>
      <div className="bg-[#3478F3] h-[550px] rounded-bl-[104px] flex justify-center">
        <div className="container w-3/5">
          <div className="flex mt-5 justify-between items-center w-full">
            <BsGearFill className="text-blue-900 text-3xl" />
            <Button
              className="text-white bg-blue-950 font-font-aspekta font-semibold p-2 rounded-full px-5 flex items-center group"
              text="Get your card"
              icon={FaArrowRight}
            />
          </div>

          <div className="flex mt-12">
            <div className="w-1/2">
              <div>
                <div className=" font-font-aspekta text-[52px] leading-[52px] font-bold text-white mt-16">
                  Create physical and virtual cards for your buisness
                  <div className="relative flex items-center">
                    <img
                      src={CircleSvg}
                      alt=""
                      className="w-96 h-40 absolute -top-[64px] left-0 -ml-32"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 font-font-aspekta text-blue-200 text-lg leading-7 font-normal">
                Our landing page template works on all devices, so you only{" "}
                <br />
                have to set it up once, and get beautiful results forever.
              </div>

              <div className="flex mt-7">
              <Button
              className="text-white bg-blue-950 font-font-aspekta font-semibold p-2 rounded-full px-5 flex items-center group"
              text="Get your card"
              icon={FaArrowRight}
            />
            <Button
              className="text-white bg-sky-400 font-font-aspekta font-semibold p-2 rounded-full px-5 mx-5"
              text="Read documentation"              
            />
              </div>
            </div>

            <div className="w-1/2">
              <img
                src={Card}
                alt="Business Cards"
                className=" h-auto flex justify-end"
              />
            </div>
          </div>
        </div>
      </div>
      <Cards/>
      <AtmCards/>
      <MapCard/>
      <BrandRewards/>
      <Accounts/>   
      <ComplianceCard/>
    </div>
  );
};

export default MainPage;
