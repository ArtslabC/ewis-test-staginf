import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import road from "../../../../assets/models/cityModels/lowpollyroad.glb";

export default function Road(props) {
  const { nodes, materials } = useGLTF(road);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road002.geometry}
        material={materials.PaletteMaterial001}
        position={[228.92, -4.596, 62.385]}
        scale={[1535.026, 402.848, 1535.026]}
        frustumCulled={false}
      />
    </group>
  );
}

useGLTF.preload(road);
