import React from "react";

const ButtonIcon = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]:
    | React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >
    | React.ReactNode
    | (() => void);
}) => {
  return (
    <button className="button-icon" {...props}>
      {children}
    </button>
  );
};

export default ButtonIcon;
