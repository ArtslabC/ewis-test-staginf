import React, { useRef } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";
import icon from "../../../../../assets/models/home/titles/toppanforms.glb";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";

export function ToppanFormsText(props) {
  const { nodes, materials } = useGLTF(icon);

  const textRef = useRef();
  const backgroundRef = useRef();
  // && backgroundRef.current
  useFrame(({ camera }) => {
    if (textRef.current) {
      textRef.current.quaternion.copy(camera.quaternion);
      // backgroundRef.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <group ref={textRef} position={props.position}>
      <group dispose={null} position={[0, 0, 0]}>
        <group scale={2} position={[0, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ellipse.geometry}
            material={nodes.Ellipse.material}
            position={[187.493, 38.14, 1]}
          >
            <meshStandardMaterial
              attach="material"
              color={props.hovered ? "#cc0e0e" : "#ffffff"}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Background.geometry}
            material={nodes.Background.material}
            position={[-1.132, -23.456, -2]}
          >
            <meshStandardMaterial
              attach="material"
              color={props.hovered ? "#ffffff" : "#cc0e0e"}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Title.geometry}
            material={nodes.Title.material}
            position={[-2.299, -26.853, -1]}
          >
            <meshStandardMaterial
              attach="material"
              color={props.hovered ? "#cc0e0e" : "#ffffff"}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["!!!!!!!!!!"].geometry}
            material={nodes["!!!!!!!!!!"].material}
            position={[189.124, 36.308, 2]}
          >
            <meshStandardMaterial
              attach="material"
              color={props.hovered ? "#ffffff" : "#cc0e0e"}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(icon);
