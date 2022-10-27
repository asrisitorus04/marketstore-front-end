import React from "react";

const Input = (props) => {
  return (
    <input
      className="w-full h-10 py-2 px-3 border-2 border-[#2D2D2D99] rounded-md"
      onChange={props.onChange}
      id={props.id}
      placeholder={props.placeholder}
      type={props.type}
    />
  );
};

export default Input;
