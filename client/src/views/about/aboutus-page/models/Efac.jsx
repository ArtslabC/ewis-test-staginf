import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from "../../../../assets/models/efac.glb";
import { Box3, Vector3 } from "three";

export default function Efac(props) {
  const { nodes, materials } = useGLTF(model);
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
    <group {...props} dispose={null}>
      <group position={[-0.302, 2.949, 0.103]} scale={[7.22, 2.108, 21.484]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials["Base White"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_1.geometry}
          material={materials.blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_2.geometry}
          material={materials["Glass EWis"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_3.geometry}
          material={materials.dOR}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_4.geometry}
          material={materials["DOR ROL"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_5.geometry}
          material={materials.Material}
        />
      </group>
    </group>
  );
}

useGLTF.preload(model);

//ssd
