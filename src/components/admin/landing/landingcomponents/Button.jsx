// import React from 'react';

// const Button = ({ className, text, icon: Icon }) => {
//   return (
//     <button className={`${className}`}>
//       {text}
//       {Icon && <Icon className="text-sky-400 text-sm ml-2 group-hover:pl-1 w-4" />}
//     </button>
//   );
// };

// export default Button;



const Button = ({ type = 'button', className,  color = 'blue', text = 'Button', onClick, disabled = false, icon: Icon }) => {
  // Define base styles for the button
  const baseStyle = `text-white text-[15px] font-font-aspekta font-semibold p-2 rounded-full px-5 flex items-center group`;

  // Define styles for different colors
  const colorStyles = {
    blue: 'bg-blue-950 text-white',
    lightBlue: 'bg-[#488EF7] text-white hover:bg-blue-600',
    darkBlue: 'bg-[#3B82F6] text-white hover:bg-blue-600',
    darksBlue: 'bg-[#3B82F6] text-white hover:bg-blue-600 w-full flex justify-center mt-5',
        Darkblack: 'bg-[#334155] text-white hover:bg-transparent w-full flex justify-center mt-5',
    black: 'bg-[#334155] text-white hover:bg-transparent',
  };

  return (
    <button
      type={type}
      className={`${baseStyle} ${colorStyles[color]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {Icon && <Icon className="text-sky-400 text-sm ml-2 group-hover:pl-1 w-4" />}
    </button>
  );
};

export default Button;
