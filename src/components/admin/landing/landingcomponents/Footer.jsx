// import { FaArrowRight } from "react-icons/fa";
// import Button from "../landingcomponents/Button.jsx";
// import { BsGearFill } from "react-icons/bs";
// import { Fragment } from "react";

// const Footer = () => {

//     const headings = [
//         {
//           title: "Essentials",
//           content: [
//             "Payments",
//             "Budgetinf and analytics",
//             "Open banking",
//             "Pockets",
//             "Subscriptions"
//           ],
//         },
//         {
//           title: "Company",
//           content: [
//             "About us",
//             "Diversity / Inclusion",
//             "Sustainability",
//             "Code of conduct",
//             "Financial statements"
//           ],
//         },
//         {
//           title: "Lifestyle",
//           content: [
//             "International products",
//             "Currency exchange",
//             "Lounge and Smart delay",
//           ],
//         },
//         {
//           title: "Company",
//           content: [
//             "Send us an email",
//             "Faceboook",
//             "Twitter",
//             "Instagram",
//             "Tiktok",
//           ],
//         },
//       ];

//     return (
//       <div>
//         <div className="bg-[#1E293B] 2xl:h-[550px] text-center sm:text-left">
//           <div className="container w-full md:w-[65%] mx-auto">
//             <div className="grid grid-cols-12 items-center">
//             <div className="col-span-12 md:col-span-8 mt-20">
//               <div className="text-[#3b82f6] text-xl font-semibold leading-[30px]">
//                 What are you waiting for?
//               </div>
//               <div className="text-[#f1f5f9] text-[44px] leading-[44px] font-bold">
//                 Get the only custom super card
//               </div>
//             </div>
//             <div className="col-span-12 justify-center md:col-span-4 flex md:justify-end space-x-4 mt-12">

//             <Button
//         color="darkBlue"
//         text="Get your card"
//         icon={FaArrowRight}
//       />
//             <Button
//         color="black"
//         text="Get in touch"
//       />
//             </div>
//             </div>
//             <hr className="w-full h-px my-8 bg-gray-700 border-0 dark:bg-gray-700 mt-20"/>

//             <div className="mt-5 ">

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
//         {/* First Column with Logo */}
//         <div className="flex justify-center sm:justify-start">
//       <BsGearFill className="text-blue-600 text-3xl" />
//     </div>

//         {headings.map((item, index) => (
//           <div key={index} className="space-y-2">
//             <h3 className="text-sm font-bold leading-[22px] text-[#f1f5f9]">{item.title}</h3>
//             <ul className=" list-inside text-[#94a3b8] hover:text-[#3b82f6] text-base  font-normal leading-[28px]">
//               {item.content.map((point, i) => (
//                 <li key={i}>{point}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>

//     <Fragment className="flex justify-end  bg-gray-200">
//   <div className="w-[150px] h-[150px] rounded-full bg-[rgba(43,85,151,0.4)] shadow-[0_0_500px_80px_rgba(43,85,151,0.9)] flex items-center justify-center">
//   </div>
// </Fragment>

//     <div className="text-[#64748b] text-xs font-normal mt-10">
//     If you would like to find out more about which entity you receive services from please click here If you have any other questions, please reach out to us via the in-app chat. Custom Bank is a bank established in the Republic of Ireland. Custom Bank is licensed by the European Central Bank and regulated by the Bank of Ireland. Cusom Bank provides credit, payment,  please reach out to us via the  in-app chat  in-app chat current account and demand deposit account services.    </div>
//           </div>
//         </div>

//         {/* <Fragment className="flex justify-end  bg-gray-200">
//   <div className="w-[150px] h-[150px] rounded-full bg-[rgba(43,85,151,0.4)] shadow-[0_0_500px_80px_rgba(43,85,151,0.9)] flex items-center justify-center">
//   </div>
// </Fragment> */}

//       </div>
//     );
//   };

//   export default Footer;

import { FaArrowRight } from "react-icons/fa";
import Button from "../landingcomponents/Button.jsx";
import { BsGearFill } from "react-icons/bs";
import BlueShadow from "../../../../assets/svg/footerIllustration.svg";

const Footer = () => {
  const headings = [
    {
      title: "Essentials",
      content: [
        "Payments",
        "Budgeting and analytics",
        "Open banking",
        "Pockets",
        "Subscriptions",
      ],
    },
    {
      title: "Company",
      content: [
        "About us",
        "Diversity / Inclusion",
        "Sustainability",
        "Code of conduct",
        "Financial statements",
      ],
    },
    {
      title: "Lifestyle",
      content: [
        "International products",
        "Currency exchange",
        "Lounge and Smart delay",
      ],
    },
    {
      title: "Social",
      content: [
        "Send us an email",
        "Facebook",
        "Twitter",
        "Instagram",
        "TikTok",
      ],
    },
  ];

  return (
    <div className="relative bg-[#1E293B] 2xl:h-[550px] text-center sm:text-left">
      <div className="container w-full md:w-[65%] mx-auto">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-8 mt-20">
            <div className="text-[#3b82f6] text-xl font-semibold leading-[30px]">
              What are you waiting for?
            </div>
            <div className="text-[#f1f5f9] text-[44px] leading-[44px] font-bold">
              Get the only custom super card
            </div>
          </div>
          <div className="col-span-12 justify-center md:col-span-4 flex md:justify-end space-x-4 mt-12">
            <Button color="darkBlue" text="Get your card" icon={FaArrowRight} />
            <Button color="black" text="Get in touch" />
          </div>
        </div>
        <hr className="w-full h-px my-8 bg-gray-700 border-0 dark:bg-gray-700 mt-20" />

        <div className="mt-5 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {/* First Column with Logo */}
            <div className="flex justify-center sm:justify-start">
              <BsGearFill className="text-blue-600 text-3xl" />
            </div>
            {headings.map((item, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-sm font-bold leading-[22px] text-[#f1f5f9]">
                  {item.title}
                </h3>
                <ul className="list-inside text-[#94a3b8] hover:text-[#3b82f6] text-base font-normal leading-[28px]">
                  {item.content.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* <div className=" mr-52 absolute bottom-0 right-0 w-[150px] h-[150px] rounded-full bg-[rgba(43,85,151,0.4)] shadow-[0_0_500px_80px_#2B5395] flex items-center justify-center">
        </div> */}


<div className="absolute inset-0 flex items-end justify-end">
        <img
          src={BlueShadow}
          alt=""
          className=""
        />
      </div>
        

        <div className="text-[#64748b] text-xs font-normal mt-10">
          If you would like to find out more about which entity you receive
          services from please click here. If you have any other questions,
          please reach out to us via the in-app chat. Custom Bank is a bank
          established in the Republic of Ireland. Custom Bank is licensed by the
          European Central Bank and regulated by the Bank of Ireland. Custom
          Bank provides credit, payment, current account, and demand deposit
          account services.
        </div>
      </div>
    </div>
  );
};

export default Footer;
