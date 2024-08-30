  import { BsGearFill } from "react-icons/bs";
  import { FaArrowRight } from "react-icons/fa";
  import CircleSvg from "../../../../assets/svg/circle.svg";
  import Card from "../../../../assets/images/cards.png";
  import Button from "../landingcomponents/Button.jsx";

  import BlueShadow from "../../../../assets/svg/heroIllustration.svg";


  import Cards from "../landingcomponents/Cards.jsx";
  import AtmCards from "./AtmCards.jsx";
  import MapCard from "./MapCard.jsx";
  import BrandRewards from "./BrandRewards.jsx";
  import Accounts from "./Accounts.jsx";
  import ComplianceCard from "./ComplianceCard.jsx";
  import Subscriptions from "./Subscriptions.jsx";
  import FAQS from "./FAQs.jsx";
  import Footer from "./Footer.jsx";
  import { motion, useInView } from 'framer-motion';
import { useRef } from "react";


  const MainPage = () => {

  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });



  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, margin: '0px 0px -100px 0px' });
  const isInView2 = useInView(ref2, { once: true, margin: '0px 0px -100px 0px' });
  const isInView3 = useInView(ref3, { once: true, margin: '0px 0px -100px 0px' });
  const isInView4 = useInView(ref4, { once: true, margin: '0px 0px -100px 0px' });
  const isInView5 = useInView(ref5, { once: true, margin: '0px 0px -100px 0px' });
  const isInView6 = useInView(ref6, { once: true, margin: '0px 0px -100px 0px' });
  const isInView7 = useInView(ref7, { once: true, margin: '0px 0px -100px 0px' });
  const isInView8 = useInView(ref8, { once: true, margin: '0px 0px -100px 0px' });








    return (
      <div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >

       <div className="bg-[#3478F3] h-[550px] rounded-bl-[104px] flex justify-center">
  <div className="container mx-auto px-3 md:px-8 lg:px-10 lg:w-full xl:w-[63%]">
    <div className="flex mt-5 justify-between items-center w-full">
      <BsGearFill className="text-blue-900 text-3xl" />
      <Button color="blue" text="Get your card" icon={FaArrowRight} />
      </div>

    <div className="flex flex-col md:flex-row mt-12 relative gap-x-8">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <div className="font-font-aspekta text-white font-bold mt-16"
             style={{
               fontSize: "clamp(1.5rem, 4vw, 52px)",
               lineHeight: "clamp(1.5rem, 4vw, 52px)"
             }}>
          Create physical and virtual cards for your business
     {/* <div className="relative flex justify-center md:justify-start items-center">
  <img
    src={CircleSvg}
    alt=""
    className="absolute md:relative lg:static"
    style={{
      width: "clamp(150px, 30vw, 384px)",
      height: "clamp(60px, 15vw, 160px)",
      top: "clamp(-65px, -4vw, -64px)",
      left: "clamp(-130px, -8vw, -120px)",
      marginLeft: "clamp(-130px, -8vw, -120px)" // Adjust if needed
    }}
  />
</div> */}

<div className="relative flex justify-center items-center">
      <img
        src={CircleSvg}
        alt=""
        className="hidden md:block absolute"
        style={{
          width: "clamp(150px, 30vw, 384px)",
          height: "clamp(60px, 15vw, 160px)",
          top: "clamp(-65px, -4vw, -64px)",
          left: "clamp(-130px, -8vw, -120px)",
        }}
      />
     
    </div>

    <div className="relative flex justify-center items-center">
      <img
        src={CircleSvg}
        alt=""
        className="block md:hidden absolute"
        style={{
          width: "clamp(150px, 30vw, 384px)",
          height: "clamp(60px, 15vw, 160px)",
          top: "clamp(-35px, -4vw, -64px)",
          left: "clamp(160px, -8vw, -120px)",
        }}
      />
     
    </div>

        </div>
        <div className="mt-8 font-font-aspekta text-blue-200 text-lg leading-7 font-normal">
          Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
        </div>
        <div className="flex mt-7 space-x-4 justify-center md:justify-start">
          <Button color="blue" text="Get your card" icon={FaArrowRight} />
          <Button color="lightBlue" text="Read documentation" />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-5 md:mt-0">
        <img
          src={Card}
          alt="Business Cards"
          className="h-auto z-10"
          style={{
            height: "clamp(300px, 35vw, 550px)"
          }}
        />
      </div>

      
      <div className="absolute inset-0 flex items-center justify-center ml-[400px] hidden md:flex -top-48">
  <img
    src={BlueShadow}
    alt=""
    className=""
  />
</div>

    </div>
  </div>
</div>

</motion.div>


<motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >

        <Cards/>

        </motion.div>


           {/* ATM Cards Animation */}
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <AtmCards />
      </motion.div>

      {/* Map Card Animation */}
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <MapCard />
      </motion.div>

      {/* Brand Rewards Animation */}
      <motion.div
        ref={ref3}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <BrandRewards />
      </motion.div>

      {/* Accounts Animation */}
      <motion.div
        ref={ref4}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Accounts />
      </motion.div>

      {/* Compliance Card Animation */}
      <motion.div
        ref={ref5}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <ComplianceCard />
      </motion.div>

      {/* Subscriptions Animation */}
      <motion.div
        ref={ref6}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView6 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Subscriptions />
      </motion.div>

      {/* FAQs Animation */}
      <motion.div
        ref={ref7}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView7 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <FAQS />
      </motion.div>

      {/* Footer Animation */}
      <motion.div
        ref={ref8}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView8 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Footer />
      </motion.div>


        

        {/* <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <AtmCards />
    </motion.div>



        <MapCard/>
        <BrandRewards/>
        <Accounts/>   
        <ComplianceCard/>
        <Subscriptions/>
        <FAQS/>
        <Footer/> */}

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
