import C1 from "../../../../assets/images/c1.png";
import C2 from "../../../../assets/images/c2.png";
import C3 from "../../../../assets/images/c3.png";
import C4 from "../../../../assets/images/c4.png";

import { GrCheckmark } from "react-icons/gr";
import Button from "../../../../components/admin/landing/landingcomponents/Button";

const Subscriptions = () => {
  const cards = [
    {
      topText: "Starter",
      image: C1,
      midText: "$0/m",
      buttonText: "Get Starter",
      heading: "features include",
      points: [
        { icon: <GrCheckmark />, text: "Contactless payments" },
        { icon: <GrCheckmark />, text: "Mobile payments" },
        { icon: <GrCheckmark />, text: "Extra card (optional)" },
        { icon: <GrCheckmark />, text: "Free payments worldwide" },
        { icon: <GrCheckmark />, text: "Free domestic ATM withdrawals" },
      ],
    },
    {
      topText: "Smart",
      image: C2,
      midText: "$12/m",
      buttonText: "Get Smart",
      heading: "Everything in Starter, plus",
      points: [
        { icon: <GrCheckmark />, text: "Cashback" },
        { icon: <GrCheckmark />, text: "Travel insurance" },
        { icon: <GrCheckmark />, text: "3 extra cards (optional)" },
        { icon: <GrCheckmark />, text: "Flight insurance" },
        { icon: <GrCheckmark />, text: "Two-factor authentication" },
        { icon: <GrCheckmark />, text: "Chatbot and in-app support" },
        { icon: <GrCheckmark />, text: "Discounted domestic" },
      ],
    },
    {
      topText: "You",
      image: C3,
      midText: "$12/m",
      buttonText: "Get You",
      heading: "Everything in Starter, plus",
      points: [
        { icon: <GrCheckmark />, text: "Split and settle bills" },
        { icon: <GrCheckmark />, text: "Money management" },
        { icon: <GrCheckmark />, text: "5 extra cards (optional)" },
        { icon: <GrCheckmark />, text: "Financial tracking" },
        { icon: <GrCheckmark />, text: "Free international and domestic ATM withdrawals" },
      ],
    },
    {
      topText: "Black",
      image: C4,
      midText: "$49/m",
      buttonText: "Get Black",
      heading: "Everything in Starter, plus",
      points: [
        { icon: <GrCheckmark />, text: "Manage subscriptions" },
        { icon: <GrCheckmark />, text: "Savings vaults" },
        { icon: <GrCheckmark />, text: "More details" },
        { icon: <GrCheckmark />, text: "Commission-free stock trade" },
        { icon: <GrCheckmark />, text: "Crypto and commodities" },
        { icon: <GrCheckmark />, text: "Free foreign exchange" },
      ],
    },
  ];

  return (
    <div>
      <div className="border border-gray-200 mt-10 container w-[70%] mx-auto h-auto rounded-tr-[104px] p-6">
        <div className="mt-8">
          <div className="ml-28">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-8">
                <div className="text-black font-font-aspekta text-[44px] font-bold leading-[44px]">
                  Get the only custom super card you will ever need
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-7">
                <div className="mt-4 font-font-aspekta text-[#7B899C] text-lg leading-7 font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {cards.map((card, index) => (
                <div key={index} className="relative">
                  {index === 1 && (
                    <div className="absolute -top-3 left-[80%] transform -translate-x-[60%] bg-[#16BFAF] text-white text-sm font-bold px-3 py-1 rounded-full">
                    Popular
                  </div>
                  
                  )}
                  <div
                    className={`p-4 ${index === 1 ? 'bg-[#DCEAFE]' : ''} rounded-br-[100px] hover:bg-[#DCEAFE] p-5`}
                  >
                    <div className="text-center text-lg font-bold text-[#1e293b] font-font-aspekta">
                      {card.topText}
                    </div>
                    <img
                      src={card.image}
                      alt={card.topText}
                      className="mx-auto mt-4 w-56"
                    />
                    <div className="text-center mt-2 text-2xl font-bold text-[#1e293b] font-font-aspekta">
                      {card.midText}
                    </div>
                    <Button
                      color={index === 1 ? 'Darkblack' : 'darksBlue'}
                      text={card.buttonText}
                      className="w-full"
                    />
                    <div className="mt-4 text-base font-medium text-[#1e293b]">
                      {card.heading}
                    </div>
                    <div className="mt-4">
                      {card.points.map((point, i) => (
                        <div key={i} className="flex items-center mt-2">
                          <div className="mr-2 text-green-600">{point.icon}</div>
                          <div className="text-base font-normal text-[#1e293b]">
                            {point.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
