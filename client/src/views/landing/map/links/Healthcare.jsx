import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from "../../../../assets/models/home/links/healthcare.glb";

export default function Healthcare(props) {
  const { nodes, materials } = useGLTF(model);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube262.geometry}
        material={materials.PaletteMaterial001}
        position={[-1909.141, 18.975, 4710.477]}
        rotation={[Math.PI / 2, 0, 3.132]}
        scale={[1.614, 1.448, 1.376]}
      />
    </group>
  );
}

useGLTF.preload(model);
