import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Box3, Vector3 } from "three";
import model from "../../../../assets/models/aboutus/public.glb";

export default function PublicModel(props) {
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
    <group ref={modelRef} {...props} dispose={null} scale={0.012}>
      <group
        // position={[-4.764, 46.687, -13.335]}
        position={[0, -20, 0]}
        rotation={[Math.PI / 2, 0, 0.01]}
        scale={[0.955, 1.049, 0.238]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube7476.geometry}
          material={materials["Material.7926"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube7476_1.geometry}
          material={materials["Material.7927"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube7476_2.geometry}
          material={materials["Material.7925"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube7476_3.geometry}
          material={materials["Material.7907"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube7476_4.geometry}
          material={materials["Material.7906"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube7476_5.geometry}
          material={materials["Material.7908"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube7476_6.geometry}
          material={materials["Material.7913"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube7476_7.geometry}
          material={materials["Material.7920"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube7476_8.geometry}
          material={materials["Material.7919"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube7476_9.geometry}
          material={materials["Material.7924"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube7476_10.geometry}
          material={materials["Material.7923"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube7476_11.geometry}
          material={materials["Material.7915"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube7476_12.geometry}
          material={materials["Material.7917"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube7476_13.geometry}
          material={materials["Material.7916"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube7476_14.geometry}
          material={materials["Material.7918"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube7476_15.geometry}
          material={materials["Material.7921"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube7476_16.geometry}
          material={materials["Material.7929"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube7476_17.geometry}
          material={materials["Material.7928"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube7476_18.geometry}
          material={materials["Material.7930"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(model);
