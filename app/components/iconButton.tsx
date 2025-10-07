import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const iconButton = ({ children, onClick }: Props) => {
  return (
    <button className="btn btn-link text-white" onClick={onClick}>
      {children}
    </button>
  );
};

export default iconButton;
