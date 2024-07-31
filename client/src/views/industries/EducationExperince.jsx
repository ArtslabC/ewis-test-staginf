import React from "react";
import {
  Text,
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";

import compu from "../../assets/models/classRoomToday.glb";
function EducationExperince() {
  const computer = useGLTF(compu);
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
        object={computer.scene}
        position-y={-1.5}
        scale={0.6}
        // rotation-x={ 0.13 }
      ></primitive>

      {/* </PresentationControls> */}

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
// useGLTF.preload(compu)
export default EducationExperince;
