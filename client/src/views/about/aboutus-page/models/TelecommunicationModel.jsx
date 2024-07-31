import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Box3, Vector3 } from "three";
import model from "../../../../assets/models/aboutus/Communication.glb";

export default function TeleCommunicationModel(props) {
  const { nodes, materials, scene } = useGLTF(model);
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      const box = new Box3().setFromObject(modelRef.current);
      const center = new Vector3();
      box.getCenter(center);
      modelRef.current.position.sub(center); // Center the model
    }
  }, []);
  return (
    <group
      ref={modelRef}
      {...props}
      dispose={null}
      scale={0.0119}
      position={[0, -1, 0]}
    >
      <group scale={[55.332, 22.848, 55.451]} position={[0, -2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube041.geometry}
          material={materials["Material.152"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube041_1.geometry}
          material={materials["Material.153"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(model);
