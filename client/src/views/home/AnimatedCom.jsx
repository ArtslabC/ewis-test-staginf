import React from "react";
import { BoxTruckBoxOnly } from "./comModelsAnimation/BoxTruckBoxOnly";
import { TruckTwoOnly } from "./comModelsAnimation/TruckTwoOnly";
import { GasTruckOnly } from "./comModelsAnimation/GasTruckOnly";
import { TruckOnly } from "./comModelsAnimation/TruckOnly";
import { DroneBoxOnly } from "./comModelsAnimation/DroneBoxOnly";
import { DroneOnly } from "./comModelsAnimation/DroneOnly";
import { BoxTruckOnly } from "./comModelsAnimation/BoxTruckOnly";
import { CarOnly } from "./comModelsAnimation/CarOnly";
import { TaxiOnly } from "./comModelsAnimation/TaxiOnly";

// import { GraoundOne } from "./comModelsAnimation/GraoundOne";
// import { BurpBoy } from "./comModelsAnimation/BurpBoy";
// import { GrassBoy } from "./comModelsAnimation/GrassBoy";
// import { GroundF } from "./comModelsAnimation/GroundF";
// import { StoreTwo } from "./comModelsAnimation/StoreTwo";
// import { StoreThree } from "./comModelsAnimation/StoreThree";
// import { Construction } from "./comModelsAnimation/Construction";
// import { EatOne } from "./comModelsAnimation/EatOne";
// import { EatTwo } from "./comModelsAnimation/EatTwo";
// import { GroundOne } from "./comModelsAnimation/GroundOne";
// import { GroundTwo } from "./comModelsAnimation/GroundTwo";
// import { GroundThree } from "./comModelsAnimation/GroundThree";
// import { SchoolOne } from './comModelsAnimation/SchoolOne'
// import { SchoolTwo } from './comModelsAnimation/SchoolTwo'
// import { SchoolFour } from './comModelsAnimation/SchoolFour'
// import { StadiumOne } from './comModelsAnimation/StadiumOne'
// import { StadiumTwo } from './comModelsAnimation/StadiumTwo'
// import { StoreFour } from './comModelsAnimation/StoreFour'
// import { SchoolThree } from './comModelsAnimation/SchoolThree'

function AnimatedCom() {
  return (
    <>
      {/* Vehicles */}
      <BoxTruckBoxOnly scale={0.025} position={[0, -12.5, 0]} />
      <TruckTwoOnly scale={0.025} position={[0, -12.5, 0]} />
      <GasTruckOnly scale={0.025} position={[0, -12.5, 0]} />
      <TruckOnly scale={0.025} position={[0, -12.5, 0]} />
      <DroneBoxOnly scale={0.025} position={[0, -12.5, 0]} />
      <DroneOnly scale={0.025} position={[0, -12.5, 0]} />
      <BoxTruckOnly scale={0.025} position={[0, -12.5, 0]} />
      <CarOnly scale={0.025} position={[0, -12.5, 0]} />
      <TaxiOnly scale={0.025} position={[0, -12.5, 0]} />

      {/* Peoples */}

      {/* <GraoundOne /> */}
      {/* <BurpBoy /> */}
      {/* <GrassBoy /> */}
      {/* <GroundF /> */}
      {/* <StoreTwo />
            <StoreThree /> */}
      {/* <Construction /> */}
      {/* <EatOne />
            <EatTwo /> */}
      {/* <GroundOne /> */}
      {/* <GroundTwo /> */}
      {/* <GroundThree /> */}
      {/* <SchoolOne /> */}
      {/* <SchoolTwo />
            <SchoolFour /> */}
      {/* <StadiumOne /> */}
      {/* <StadiumTwo /> */}
      {/* <StoreFour /> */}
      {/* <SchoolThree /> */}
    </>
  );
}

export default AnimatedCom;
