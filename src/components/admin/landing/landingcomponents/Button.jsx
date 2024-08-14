import React from 'react';

const Button = ({ className, text, icon: Icon }) => {
  return (
    <button className={`${className}`}>
      {text}
      {Icon && <Icon className="text-sky-400 text-sm ml-2 group-hover:pl-1 w-4" />}
    </button>
  );
};

export default Button;
