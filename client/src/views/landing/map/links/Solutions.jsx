import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from "../../../../assets/models/home/links/solutions.glb";

export default function Solutions(props) {
  const { nodes, materials } = useGLTF(model);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane130.geometry}
        material={materials.PaletteMaterial001}
        position={[135.621, -205.879, -1097.857]}
        rotation={[Math.PI / 2, 0, 1.59]}
        scale={[0.328, 0.282, 0.153]}
      />
    </group>
  );
}

useGLTF.preload(model);
