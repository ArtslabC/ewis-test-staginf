import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";

export default function HoverModel(props) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.group
      onPointerEnter={(e) => {
        setHovered(true);
      }}
      onPointerLeave={() => {
        setHovered(false);
      }}
      {...props}
      whileHover={{
        y: 40,
      }}
      onClick={() => props.setActiveCard(props.title)}
      position={[0, 0, 0]}
    >
      {props.model}
      {React.cloneElement(props.textModel, { hovered })}
    </motion.group>
  );
}
