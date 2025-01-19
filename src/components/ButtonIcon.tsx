import React from "react";

const ButtonIcon = ({ children, onClick, ...props }: any) => {
  return (
    <button className="button-icon" onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default ButtonIcon;
