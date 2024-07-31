import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from "../../../../assets/models/home/links/public.glb";

export default function Public(props) {
  const { nodes, materials } = useGLTF(model);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube057.geometry}
        material={materials.PaletteMaterial001}
        position={[-1296.896, -130.706, -123.544]}
        rotation={[Math.PI / 2, 0, 0.01]}
        scale={[0.955, 1.049, 0.238]}
      />
    </group>
  );
}

useGLTF.preload(model);
