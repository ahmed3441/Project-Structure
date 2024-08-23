import { FaArrowRight } from "react-icons/fa";
import Button from "../landingcomponents/Button.jsx";
import { BsGearFill } from "react-icons/bs";



const Footer = () => {

    const headings = [
        {
          title: "Essentials",
          content: [
            "Payments",
            "Budgetinf and analytics",
            "Open banking",
            "Pockets",
            "Subscriptions"
          ],
        },
        {
          title: "Company",
          content: [
            "About us",
            "Diversity / Inclusion",
            "Sustainability",
            "Code of conduct",
            "Financial statements"
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
          title: "Company",
          content: [
            "Send us an email",
            "Faceboook",
            "Twitter",
            "Instagram",
            "Tiktok",
          ],
        },
      ];

    return (
      <div>
        <div className="bg-[#1E293B] lg:h-[550px] ">
          <div className="container w-full md:w-[65%] mx-auto ">
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

            <Button
        color="darkBlue"
        text="Get your card"
        icon={FaArrowRight}
      />

            <Button
        color="black"
        text="Get in touch"
      />
            
            </div>
            </div>
            <hr className="w-full h-px my-8 bg-gray-700 border-0 dark:bg-gray-700 mt-20"/>



            <div className="mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {/* First Column with Logo */}
        <div className="">
        <BsGearFill className="text-blue-600 text-3xl" />
        </div>

        {headings.map((item, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-sm font-bold leading-[22px] text-[#f1f5f9]">{item.title}</h3>
            <ul className=" list-inside text-[#94a3b8] hover:text-[#3b82f6] text-base  font-normal leading-[28px]">
              {item.content.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="text-[#64748b] text-xs font-normal mt-10">
    If you would like to find out more about which entity you receive services from please click here If you have any other questions, please reach out to us via the in-app chat. Custom Bank is a bank established in the Republic of Ireland. Custom Bank is licensed by the European Central Bank and regulated by the Bank of Ireland. Cusom Bank provides credit, payment,  please reach out to us via the  in-app chat  in-app chat current account and demand deposit account services.    </div>



          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  