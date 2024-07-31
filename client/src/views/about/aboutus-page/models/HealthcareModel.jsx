import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Box3, Vector3 } from "three";
import model from "../../../../assets/models/aboutus/hospital.glb";

export default function HealthcareModel(props) {
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
    <group ref={modelRef} {...props} dispose={null}>
      <group name="Scene" scale={0.007}>
        <group
          name="Cube262"
          rotation={[Math.PI / 2, 0, -1.567]}
          scale={[1.614, 1.448, 1.376]}
        >
          <mesh
            name="Cube7479"
            castShadow
            receiveShadow
            geometry={nodes.Cube7479.geometry}
            material={materials["Material.8339"]}
          />
          <mesh
            name="Cube7479_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube7479_1.geometry}
            material={materials["Material.8344"]}
          />
          <mesh
            name="Cube7479_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube7479_2.geometry}
            material={materials["Material.8337"]}
          />
          <mesh
            name="Cube7479_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube7479_3.geometry}
            material={materials["Material.8341"]}
          />
          <mesh
            name="Cube7479_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube7479_4.geometry}
            material={materials["Material.8333"]}
          />
          <mesh
            name="Cube7479_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube7479_5.geometry}
            material={materials["Material.8002"]}
          />
          <mesh
            name="Cube7479_6"
            castShadow
            receiveShadow
            geometry={nodes.Cube7479_6.geometry}
            material={materials["Material.8011"]}
          />
          <mesh
            name="Cube7479_7"
            castShadow
            receiveShadow
            geometry={nodes.Cube7479_7.geometry}
            material={materials["Material.8008"]}
          />
          <mesh
            name="Cube7479_8"
            castShadow
            receiveShadow
            geometry={nodes.Cube7479_8.geometry}
            material={materials["Material.5681"]}
          />
          <mesh
            name="Cube7479_9"
            castShadow
            receiveShadow
            geometry={nodes.Cube7479_9.geometry}
            material={materials["tree.015"]}
          />
          <mesh
            name="Cube7479_10"
            castShadow
            receiveShadow
            geometry={nodes.Cube7479_10.geometry}
            material={materials["Material.8343"]}
          />
          <mesh
            name="Cube7479_11"
            castShadow
            receiveShadow
            geometry={nodes.Cube7479_11.geometry}
            material={materials["Material.8335"]}
          />
          <mesh
            name="Cube7479_12"
            castShadow
            receiveShadow
            geometry={nodes.Cube7479_12.geometry}
            material={materials["Material.8338"]}
          />
          <mesh
            name="Cube7479_13"
            castShadow
            receiveShadow
            geometry={nodes.Cube7479_13.geometry}
            material={materials["Material.8521"]}
          />
          <mesh
            name="Cube7479_14"
            castShadow
            receiveShadow
            geometry={nodes.Cube7479_14.geometry}
            material={materials["Material.8340"]}
          />
          <mesh
            name="Cube7479_15"
            castShadow
            receiveShadow
            geometry={nodes.Cube7479_15.geometry}
            material={materials["Material.8342"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(model);
