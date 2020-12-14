import React from "react";

export interface CubeSideProps {
  position: string;
  children?: React.ReactNode;
}

export const CubeSide: React.FC<CubeSideProps> = ({ position, children }) => {
  return <div className={`side ${position}`}>{children}</div>;
};
