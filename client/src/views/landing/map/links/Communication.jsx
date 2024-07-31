import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import communication from "../../../../assets/models/home/links/communication.glb";

export default function Communication(props) {
  const { nodes, materials } = useGLTF(communication);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.COmunitation.geometry}
        material={materials.PaletteMaterial001}
        position={[-2178.917, -160.136, 917.615]}
        scale={[72.01, 29.735, 72.165]}
      />
    </group>
  );
}

useGLTF.preload(communication);
