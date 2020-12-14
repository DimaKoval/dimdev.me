import React from "react";
import { CubeSide } from "./cubeSide";

export const Cube = () => {
  return (
    <div className="cube-container">
      <CubeSide position="front" />
      <CubeSide position="right" />
      <CubeSide position="left" />
    </div>
  );
};
