import {
  ContactShadows,
  Environment,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import React from "react";
import fac from "../../../assets/models/char.glb";

function ExperinceColomboLtd() {
  const facE = useGLTF(fac);
  return (
    <>
      <color args={["transparent"]} attach="background" />

      <Environment preset="city" />
      <OrbitControls enableZoom={false} enableRotate={false} />

      <rectAreaLight
        width={2}
        height={2}
        intensity={30}
        color={"#FFFFFF"}
        position={[0, 2, 0]}
      />

      <primitive
        object={facE.scene}
        position={[3, -1, 0]}
        rotation-y={-0.5}
        rotation-x={0.1}
        scale={1.5}
        // rotation-x={ 0.13 }
      ></primitive>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
// useGLTF.preload(fac)
export default ExperinceColomboLtd;
