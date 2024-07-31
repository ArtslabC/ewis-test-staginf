import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Box3, Vector3 } from "three";
import model from "../../../../assets/models/aboutus/bank.glb";

export default function BankingAndFinanceModel(props) {
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      const box = new Box3().setFromObject(modelRef.current);
      const center = new Vector3();
      box.getCenter(center);
      modelRef.current.position.sub(center); // Center the model
    }
  }, []);

  const { nodes, materials } = useGLTF(model);
  // <group scale={[45.566, 36.41, 45.566]}>
  return (
    <group ref={modelRef} {...props} dispose={null} scale={0.012}>
      <group
        // position={[-121.196, 337.572, 11.105]}
        position={[0, 0, 0]}
        rotation={[Math.PI, -0.002, 0]}
        scale={[0.008, 0.011, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Untitled5714.geometry}
          material={materials["Material.5855"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Untitled5714_1.geometry}
          material={materials["Material.5856"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Untitled5714_2.geometry}
          material={materials["Material.7662"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Untitled5714_3.geometry}
          material={materials["Material.5854"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Untitled5714_4.geometry}
          material={materials["Material.5853"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Untitled5714_5.geometry}
          material={materials["Material.5852"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Untitled5714_6.geometry}
          material={materials["Material.5851"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Untitled5714_7.geometry}
          material={materials["Material.7690"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Untitled5714_8.geometry}
          material={materials["Material.7689"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Untitled5714_9.geometry}
          material={materials["Material.7688"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Untitled5714_10.geometry}
          material={materials["tree.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Untitled5714_11.geometry}
          material={materials["Material.7687"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Untitled5714_12.geometry}
          material={materials["texture uv mapes .004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Untitled5714_13.geometry}
          material={materials["Material.8507"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Untitled5714_14.geometry}
          material={materials["Material.044"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(model);
