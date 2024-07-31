import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from "../../../../assets/models/home/links/manufacture.glb";

export default function Manufacture(props) {
  const { nodes, materials } = useGLTF(model);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube452.geometry}
        material={materials.PaletteMaterial001}
        position={[2881.344, -198.536, 3019.783]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.095, 0.073, 0.082]}
      />
    </group>
  );
}

useGLTF.preload(model);
