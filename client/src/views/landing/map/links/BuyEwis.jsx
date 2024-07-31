import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import communication from "../../../../assets/models/home/links/buyewisstore.glb";

export default function BuyEwis(props) {
  const { nodes, materials } = useGLTF(communication);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Board_2_2088.geometry}
        material={materials.PaletteMaterial001}
        position={[2459.354, -170.228, 651.634]}
        rotation={[0, -0.02, Math.PI]}
        scale={[0.011, 0.01, 0.011]}
      />
    </group>
  );
}

useGLTF.preload(communication);
