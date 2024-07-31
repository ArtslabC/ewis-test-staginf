// Experince.js
// import { Plane } from '@react-three/drei'
import React, { useState } from "react";
import Ocean from "./Ocean";
// import Clouds from './Clouds'
import Mountain from "./Mountain";
import { PlaneFlight } from "./PlaneFlight";
import RoadModel from "./RoadModel";
import EwisCity from "./EwisCity";
import VIllage from "./VIllage";
// import IslandModel from './IslandModel'
import ThreeCom from "./ThreeCom";
import AnimatedCom from "./AnimatedCom";

function Experince() {
  return (
    <>
      {/* <Ocean /> */}
      {/* <PlaneFlight /> */}
      <Mountain />
      {/* <Clouds /> */}
      <RoadModel />
      <EwisCity />
      <VIllage />
      {/* <IslandModel /> */}
      <ThreeCom />
      <AnimatedCom />
    </>
  );
}

export default Experince;
