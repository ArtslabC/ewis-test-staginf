import React, { useRef } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";
import colombolimitedtext from "../../../../assets/models/home/titles/colombolimitedtext.glb";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";

export function ColomboLimitedText(props) {
  const { nodes, materials } = useGLTF(colombolimitedtext);

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
    <group ref={textRef} position={[-11.445, 950, -227.903]}>
      <group {...props} dispose={null} scale={120}>
        <group position={[-0.144, 2.27, -0.073]} scale={0.01}>
          <group position={[282.5, 58.489, 3]} scale={[0.478, 0.478, 0.131]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.head.geometry}
              material={materials["Material.006"]}
              position={[0, 0, -1.587]}
            />
          </group>
          <motion.mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle.geometry}
            material={materials["Material.008"]}
            // bg

            position={[36.053, 2.835, 0]}
          >
            < meshStandardMaterial
              attach="material"
              color={props.hovered ? "#00603a" : "#ffffff"}
            />
          </motion.mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text.geometry}
            material={materials["Material.005"]}
            position={[35.898, 5, 2]}
          >
            <meshStandardMaterial
              attach="material"
              color={props.hovered ? "#ffffff" : "#00603a"}
            />
          </mesh>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text001.geometry}
          material={materials["Material.007"]}
          position={[2.615, 2.711, 0.104]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.447}
        />
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
