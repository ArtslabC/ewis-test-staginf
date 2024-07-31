import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Box3, Vector3 } from "three";
import model from "../../../../assets/models/aboutus/manufac.glb";

export default function ManufacturingModel(props) {
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
    <group ref={modelRef}>
      <group {...props} dispose={null} scale={0.006}>
        <group
          rotation={[Math.PI / 2, 0, -1.565]}
          scale={[0.095, 0.073, 0.082]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube374_1.geometry}
            material={materials["Material.8357"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube374_2.geometry}
            material={materials["Material.8355"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube374_3.geometry}
            material={materials["Material.8354"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube374_4.geometry}
            material={materials["Material.8353"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube374_5.geometry}
            material={materials["Material.8351"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube374_6.geometry}
            material={materials["Material.8350"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube374_7.geometry}
            material={materials["Material.8349"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube374_8.geometry}
            material={materials["Material.2196"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube374_9.geometry}
            material={materials["Material.2195"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube374_10.geometry}
            material={materials["Material.2197"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube374_11.geometry}
            material={materials["Material.2198"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube374_12.geometry}
            material={materials["Material.2200"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube374_13.geometry}
            material={materials["Material.2202"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(model);
