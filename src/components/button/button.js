import React from "react";
const Button = ({ value, onClick, className1 }) => {
  return (
    <div className={className1} onClick={onClick}>
      {value}
    </div>
  );
};
export default Button;
