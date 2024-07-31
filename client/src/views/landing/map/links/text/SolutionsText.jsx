import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import icon from "../../../../../assets/models/home/titles/ewissolutions.glb";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";

export function SolutionsText(props) {
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
    <motion.group ref={textRef} position={props.position}>
      <group dispose={null} position={[0, 0, 0]}>
        <group scale={2} position={[0, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ellipse.geometry}
            material={nodes.Ellipse.material}
            position={[275.866, 38.14, 9]}
          >
            <meshStandardMaterial attach="material" color={"#cc0e0e"} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Background.geometry}
            material={nodes.Background.material}
            position={[-3.048, -23.456, -18]}
          >
            <meshStandardMaterial
              attach="material"
              color={props.hovered ? "#ffffff" : "#00603a"}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Title.geometry}
            material={nodes.Title.material}
            position={[-2.299, -26.853, -9]}
          >
            <meshStandardMaterial
              attach="material"
              color={props.hovered ? "#00603a" : "#ffffff"}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["!!!!!!!!!!"].geometry}
            material={nodes["!!!!!!!!!!"].material}
            position={[277.497, 36.308, 18]}
          >
            <meshStandardMaterial attach="material" color={"#ffffff"} />
          </mesh>
        </group>
      </group>
    </motion.group>
  );
}

useGLTF.preload(icon);

// <meshStandardMaterial
// attach="material"
// color={props.hovered ? "#00603a" : "#ffffff"}
// />
