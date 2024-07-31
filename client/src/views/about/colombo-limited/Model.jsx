import { useGLTF } from "@react-three/drei";
import React from "react";
import fac from "../../../assets/models/efac.glb";

const Model = (props) => {
  const { scene } = useGLTF(fac);

  return (
    <primitive
      object={scene}
      //   rotation={[45, 20, 60, Math.PI / 2]}
      //   scale={0.01}
      {...props}
    />
  );
};

export default Model;
