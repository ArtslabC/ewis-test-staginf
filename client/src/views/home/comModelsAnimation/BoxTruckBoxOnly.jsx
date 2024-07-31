import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import boxmodel from '../../../assets/models/animatedModels/boxtruckboxonly.glb';

export function BoxTruckBoxOnly(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(boxmodel);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions.boxx3) {
      actions.boxx3.play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Box_3008"
          castShadow
          receiveShadow
          geometry={nodes.Box_3008.geometry}
          material={materials['Mat.001']}
          position={[-976.123, 22.115, 607.282]}
          rotation={[Math.PI / 2, 0, 2.766]}
          scale={10.726}
        />
      </group>
    </group>
  );
}

useGLTF.preload(boxmodel);
