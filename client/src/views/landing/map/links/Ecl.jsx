import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import ecl from "../../../../assets/models/home/links/ecl.glb";

export default function Ecl(props) {
  const { nodes, materials } = useGLTF(ecl);
  return (
    <group {...props} dispose={null}>
      <group
        position={[332.935, -204.704, 3013.006]}
        rotation={[Math.PI / 2, 0, 0.014]}
        scale={[0.121, 0.109, 0.131]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane121.geometry}
          material={materials["Material.184"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane121_1.geometry}
          material={materials.PaletteMaterial001}
        />
      </group>
    </group>
  );
}

useGLTF.preload(ecl);
