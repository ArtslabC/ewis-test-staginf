import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import peripheral from "../../../../assets/models/home/links/Peripheral.glb";

export default function Peripheral(props) {
  const { nodes, materials } = useGLTF(peripheral);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.big_printer_shop.geometry}
        material={materials.PaletteMaterial001}
        position={[10.54, -192.794, 4796.603]}
        rotation={[Math.PI, -1.553, Math.PI]}
        scale={[56.899, 17.111, 56.899]}
      />
    </group>
  );
}

useGLTF.preload(peripheral);
