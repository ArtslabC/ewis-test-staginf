// src/components/VirtualTour.js

import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, Html, Preload } from "@react-three/drei";
import * as THREE from "three";

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
import ScreenOverlay from "../../landing/ScreenOverlay";
import LoadingScreen from "../../landing/LoadingScreen";

const images = [
  Image1, // 0
  Image2, // 1
  Image3, // 2
  Image4, // 3
  Image5, // 4
  Image6, // 5
  Image7, // 6
  Image8, // 7
  Image9, // 8
  Image10, // 9
  Image11, //10
  Image12, //11
  Image13, // 12
  Image15, // 13
  Image18, // 14
  Image19, // 15
  Image21, // 16
  Image22, // 17
  Image23, //  18
  Image24, // 19
  Image25, // 20
  Image26, // 21
  Image27, // 22
  Image28, // 23
  Image29, // 24
  Image31, // 25
  Image32, // 26
  Image33, // 27
  Image34, // 28
  Image35, // 29
  Image36, // 30
  Image37, // 31
];

const store = [
  {
    // 0
    url: Image1,
    cameraDirection: 1,
    hubspots: [{ position: [-150, 0, 0], target: 1, diskImage: Disk }], // chcked working 1
  },
  {
    // 1
    url: Image2,
    cameraDirection: 1,
    hubspots: [
      { position: [150, 0, 100], target: 0, diskImage: Disk }, // checked working 2
      { position: [-150, 0, -40], target: 2, diskImage: Disk }, // 1
    ],
  },
  {
    // 2
    url: Image3,
    hubspots: [
      { position: [150, 0, 0], target: 1, diskImage: Disk }, // checked working 3
      { position: [-150, 0, -5], target: 3, diskImage: Disk }, // 2
    ],
  },
  {
    // 3
    url: Image4,
    cameraDirection: [0, 0, -1],
    hubspots: [
      { position: [150, 0, 0], target: 2, diskImage: Disk }, //  cheked working 4
      { position: [5, 0, 150], target: 4, diskImage: Disk }, //  3
    ],
  },
  {
    // 4
    url: Image5,
    hubspots: [
      { position: [100, 0, -150], target: 3, diskImage: Disk }, // chekd working 5
      { position: [-150, 0, -120], target: 5, diskImage: Disk }, // 4
    ],
  },
  {
    // 5
    url: Image6,
    hubspots: [
      { position: [-150, 0, 5], target: 4, diskImage: Disk }, // ckeked working 6
      { position: [150, 0, 0], target: 7, diskImage: Disk }, //  5
    ],
  },
  {
    // 6
    url: Image7,
    hubspots: [
      { position: [-150, 0, 5], target: 5, diskImage: Disk }, // ckeked working 6
      { position: [150, 0, 0], target: 7, diskImage: Disk }, //  5
    ],
  },
  {
    // 7
    url: Image8,
    hubspots: [
      { position: [-150, 0, 0], target: 6, diskImage: Disk }, // 6
      { position: [150, 0, 0], target: 8, diskImage: Disk }, // cheked working 7
    ],
  },
  {
    // 8
    url: Image9,
    hubspots: [
      { position: [150, 0, 0], target: 7, diskImage: Disk }, // 7
      { position: [-150, 0, 0], target: 9, diskImage: Disk }, // cheked working 8
    ],
  },
  {
    // 9
    url: Image10,
    hubspots: [
      { position: [-150, 0, 0], target: 8, diskImage: Disk }, // 8
      { position: [150, 0, 0], target: 10, diskImage: Disk }, // cheked working 9
    ],
  },
  {
    // 10
    url: Image11,
    hubspots: [
      { position: [0, 0, -200], target: 9, diskImage: Disk }, // working - image10
      { position: [0, 0, 200], target: 11, diskImage: Disk }, // cheked working 10
    ],
  },
  {
    // 11
    url: Image12,
    hubspots: [
      { position: [0, 0, -150], target: 10, diskImage: Disk }, // working - image11
      { position: [0, 0, 150], target: 12, diskImage: Disk }, // cheked working - 11
    ],
  },
  {
    // 12 -- // current
    url: Image15,
    hubspots: [
      { position: [0, 0, 150], target: 11, diskImage: Disk }, // not working - image12
      { position: [10, 0, -150], target: 13, diskImage: Disk },
    ],
  },
  {
    // 13
    url: Image18,
    hubspots: [
      { position: [-150, 0, -30], target: 12, diskImage: Disk }, //  working - image14
      { position: [30, 0, -150], target: 13, diskImage: Disk }, // 14
      { position: [0, 0, 150], target: 12, diskImage: Disk },
    ],
  },
  {
    // 14
    url: Image19,
    hubspots: [
      { position: [0, 0, -150], target: 13, diskImage: Disk }, // working - image15
    ],
  },
  {
    // 15
    url: Image21,
    hubspots: [
      { position: [150, 0, 50], target: 14, diskImage: Disk }, // working - image20
      { position: [-150, 0, 50], target: 16, diskImage: Disk },
    ],
  },
  {
    // 16
    url: Image22,
    hubspots: [
      { position: [0, 0, 150], target: 15, diskImage: Disk }, // working - image21
      { position: [0, 0, -150], target: 17, diskImage: Disk },
    ],
  },
  {
    // 17
    url: Image23,
    hubspots: [
      { position: [0, 0, -150], target: 16, diskImage: Disk }, // working - image24
      { position: [0, 0, 150], target: 18, diskImage: Disk },
    ],
  },
  {
    // 18
    url: Image24,
    hubspots: [
      { position: [5, 0, -150], target: 17, diskImage: Disk },
      { position: [150, 0, 0], target: 19, diskImage: Disk },
    ],
  },
  {
    // 19
    url: Image25,
    hubspots: [
      { position: [-150, 0, 0], target: 18, diskImage: Disk },
      { position: [150, 0, -20], target: 20, diskImage: Disk },
    ],
  },
  {
    // 20
    url: Image26,
    hubspots: [
      { position: [150, 0, 0], target: 19, diskImage: Disk },
      { position: [-150, 0, 10], target: 21, diskImage: Disk },
    ],
  },
  {
    // 21
    url: Image27,
    hubspots: [
      { position: [150, 0, -20], target: 20, diskImage: Disk },
      { position: [-150, 0, 20], target: 22, diskImage: Disk },
    ],
  },
  {
    // 22
    url: Image28,
    hubspots: [
      { position: [150, 0, -20], target: 21, diskImage: Disk },
      { position: [-150, 0, 20], target: 23, diskImage: Disk },
    ],
  },
  {
    // 23
    url: Image29,
    hubspots: [
      { position: [150, 0, 0], target: 22, diskImage: Disk },
      { position: [-150, 0, 0], target: 24, diskImage: Disk },
    ],
  },
  {
    // 24
    url: Image31,
    hubspots: [
      { position: [150, 0, 0], target: 23, diskImage: Disk },
      { position: [-150, 0, 0], target: 25, diskImage: Disk },
    ],
  },
  {
    // 25
    url: Image32,
    hubspots: [
      { position: [20, 0, 150], target: 24, diskImage: Disk },
      { position: [-10, 0, -150], target: 26, diskImage: Disk },
    ],
  },
  {
    // 26
    url: Image34,
    hubspots: [
      { position: [0, 0, -150], target: 25, diskImage: Disk },
      { position: [-20, 0, 150], target: 27, diskImage: Disk }, //current
    ],
  },
  {
    // 27
    url: Image35,
    hubspots: [{ position: [25, 0, -150], target: 26, diskImage: Disk }],
  },
  // {
  //   // 27
  //   url: Image35,
  //   hubspots: [{ position: [25, 0, -150], target: 25, diskImage: Disk }],
  // },
  // ...
];

function Portals() {
  const [currentIndex, setCurrentIndex] = useState(3);
  const { url, ...props } = store[currentIndex];
  const maps = useLoader(THREE.TextureLoader, store.map((entry) => entry.url)) // prettier-ignore
  const { camera } = useThree();

  maps.forEach((map) => {
    map.center.set(0.5, 0.5);
    map.flipY = false; // Ensure the texture is not flipped vertically
    map.rotation = Math.PI;
  });

  useEffect(() => {
    // camera.position.set(0, 0, 0);
  }, [currentIndex]);

  const handleCLick = (index) => {
    setCurrentIndex(index);
    const targetHotspot = store[currentIndex].hubspots.find(
      (h) => h.target === index
    );
    if (targetHotspot) {
      const direction = new THREE.Vector3(
        ...targetHotspot.position
      ).normalize();
      setCamera(direction);
    }
  };

  return (
    <Dome
      handleCLick={handleCLick}
      {...props}
      texture={maps[currentIndex]}
      hubspots={store[currentIndex].hubspots}
    />
  );
}

const Tuor2 = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className="canvas-container h-screen w-screen relative">
        <ScreenOverlay />
        <Canvas frameloop="demand" camera={{ position: [0, 0, 0.1], fov: 75 }}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableDamping
            dampingFactor={0.2}
            autoRotate={false}
            rotateSpeed={-0.5}
          />
          <Suspense fallback={null}>
            <Preload all />
            <Portals />
          </Suspense>
        </Canvas>
      </div>
    </Suspense>
  );
};

export default Tuor2;

function Dome({ name, position, texture, handleCLick, hubspots }) {
  return (
    <group>
      <mesh>
        <sphereGeometry args={[10, 60, 40]} />
        <meshBasicMaterial
          map={texture}
          side={THREE.BackSide}
          position={[0, 0, 0]}
        />
      </mesh>
      {hubspots.map((hub, i) => (
        <mesh position={hub.position} key={i}>
          <meshBasicMaterial color="white" />
          <Html>
            <div className="">
              <img
                src={Disk}
                onClick={() => {
                  handleCLick(hub.target);
                }}
                alt=""
                className="min-w-10 h-10 object-contain cursor-pointer"
              />
            </div>
          </Html>
        </mesh>
      ))}
    </group>
  );
}
