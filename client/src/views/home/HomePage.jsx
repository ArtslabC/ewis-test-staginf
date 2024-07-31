import { Html, OrbitControls, PresentationControls, Sky, Stats } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { Suspense, useState, useRef } from 'react';
import LoadingScreen from './LoadingScreen';
import Experince from './Experince';
import Lights from './Lights';
import TWEEN from '@tweenjs/tween.js';
import annotations from './annotations.json';
import HomeInfo from './HomeInfo';

function Annotations({ controls, setCurrentStage }) {
  const { camera } = useThree();
  const [selected, setSelected] = useState(-1);

  return (
    <>
      {annotations.map((a, i) => (
        <Html key={i} position={[a.lookAt.x, a.lookAt.y, a.lookAt.z]} className='z-10' 
        occlude>
          <button
            onPointerUp={() => {
              setSelected(i);
              new TWEEN.Tween(controls.current.target)
                .to({ x: a.lookAt.x, y: a.lookAt.y, z: a.lookAt.z }, 1000)
                .easing(TWEEN.Easing.Cubic.Out)
                .start();
              new TWEEN.Tween(camera.position)
                .to({ x: a.camPos.x, y: a.camPos.y, z: a.camPos.z }, 1000)
                .easing(TWEEN.Easing.Cubic.Out)
                .start();
            }}
            onClick={() => { setCurrentStage(a.id) }}
            className='ring-2 bg-white w-56 font-Poppins rounded-xl ring-primary py-2 z-10'
          >
            <text x="12" y="22" fill="white" fontSize={17} fontFamily="monospace" style={{ pointerEvents: 'none' }}>
              {a.title}
            </text>
          </button>
          {/* {a.description && i === selected && (
            <div
              id={'desc_' + i}
              className="annotationDescription"
              dangerouslySetInnerHTML={{ __html: a.description }}
            />
          )} */}
        </Html>
      ))}
    </>
  );
}

function Tween() {
  useFrame(() => {
    TWEEN.update();
  });
}

function HomePage() {
  const ref = useRef();
  const [currentStage, setCurrentStage] = useState(0);

  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        <div className='w-screen h-screen relative'>
          {currentStage !== 0 && (
            <div className={`fixed z-50 transition-transform duration-300 ease-in-out bg-white shadow-lg ${currentStage !== 0 ? '-translate-x-0' : '-translate-x-full'
              } md:${currentStage !== 0 ? 'translate-x-0' : 'translate-x-full'
              } md:top-0 md:right-0 md:w-2/6 md:h-full bottom-0 w-full md:transform-none `} >
              <HomeInfo currentStage={currentStage} setCurrentStage={setCurrentStage} />
            </div>
          )}
          <div className='w-full h-full z-10'>
            <Canvas
              camera={{
                position: [0, 20, 50], fov: 75,
                near: 1,
                far: 1000,
              }}
              shadows
              className='z-10'
            >
              <Stats />
              <PresentationControls
                polar={[-0, 0]}
                azimuth={[0, 0]}
                config={{ mass: 2, tension: 400 }}
                snap={{ mass: 4, tension: 400 }}
              >
                <Sky />
                <OrbitControls
                  ref={ref}
                  autoRotate
                  enableRotate={true}
                  autoRotateSpeed={0.3}
                  enableDamping={false}
                  dampingFactor={0.25}
                  enablePan={true}
                  enableZoom={true}
                  zoomSpeed={1.2}
                  maxPolarAngle={Math.PI / 2}
                  keyPanSpeed={0.1}
                  maxDistance={150}
                  minDistance={1}
                />
                <Annotations controls={ref} setCurrentStage={setCurrentStage} />
                <Tween />
                <Experince />
                <Lights />
              </PresentationControls>
            </Canvas>
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default HomePage;
