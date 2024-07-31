import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from "../../../../assets/models/home/links/toppanforms.glb";

export default function ToppanForms(props) {
  const { nodes, materials } = useGLTF(model);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane135.geometry}
        material={materials.PaletteMaterial001}
        position={[2184.516, -205.879, -1596.853]}
        rotation={[Math.PI / 2, 0, 1.575]}
        scale={[0.178, 0.256, 0.139]}
      />
    </group>
  );
}

useGLTF.preload(model);
