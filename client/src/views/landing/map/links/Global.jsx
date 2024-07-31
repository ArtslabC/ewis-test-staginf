import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from "../../../../assets/models/home/links/global.glb";

export default function Global(props) {
  const { nodes, materials } = useGLTF(model);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.new_tower005.geometry}
        material={materials.PaletteMaterial001}
        position={[2237.236, -83.959, 2310.319]}
        rotation={[3.129, 0, 0]}
        scale={[-154.44, -87.056, -154.466]}
      />
    </group>
  );
}

useGLTF.preload(model);
