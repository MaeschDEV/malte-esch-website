import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  color?: string;
}

const iconButton = ({ children, onClick, color = "text-white" }: Props) => {
  return (
    <button className={`btn btn-link ${color}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default iconButton;
