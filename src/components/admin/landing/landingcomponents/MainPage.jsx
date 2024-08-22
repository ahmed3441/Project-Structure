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
  import Subscriptions from "./Subscriptions.jsx";
  import FAQS from "./FAQs.jsx";
  import Footer from "./Footer.jsx";

  const MainPage = () => {
    return (
      <div>
        {/* <div className="flex justify-center items-center ">        <div className=" bg-gray-400 w-96 h-20 p-custom-blue">Ahmed</div>
        </div> */}
        <div className="bg-[#3478F3] h-[550px] rounded-bl-[104px] flex justify-center ">
        <div className="container w-[60%] mx-auto px-0">
        <div className="flex mt-5 justify-between items-center w-full">
              <BsGearFill className="text-blue-900 text-3xl" />
              {/* <Button
                className="text-white bg-blue-950 font-font-aspekta font-semibold p-2 rounded-full px-5 flex items-center group"
                text="Get your card"
                icon={FaArrowRight} 
              /> */}
              <Button
          color="blue"
          text="Get your card"
          icon={FaArrowRight}
        />
            </div>

            <div className="flex mt-12 relative">
              <div className="w-1/2 ">
                <div>
                  <div className=" font-font-aspekta text-[52px] leading-[52px] font-bold text-white mt-16 ">
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
                  have to set it up once, and get beautiful results forever.
                </div>

                <div className="flex mt-7 space-x-4">
                {/* <Button
                className="text-white bg-blue-950 font-font-aspekta font-semibold p-2 rounded-full px-5 flex items-center group"
                text="Get your card"
                icon={FaArrowRight}
              /> */}
              <Button
          color="blue"
          text="Get your card"
          icon={FaArrowRight}
        />

  <Button
          color="lightBlue"
          text="Read documentation"/>
        
              {/* <Button
                className="text-white bg-sky-400 font-font-aspekta font-semibold p-2 rounded-full px-5 mx-5"
                text="Read documentation"              
              /> */}
                </div>
              </div>

              <div className="w-[570px] mt-5 ">
                <img
                  src={Card}
                  alt="Business Cards"
                  className=" h-[550px]"
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
        <Subscriptions/>
        <FAQS/>
        <Footer/>
      </div>
    );
  };

  export default MainPage;















// import { BsGearFill } from "react-icons/bs";
// import { FaArrowRight } from "react-icons/fa";
// import CircleSvg from "../../../../assets/svg/circle.svg";
// import Card from "../../../../assets/images/cards.png";
// import Button from "../landingcomponents/Button.jsx";
// import Cards from "../landingcomponents/Cards.jsx";
// import AtmCards from "./AtmCards.jsx";
// import MapCard from "./MapCard.jsx";
// import BrandRewards from "./BrandRewards.jsx";
// import Accounts from "./Accounts.jsx";
// import ComplianceCard from "./ComplianceCard.jsx";
// import Subscriptions from "./Subscriptions.jsx";
// import FAQS from "./FAQs.jsx";
// import Footer from "./Footer.jsx";

// const MainPage = () => {
//   return (
//     <div>
//       <div className="bg-[#3478F3] h-[550px] rounded-bl-[104px] flex justify-center">
//         <div className="container mx-auto px-4 md:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row mt-5 justify-between items-center w-full">
//             <BsGearFill className="text-blue-900 text-3xl mb-4 md:mb-0" />
//             <Button
//               color="blue"
//               text="Get your card"
//               icon={FaArrowRight}
//               className="md:ml-auto"
//             />
//           </div>

//           <div className="flex flex-col md:flex-row mt-12">
//             <div className="w-full md:w-1/2">
//               <div>
//                 <div className="font-font-aspekta text-[32px] md:text-[52px] leading-[32px] md:leading-[52px] font-bold text-white mt-16">
//                   Create physical and virtual cards for your business
//                   <div className="relative flex items-center">
//                     <img
//                       src={CircleSvg}
//                       alt=""
//                       className="w-64 md:w-96 h-auto absolute -top-[40px] md:-top-[64px] left-0 -ml-16 md:-ml-32"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-8 font-font-aspekta text-blue-200 text-base md:text-lg leading-6 md:leading-7 font-normal">
//                 Our landing page template works on all devices, so you only
//                 <br />
//                 have to set it up once, and get beautiful results forever.
//               </div>

//               <div className="flex flex-col md:flex-row mt-7 space-y-4 md:space-y-0 md:space-x-4">
//                 <Button
//                   color="blue"
//                   text="Get your card"
//                   icon={FaArrowRight}
//                 />
//                 <Button
//                   color="lightBlue"
//                   text="Read documentation"
//                 />
//               </div>
//             </div>

//             <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
//               <img
//                 src={Card}
//                 alt="Business Cards"
//                 className="h-auto max-w-full"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Cards />
//       <AtmCards />
//       <MapCard />
//       <BrandRewards />
//       <Accounts />
//       <ComplianceCard />
//       <Subscriptions />
//       <FAQS />
//       <Footer />
//     </div>
//   );
// };

// export default MainPage;
