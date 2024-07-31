import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import communication from "../../../../assets/models/home/links/bank.glb";

export default function BankingAndFinance(props) {
  const { nodes, materials } = useGLTF(communication);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ventilation_1001.geometry}
        material={materials.PaletteMaterial001}
        position={[-2109.296, 251.412, 2387.027]}
        rotation={[Math.PI, -0.002, 0]}
        scale={[0.012, 0.016, 0.026]}
      />
    </group>
  );
}

useGLTF.preload(communication);
