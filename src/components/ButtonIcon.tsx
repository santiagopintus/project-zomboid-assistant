import React from "react";

const ButtonIcon = ({ children, onClick, ...props }: any) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: "#3a606eff",
        color: "#ffffff",
        border: "none",
        padding: "6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
      }}
    >
      {children}
    </button>
  );
};

export default ButtonIcon;
