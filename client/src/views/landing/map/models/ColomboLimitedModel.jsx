import React, { useEffect, useRef, useState } from "react";
import { Text, useCamera, useGLTF } from "@react-three/drei";
import colombolimited from "../../../../assets/models/home/Avengertower.glb";
import { BoxGeometry, MeshBasicMaterial, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { ColomboLimitedText } from "./CompanyTitle";
import { useSpring, animated } from "@react-spring/three";
import { motion } from "framer-motion-3d";

const ColomboLimited = (props) => {
  // const [position, setObjectPosition] = useState([0, 0, 0]);
  const [hovered, setHovered] = useState(false);
  const [bgColor, setbgColor] = useState("green");
  const [color, setcolor] = useState("white");

  const { nodes, materials } = useGLTF(colombolimited);

  // Define green border material
  const borderMaterial = new MeshBasicMaterial({ color: "green" });

  // Calculate border geometry based on model size and desired border width
  const borderWidth = 0.1; // Adjust this value to change border thickness
  const modelSize = new Vector3(
    Math.abs(nodes.A_tower_main.geometry.boundingSphere.radius * 150),
    Math.abs(nodes.A_tower_main.geometry.boundingSphere.radius * 150),
    Math.abs(nodes.A_tower_main.geometry.boundingSphere.radius * 150)
  );
  const borderGeometry = new BoxGeometry(
    modelSize.x + borderWidth * 2,
    modelSize.y + borderWidth * 2,
    modelSize.z + borderWidth * 2
  );

  const textRef = useRef(null);

  useFrame(({ camera }) => {
    if (textRef.current) {
      textRef.current.quaternion.copy(camera.quaternion);
    }
  }); // Set up spring animation for position

  // const { position } = useSpring({
  //   position: hovered ? 20 : 0,
  //   // config: { mass: 1, tension: 170, friction: 26 },
  // });

  // console.log(position.get());

  // const x = useMotionValue(60);

  return (
    <motion.group
      onPointerEnter={(e) => {
        // setObjectPosition([0, 20, 0]);
        setHovered(true);
        setbgColor("red");
        setcolor("black");
      }}
      onPointerLeave={() => {
        // setObjectPosition([0, 0, 0]);
        setHovered(false);
        setbgColor("green");
        setcolor("white");
      }}
      {...props}
      dispose={null}
      // position={position}
      whileHover={{
        y: 40,
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.A_tower_main.geometry}
        material={materials.PaletteMaterial001}
        position={[-11.445, 573.321, -227.903]}
        scale={[85.56, 1362.464, 104.859]}
      />
      {/* <mesh geometry={borderGeometry} material={borderMaterial} /> */}
      {/* <Text
        fontSize={50} // Adjust font size as needed
        position={[-11.445, 1153.321, -227.903]} // Position the text above the model with some padding
        anchorX="center" // Center the text horizontally
        anchorY="middle" // Center the text vertically
        color="black" // Adjust text color
        textAlign="center"
        backgroundColor="green"
        borderRadius={0.1}
        padding={[0.2, 0.4]}
        ref={textRef}
      >
        Colombo Limited
      </Text> */}
      {/* <CompanyTitle
        text="Colombo Limited"
        boxPosition={[-11.445, 1200, -235]}
        position={[-11.445, 1200, -227.903]}
        color={color}
        bgColor={bgColor}
      /> */}
      <ColomboLimitedText hovered={hovered} />
    </motion.group>
  );
};

export default ColomboLimited;

useGLTF.preload(colombolimited);
