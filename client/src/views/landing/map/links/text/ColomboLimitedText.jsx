import React, { useRef } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";
import colombolimitedtext from "../../../../../assets/models/home/titles/colombolimitedtext.glb";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";

export function ColomboLimitedText(props) {
  const { nodes, materials } = useGLTF(colombolimitedtext);

  const textRef = useRef();
  const groupRef = useRef();
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
            geometry={nodes["!!!!!!!!!!"].geometry}
            material={materials["Material.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Background.geometry}
            material={materials["Material.002"]}
          >
            <meshStandardMaterial
              attach="material"
              color={props.hovered ? "#ffffff" : "#00603a"}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ellipse.geometry}
            material={materials["Material.003"]}
          ></mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Title.geometry}
            material={materials["Material.001"]}
          >
            <meshStandardMaterial
              attach="material"
              color={props.hovered ? "#00603a" : "#ffffff"}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(colombolimitedtext);

// import React, { useEffect, useRef, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Text, RoundedBox, Plane } from "@react-three/drei";

// const CompanyTitle = (props) => {
//   const textRef = useRef();
//   const backgroundRef = useRef();
//   const [boxSize, setBoxSize] = useState([0, 0]);

//   useFrame(({ camera }) => {
//     if (textRef.current && backgroundRef.current) {
//       textRef.current.quaternion.copy(camera.quaternion);
//       backgroundRef.current.quaternion.copy(camera.quaternion);
//     }
//   });

//   useEffect(() => {
//     // Estimate text dimensions
//     // const fontSize = 1;
//     const textWidth = textRef.length * 25; // Approximation
//     const textHeight = 50 * 1.2; // Approximation

//     setBoxSize([textWidth, textHeight]);
//   }, [textRef]);

//   return (
//     <>
//       <group position={props.position}>
//         <Plane
//           ref={backgroundRef}
//           args={[0, 150, 100]} // Width, height, depth
//           radius={100} // Corner radius
//           smoothness={4}
//           rotation={[0, 0, 0]}
//         >
//           <meshStandardMaterial attach="material" color={props.bgColor} />
//         </Plane>
//         <Text
//           ref={textRef}
//           fontSize={60} // Adjust font size as needed
//           anchorX="center" // Center the text horizontally
//           anchorY="middle" // Center the text vertically
//           color={props.color} // Adjust text color
//           textAlign="center"
//           fontWeight={900}
//           borderRadius={0.1}
//           padding={[0.2, 0.4]}
//         >
//           {props.text}
//         </Text>
//       </group>
//     </>
//   );
// };

// export default CompanyTitle;
