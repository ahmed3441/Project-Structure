import { FaArrowRight } from "react-icons/fa";
import AtmCard from "../../../../assets/images/3-cards.png";
import Button from "./Button";
import Person from "../../../../assets/images/person.png";
import BlueShadow from "../../../../assets/svg/cardsIllustration.svg";

const AtmCards = () => {
  return (
    // <div className="bg-[#1E293B] xl:h-[37rem] rounded-tr-[100px] p-6 container mx-auto w-full md:w-[70%] py-20 relative">
    <div className="bg-[#1E293B] xl:h-[37rem] rounded-tr-[100px] p-6 container mx-auto w-full md:w-[70%] py-20 relative min-h-[34rem] sm:min-h-[33rem] md:min-h-[50rem] lg:min-h-[40rem] xl:min-h-[37rem]">

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
        <div className="col-span-1 md:col-span-5 flex flex-col justify-center space-y-4 md:ml-10">
        <div
            className="text-white font-font-aspekta font-bold"
            style={{
              fontSize: "clamp(1rem, 4vw, 2.75rem)",
              lineHeight: "clamp(2rem, 5vw, 3rem)",
            }}
          >    Build a flexible card program for your business needs
          </div>
          <div
            className="mt-8 font-font-aspekta text-[#94a3b8]"
            style={{
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              lineHeight: "clamp(1.25rem, 2vw, 1.5rem)"
            }}
          >
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
              className="w-8 h-8 rounded-full"
            />
            <p
              className="font-font-aspekta text-[#94a3b8] leading-6 font-normal ml-2"
              style={{
                fontSize: "clamp(0.875rem, 1vw, 1rem)"
              }}
            >
              “We know the card market very well and this product provides
              the speed, flexible account model and API-first approach that
              no one else can.”
            </p>
          </div>
        </div>
        <div className="col-span-1 md:col-span-7 relative">
          <div className="relative">
            <img
              src={AtmCard}
              alt="ATM Card"
              className="md:rotate-45 absolute md:mt-32 ml-8 z-10"
              style={{
                height: "clamp(200px, 40vw, 550px)",
                // bottom: "-25%" ,
              }}
            />
            <div className="absolute inset-0 bg-[#1E293B] md:hidden" style={{ bottom: 0 }}></div>
          </div>

          <div className="relative">
          <div className="absolute inset-0 flex items-center top-[350px]  justify-center">
        <img
          src={BlueShadow}
          alt=""
          className=""
        />
      </div>
      </div>


        </div>
      </div>
    </div>
  );
};

export default AtmCards;
