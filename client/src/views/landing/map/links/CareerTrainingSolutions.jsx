import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import careertrainingsolution from "../../../../assets/models/home/links/CareerTrainingSolutions.glb";

export default function CareerTrainingSolutions(props) {
  const { nodes, materials } = useGLTF(careertrainingsolution);
  const [hovered, setHovered] = useState(false);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.careere_training.geometry}
        material={materials.PaletteMaterial001}
        rotation={[1.563, 0.024, -1.513]}
        // position={[329.276, 443.834, 3632.688]}
        position={[50.772, 443.834, 3637.71]}
        scale={33.39}
      />
    </group>
  );
}

useGLTF.preload(careertrainingsolution);
