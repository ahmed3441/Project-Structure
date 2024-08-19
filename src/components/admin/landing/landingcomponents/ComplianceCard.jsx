import {FaCheckCircle } from "react-icons/fa";
import Girl  from "../../../../assets/images/girl.jpg"
import Girl2  from "../../../../assets/images/girl2.jpg"


const AtmCards = () => {
  const helloItems = ['Identity Verifiations', 'Secure credit card data tokenization', 'Online and mobile payments', 'IGlobal regulations and compliance'];
  return (
    <div>
      <div className="container w-[70%] mx-auto mt-20">
        <div className="bg-gradient-to-b from-[#F3F7FA] to-white h-[550px] rounded-tl-[104px] p-6">
          <div className="grid grid-cols-12 gap-6 h-full">
         
           <div className="col-span-6 space-y-4 flex justify-center">
  <div className="mt-5 w-96 relative">
    <div className="relative w-full h-auto bg-gradient-to-t from-[#324054] to-[#324054]">
      <img src={Girl} alt="" className="w-full h-auto object-cover" />
      <img src={Girl2} alt="" className="w-full h-auto opacity-40" />
 <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-100"></div>
    </div>
    <div className="absolute top-44 bottom-20 left-0 right-0 bg-gradient-to-t from-[#1E293B] to-[#334155] p-5">
      <p className="text-[#e2e8f0] text-base font-medium">
        "This card is awesome. The apps let me link foriegn cards with the new one which makes everything 100 imes easier. Like Apple Pay, online shopping without useless phone 
        confirmation. I wish new this earlier."
      </p>
      <p className="text-[#e2e8f0] text-base font-medium mt-3">Elisa Koeppel <span className="text-base font font-medium text-[#94a3b8]">- CEO & Co-Founder</span></p>
    </div>
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
            <span className="font-font-aspekta text-[#64748b] text-lg leading-7 font-normal">{item}</span>
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
