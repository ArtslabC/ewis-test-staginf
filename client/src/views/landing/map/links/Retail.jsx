import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from "../../../../assets/models/home/links/retail.glb";

export default function Retail(props) {
  const { nodes, materials } = useGLTF(model);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube056.geometry}
        material={materials.PaletteMaterial001}
        position={[1021.351, -179.441, -690.493]}
        rotation={[Math.PI / 2, 0, -0.003]}
        scale={[0.283, 0.113, 0.109]}
      />
    </group>
  );
}

useGLTF.preload(model);
