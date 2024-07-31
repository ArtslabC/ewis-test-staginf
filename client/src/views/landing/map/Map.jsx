import React, { useEffect, useRef, useState } from "react";
import { OrbitControls, useCamera } from "@react-three/drei";
import { BaseMap } from "./new-models/BaseMap";
import { angleToRadians } from "./../lib/threeHelper";
import HoverModel from "./helper/HoverModel";
import CareerTrainingSolutions from "./links/CareerTrainingSolutions";
import Peripheral from "./links/Peripheral";
import Ecl from "./links/Ecl";
import Communication from "./links/Communication";
// import {BankingandFinance} from "./links/BankingandFinance";
import Solutions from "./links/Solutions";
import School from "./links/School";
import Retail from "./links/Retail";
import Manufacture from "./links/Manufacture";
import Healthcare from "./links/Healthcare";
import Global from "./links/Global";
import ToppanForms from "./links/ToppanForms";
import BankingAndFinance from "./links/BankingFinance";
import Public from "./links/Public";
import BuyEwis from "./links/BuyEwis";

import {
  BankingAndFinanceText,
  BuyEwisText,
  ColomboLimitedText,
  EducationText,
  EwisCareerTrainingSolutionsText,
  EwisPeripheralsText,
  GlobalServicesText,
  HealthcareText,
  ManufactureText,
  PublicText,
  RetailText,
  SolutionsText,
  TelecommunicationText,
  ToppanFormsText,
} from "./links/text";

const Map = (props) => {
  const controlsRef = useRef();
  const mapRef = useRef();

  const [modelOpen, setModelOpen] = useState(true);
  const [OpenedModelId, setOpenedModelId] = useState(null);

  const handleOrbitChange = (event) => {};

  return (
    <>
      <group {...props} ref={mapRef} position={[0, 0, 0]}>
        <BaseMap />
      </group>
      <OrbitControls
        ref={controlsRef}
        autoRotate={true}
        rotateSpeed={0.1}
        autoRotateSpeed={0.5}
        enableDamping={true}
        dampingFactor={0.1}
        minDistance={3000}
        enableZoom={true}
        maxDistance={8000}
        minZoom={1000}
        enablePan={false}
        // minAzimuthAngle={-Math.PI}
        // maxAzimuthAngle={Math.PI}
        minPolarAngle={angleToRadians(65)} // Set both min and max to the same value
        maxPolarAngle={angleToRadians(50)}
        onChange={handleOrbitChange}
      />

      {/* done  */}
      <HoverModel
        model={<BuyEwis />}
        textModel={<BuyEwisText position={[2259.354, 330.228, 681.634]} />}
        title="buyewis"
        setActiveCard={props.setActiveCard}
      />

      {/* done  */}
      <HoverModel
        model={<Manufacture />}
        textModel={<ManufactureText position={[2181.344, 398.536, 4019.783]} />}
        title="manufacture"
        setActiveCard={props.setActiveCard}
      />

      {/* done  */}
      <HoverModel
        model={<Peripheral />}
        textModel={<EwisPeripheralsText position={[-100, 392.794, 4796.603]} />}
        title="peripheral"
        setActiveCard={props.setActiveCard}
      />

      {/* done  */}
      <HoverModel
        model={<CareerTrainingSolutions />}
        textModel={
          <EwisCareerTrainingSolutionsText
            // position={[50.772, 443.834, 3637.71]}
            // position={[329.276, 743.834, 3632.688]}
            position={[50.772, 743.834, 3637.71]}
          />
        }
        title="careertrainingsolutions"
        setActiveCard={props.setActiveCard}
      />

      {/* done  */}
      <HoverModel
        model={<Solutions />}
        textModel={<SolutionsText position={[400, 1000, 400]} />}
        title="solutions"
        setActiveCard={props.setActiveCard}
      />

      {/* done  */}
      <HoverModel
        model={<Global />}
        textModel={<GlobalServicesText position={[2237.236, 1050, 2310.319]} />}
        title="globalservices"
        setActiveCard={props.setActiveCard}
      />

      {/* /////////////////////////// */}

      {/* done  */}
      <HoverModel
        model={<School />}
        textModel={<EducationText position={[-3071.628, 277.187, -367.046]} />}
        title="education"
        setActiveCard={props.setActiveCard}
      />

      {/* // Done  */}
      <HoverModel
        model={<Healthcare />}
        textModel={<HealthcareText position={[-2009.141, 400.975, 4510.477]} />}
        title="healthcare"
        setActiveCard={props.setActiveCard}
      />

      {/* done  */}
      <HoverModel
        model={<Ecl />}
        textModel={
          <ColomboLimitedText position={[-150.935, 304.704, 1500.006]} />
        }
        title="ecl"
        setActiveCard={props.setActiveCard}
      />
      {/* done  */}
      <HoverModel
        model={<Communication />}
        textModel={
          <TelecommunicationText position={[-2178.917, 500.136, 917.615]} />
        }
        title="communication"
        setActiveCard={props.setActiveCard}
      />
      {/* done  */}
      <HoverModel
        model={<BankingAndFinance />}
        textModel={
          <BankingAndFinanceText position={[-1909.296, 451.412, 2387.027]} />
        }
        title="bankingandfinance"
        setActiveCard={props.setActiveCard}
      />

      {/* done  */}
      <HoverModel
        model={<Retail />}
        textModel={<RetailText position={[721.351, 350, -790.493]} />}
        title="retail"
        setActiveCard={props.setActiveCard}
      />

      {/* done  */}
      <HoverModel
        model={<Public />}
        textModel={<PublicText position={[-1296.896, 230.706, -123.544]} />}
        title="public"
        setActiveCard={props.setActiveCard}
      />

      {/* done  */}
      <HoverModel
        model={<ToppanForms />}
        textModel={<ToppanFormsText position={[2484.516, 305.879, -800]} />}
        title="toppanforms"
        setActiveCard={props.setActiveCard}
      />
    </>
  );
};
// min - 9000;
// max - 1300;
export default Map;

// const [minDistance, setMinDistance] = useState(7000);

// useFrame(({ camera }) => {

// cameraRef.current.rotation.y += 0.001;

// let rotationY = (controlsRef.current.rotation.y += 0.001);
// Convert rotationY to degrees
// let rotationY = 1;

// let rotationY = camera.rotation.y;
// let rotationInDegrees = rotationY * (90 / Math.PI);
// let adjustedRotation = rotationInDegrees % 360;
// console.log(adjustedRotation);

// const rotationYDegrees = THREE.MathUtils.radToDeg(rotationY) % 360;
// console.log(rotationInDegrees);
// Check the rotation and adjust minDistance
// if (
//   rotationYDegrees >= angleToRadians(45) &&
//   rotationYDegrees <= angleToRadians(90)
// ) {
//   const progress =
//     (rotationYDegrees - angleToRadians(45)) / angleToRadians(45);
//   setMinDistance(13000 - 4000 * progress);
// } else if (
//   rotationYDegrees > angleToRadians(90) &&
//   rotationYDegrees <= angleToRadians(135)
// ) {
//   const progress =
//     (rotationYDegrees - angleToRadians(90)) / angleToRadians(45);
//   setMinDistance(9000 + 4000 * progress);
// }
// });
