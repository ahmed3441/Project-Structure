const faqs = [
    {
      question: "How can I add money to my account?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
    },
    {
      question: "How is my document data stored/secured?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
    },
    {
      question: "I do not want to pay now, how can I proceed?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
    },
    {
      question: "How do I get started with card payments?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
    },
    {
      question: "Can I get a standard card for free?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
    },
    {
      question: "I don't have the required documents, how can I proceed?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
    },
  ];

const FAQS = () => {
    
  return (
    <div>
      <div className="">
        <div className="mt-10 h-[550px] p-6 container w-[65%] mx-auto"> 
            <div className="text-[44px] leading-[44px] text-[#1e293b] font-bold">
                FAQs
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
      {faqs.map((faq, index) => (
        <div key={index} className="">
          <span className="font-bold text-xl leading-[30px] text-bold mb-2">{faq.question}</span>
          <p className="text-[#64748b] text-base leading-6 font-[350px]">{faq.answer}</p>
        </div>
      ))}
    </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
