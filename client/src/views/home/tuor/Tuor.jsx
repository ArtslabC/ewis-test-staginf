// src/components/VirtualTour.js

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Html } from "@react-three/drei";

import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  Image13,
  Image15,
  Image16,
  Image17,
  Image18,
  Image19,
  Image20,
  Image21,
  Image22,
  Image23,
  Image24,
  Image25,
  Image26,
  Image27,
  Image28,
  Image29,
  Image31,
  Image32,
  Image33,
  Image34,
  Image35,
  Image36,
  Image37,
  Disk,
} from "../../../assets/3dtuor";
import TuorLoading from "./TuorLoading";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  Image13,
  Image15,
  Image18,
  Image19,
  Image21,
  Image22,
  Image23,
  Image24,
  Image25,
  Image26,
  Image27,
  Image28,
  Image29,
  Image31,
  Image32,
  Image33,
  Image34,
  Image35,
  Image36,
  Image37,
];

const hotspots = {
  0: [{ position: [-150, 0, 0], target: 1 }], // working  - image1
  1: [
    { position: [150, 0, 100], target: 0 },
    { position: [-150, 0, -40], target: 2 }, // working  - image2
  ],
  2: [
    { position: [150, 0, 0], target: 1 },
    { position: [-150, 0, -5], target: 3 }, // working - image3
  ],
  3: [
    { position: [150, 0, 0], target: 2 },
    { position: [5, 0, 150], target: 4 }, //  working  - image4
  ],
  4: [
    { position: [100, 0, -150], target: 3 },
    { position: [-150, 0, -120], target: 5 }, // working - image5
  ],
  5: [
    { position: [-150, 0, 5], target: 4 }, //
    { position: [150, 0, 0], target: 7 }, //  working  - image6 - inside chamber
  ],
  // 6: [
  //   { position: [5, 0, 5], target: 7 }, // image6 not working
  //   { position: [5, 0, 2], target: 7 },
  // ],
  7: [
    { position: [-150, 0, 0], target: 5 }, // working - image7
    { position: [150, 0, 0], target: 8 },
  ],
  8: [
    { position: [150, 0, 0], target: 7 }, // working - image8
    { position: [-150, 0, 0], target: 9 },
  ],
  9: [
    { position: [-150, 0, 0], target: 8 }, // working - image9
    { position: [150, 0, 0], target: 10 },
  ],
  10: [
    { position: [0, 0, -200], target: 9 }, // working - image10
    { position: [0, 0, 200], target: 11 },
  ],
  11: [
    { position: [0, 0, -150], target: 10 }, // working - image11
    { position: [0, 0, 150], target: 12 },
  ],
  12: [
    { position: [5, 0, -10], target: 13 }, // not working - image12
    { position: [-8, 0, -5], target: 13 },
  ],
  13: [
    { position: [0, 0, 150], target: 12 }, // working  - image12
    { position: [20, 0, -150], target: 14 },
  ],
  // 14: [
  //   { position: [5, 0, -10], target: 13 }, // duplicated image 0 image13
  //   { position: [-8, 0, -5], target: 5 },
  // ],
  14: [
    { position: [-150, 0, -30], target: 13 }, //  working - image14
    { position: [30, 0, -150], target: 16 },
    { position: [0, 0, 150], target: 15 },
  ],
  15: [
    { position: [0, 0, -150], target: 14 }, // working - image15
  ],
  // 16: [
  //   { position: [5, 0, -10], target: 16 } // Duplicated image like image15 - image 16,
  //   { position: [-8, 0, -5], target: 5 },
  // ],
  // 15: [
  //   { position: [5, 0, -10], target: 14 },
  //   { position: [-8, 0, -5], target: 18 }, // working - image17
  // ],
  16: [
    { position: [150, 0, 50], target: 15 }, // working - image20
    { position: [-150, 0, 50], target: 17 },
  ],
  17: [
    { position: [0, 0, 150], target: 16 }, // working - image21
    { position: [0, 0, -150], target: 18 },
  ],
  18: [
    { position: [0, 0, -150], target: 17 }, // working - image24
    { position: [0, 0, 150], target: 19 },
  ],
  19: [
    { position: [5, 0, -150], target: 18 },
    { position: [150, 0, 0], target: 20 },
  ],
  20: [
    { position: [-150, 0, 0], target: 19 },
    { position: [150, 0, -20], target: 21 },
  ],
  21: [
    { position: [150, 0, 0], target: 20 },
    { position: [-150, 0, 10], target: 22 },
  ],
  22: [
    { position: [150, 0, -20], target: 21 },
    { position: [-150, 0, 20], target: 23 },
  ],
  23: [
    { position: [150, 0, -20], target: 22 },
    { position: [-150, 0, 20], target: 24 },
  ],
  24: [
    { position: [150, 0, 0], target: 23 },
    { position: [-150, 0, 0], target: 25 },
  ],
  25: [
    { position: [150, 0, 0], target: 24 },
    { position: [-150, 0, 0], target: 26 },
  ],
  26: [
    { position: [20, 0, 150], target: 25 },
    { position: [-10, 0, -150], target: 27 },
  ],
  27: [
    { position: [150, 0, 0], target: 26 },
    { position: [-150, 0, 0], target: 28 }, //current
  ],
  28: [
    { position: [0, 0, -150], target: 27 },
    { position: [-50, -10, 150], target: 29 },
  ],
  29: [
    { position: [25, 0, -150], target: 28 },
    // { position: [-8, 0, -5], target: 30 },
  ],
};

const Hotspot = ({ position, onClick }) => (
  <mesh position={position}>
    {/* <phereBufferGeometry args={[0.5, 16, 16]} /> */}
    <meshBasicMaterial color="red" />
    <Html>
      <div className="">
        <img
          src={Disk}
          onClick={onClick}
          alt=""
          className="min-w-10 h-10 object-contain cursor-pointer"
        />
      </div>
    </Html>
  </mesh>
);

const Tuor = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentImageIndex, setcurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // const preloadImage = (src) => {
  //   return new Promise((resolve, reject) => {
  //     const img = new Image();
  //     img.src = src;
  //     img.onload = () => resolve(src);
  //     img.onerror = reject;
  //   });

  // };

  // const handleHotspotClick = async (target) => {
  //   setIsLoading(true);
  //   await preloadImage(images[target]);
  //   console.log("next");
  //   setCurrentImage(images[target]);
  //   setcurrentImageIndex(target);
  //   setIsLoading(false);
  // };

  const handleHotspotClick = (target) => {
    setcurrentImageIndex(target);
  };

  return (
    <div className="canvas-container h-screen w-screen">
      <Suspense fallback={<TuorLoading />}>
        <Canvas>
          <OrbitControls enableZoom={false} />
          <Environment background={true} files={images[currentImageIndex]} />
          {hotspots[currentImageIndex]?.map((hotspot, index) => (
            <Hotspot
              key={index}
              position={hotspot.position}
              onClick={() => handleHotspotClick(hotspot.target)}
            />
          ))}
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Tuor;
