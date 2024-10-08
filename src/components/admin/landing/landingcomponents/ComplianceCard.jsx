import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Girl from '../../../../assets/images/girl.jpg';
import Girl2 from '../../../../assets/images/girl2.jpg';

import '../../../../../src/App.css';

const AtmCards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const helloItems = [
    'Identity Verifications',
    'Secure credit card data tokenization',
    'Online and mobile payments',
    'Global regulations and compliance',
  ];

  const slides = [
    {
      image: Girl,
      text: "This card is awesome. The apps let me link foreign cards with the new one which makes everything 100 times easier. Like Apple Pay, online shopping without useless phone confirmation. I wish I knew this earlier.",
      author: "Elisa Koeppel",
      role: "- CEO & Co-Founder",
    },
    {
      image: Girl2,
      text: "This card is awesome. The apps let me link foreign cards with the new one which makes everything 100 times easier. Like Apple Pay, online shopping without useless phone confirmation. I wish I knew this earlier.",
      author: "Elisa Koeppel",
      role: "- CEO & Co-Founder",
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div>
      <div className="container w-full md:w-[70%] mx-auto mt-20" onClick={handleNextSlide}>
        <div className="bg-gradient-to-b from-[#F3F7FA] to-white xl:h-[550px] rounded-tl-[104px] p-6">
          <div className="grid grid-cols-12 gap-6 h-full">
            
            
          {/* <div className="col-span-6 flex flex-col items-center mt-12">
  <div className="relative w-96">
    <div className="relative w-full h-auto bg-gradient-to-t from-[#334155] to-[#b9c2cf]">
      <img src={slides[currentSlide].image} alt="Slide" className="w-full h-auto object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-100"></div>
    </div>
    <div className="absolute bg-gradient-to-t from-[#1E293B] to-[#334155] p-5">
      <p className="text-[#e2e8f0] text-base font-medium">
        {slides[currentSlide].text}
      </p>
      <p className="text-[#e2e8f0] text-base font-medium mt-3">
        {slides[currentSlide].author} <span className="text-base font-medium text-[#94a3b8]">{slides[currentSlide].role}</span>
      </p>
    </div>
  </div>
</div> */}

<div className="col-span-12 lg:col-span-6 flex flex-col items-center mt-12 lg:order-2 mb-10 md:mb-0">
  <div className="relative sm:w-96 lg:order-1 h-[400px]">
    <div className="relative w-full h-auto bg-gradient-to-t from-[#334155] to-[#b9c2cf]">
      <img src={slides[currentSlide].image} alt="Slide" className="w-full h-auto object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-100"></div>
    </div>
    <div className="absolute bg-gradient-to-t from-[#1E293B] to-[#334155] p-5 w-full">
      <p className="text-[#e2e8f0] text-base font-medium">
        {slides[currentSlide].text}
      </p>
      <p className="text-[#e2e8f0] text-base font-medium mt-3">
        {slides[currentSlide].author} <span className="text-base font-medium text-[#94a3b8]">{slides[currentSlide].role}</span>
      </p>
    </div>
  </div>
</div>


{/* 
<div className="col-span-12 lg:col-span-6 flex flex-col items-center mt-12 lg:order2">
  <div className="relative w-full md:w-96 lg:order-1">
    <div className="relative w-full h-auto bg-gradient-to-t from-[#334155] to-[#b9c2cf]">
      <img src={slides[currentSlide].image} alt="Slide" className="w-full h-auto object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-100"></div>
    </div>
    <div className="absolute bg-gradient-to-t from-[#1E293B] to-[#334155] p-5 w-full">
      <p className="text-[#e2e8f0] text-base font-medium">
        {slides[currentSlide].text}
      </p>
      <p className="text-[#e2e8f0] text-base font-medium mt-3">
        {slides[currentSlide].author} <span className="text-base font-medium text-[#94a3b8]">{slides[currentSlide].role}</span>
      </p>
    </div>
  </div>
</div> */}



            {/* Text Section */}
            <div className="col-span-12 lg:col-span-6 flex flex-col justify-center space-y-4 ml-10 order-1 md:order-2 md:pr-20">
              <div className="text-[#1E293B] font-font-aspekta font-bold text-4xl sm:text-[44px] leading-9 sm:leading-[44px] ">
                Compliance built card for businesses and professionals
              </div>
              <div className="mt-8 text-indentation leading-[clamp(1rem, 2vw, 1.5rem)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam, quis nostrud exercitation.
              </div>
              <div>
                {helloItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <FaCheckCircle className="text-blue-500" />
                    <span className="text-indentation leading-[clamp(1rem, 2vw, 1.5rem)] ">{item}</span>
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
