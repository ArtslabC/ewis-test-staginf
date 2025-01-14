import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from "../../../../assets/models/home/links/school.glb";

export default function School(props) {
  const { nodes, materials } = useGLTF(model);
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Pillar2957"
          position={[-2971.628, -177.187, -467.046]}
          rotation={[0, -1.56, Math.PI]}
          scale={[0.008, 0.007, 0.007]}
        >
          <mesh
            name="Untitled10105"
            castShadow
            receiveShadow
            geometry={nodes.Untitled10105.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            name="Untitled10105_1"
            castShadow
            receiveShadow
            geometry={nodes.Untitled10105_1.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            name="Untitled10105_2"
            castShadow
            receiveShadow
            geometry={nodes.Untitled10105_2.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            name="Untitled10105_3"
            castShadow
            receiveShadow
            geometry={nodes.Untitled10105_3.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            name="Untitled10105_4"
            castShadow
            receiveShadow
            geometry={nodes.Untitled10105_4.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            name="Untitled10105_5"
            castShadow
            receiveShadow
            geometry={nodes.Untitled10105_5.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            name="Untitled10105_6"
            castShadow
            receiveShadow
            geometry={nodes.Untitled10105_6.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            name="Untitled10105_7"
            castShadow
            receiveShadow
            geometry={nodes.Untitled10105_7.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            name="Untitled10105_8"
            castShadow
            receiveShadow
            geometry={nodes.Untitled10105_8.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            name="Untitled10105_9"
            castShadow
            receiveShadow
            geometry={nodes.Untitled10105_9.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            name="Untitled10105_10"
            castShadow
            receiveShadow
            geometry={nodes.Untitled10105_10.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            name="Untitled10105_11"
            castShadow
            receiveShadow
            geometry={nodes.Untitled10105_11.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            name="Untitled10105_12"
            castShadow
            receiveShadow
            geometry={nodes.Untitled10105_12.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            name="Untitled10105_13"
            castShadow
            receiveShadow
            geometry={nodes.Untitled10105_13.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            name="Untitled10105_14"
            castShadow
            receiveShadow
            geometry={nodes.Untitled10105_14.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            name="Untitled10105_15"
            castShadow
            receiveShadow
            geometry={nodes.Untitled10105_15.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            name="Untitled10105_16"
            castShadow
            receiveShadow
            geometry={nodes.Untitled10105_16.geometry}
            material={materials.PaletteMaterial001}
          />
          <mesh
            name="Untitled10105_17"
            castShadow
            receiveShadow
            geometry={nodes.Untitled10105_17.geometry}
            material={materials.PaletteMaterial001}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(model);
