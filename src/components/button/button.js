import React from "react";
const Button = ({ value1, onClick1, className1 }) => {
  return (
    <div className={className1} onClick={onClick1} value={value1}>
      {value1}
    </div>
  );
};
export default Button;
