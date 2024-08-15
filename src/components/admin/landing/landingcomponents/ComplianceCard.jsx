import {FaCheckCircle } from "react-icons/fa";
import Girl  from "../../../../assets/images/girl.jpg"

const AtmCards = () => {
  const helloItems = ['Identity Verifiations', 'Secure credit card data tokenization', 'Online and mobile payments', 'IGlobal regulations and compliance'];
  return (
    <div>
      <div className="container w-[70%] mx-auto mt-20">
        <div className="bg-[#F3F7FA] h-[550px] rounded-tl-[104px] p-6">
          <div className="grid grid-cols-12 gap-6 h-full">
          <div className="col-span-6 space-y-4">
              <div className="mt-5 ">
                <img
                  src={Girl}
                  alt=""
                  className="  "
                />
              </div>
            </div>  
            <div className="col-span-6 flex flex-col justify-center space-y-4 ml-10">
      <div className="text-[#1E293B] font-font-aspekta text-[44px] font-bold leading-[44px]">
        Compliance built card for businesses and professionals
      </div>
      <div className="mt-8 font-font-aspekta text-[#64748b] text-lg leading-7 font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam, quis nostrud exercitation.
      </div>
      <div>
        {helloItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <FaCheckCircle className="text-blue-500" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtmCards;
