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
  const baseStyle = `text-white text-[15px] bg-blue-950 font-font-aspekta font-semibold p-2 rounded-full px-5 flex items-center group`;

  // Define styles for different colors
  const colorStyles = {
    blue: 'bg-blue-950 text-white',
    lightBlue: 'bg-[#488EF7] text-white hover:bg-blue-600',
    darkBlue: 'bg-[#3B82F6] text-white hover:bg-blue-600',
    darksBlue: 'bg-[#3B82F6] text-white hover:bg-blue-600 w-full flex justify-center mt-5',
        Darkblack: 'bg-[#334155] text-white hover:bg-transparent w-full flex justify-center mt-5',
    // red: 'bg-red-500 text-white hover:bg-red-600',
    // green: 'bg-green-500 text-white hover:bg-green-600',
    // yellow: 'bg-yellow-500 text-white hover:bg-yellow-600',
    // gray: 'bg-gray-500 text-white hover:bg-gray-600',
    black: 'bg-[#334155] text-white hover:bg-transparent',
    // white: 'bg-white text-black border border-gray-300 hover:bg-gray-100',
    // transparent: 'bg-transparent text-blue-500 hover:bg-blue-100',
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
