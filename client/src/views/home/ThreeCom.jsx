import React from "react";
import fences from "../../assets/models/threes/fenses.glb";
import sola from "../../assets/models/threes/sola.glb";
import threVO from "../../assets/models/threes/Treev1.glb";
import threVTw from "../../assets/models/threes/Treev2.glb";
import threVTh from "../../assets/models/threes/treev3.glb";
import roadDe from "../../assets/models/threes/roaddetails.glb";
// import carpark from '../../assets/models/threes/carpark.glb'
// import carMo from '../../assets/models/threes/allvehicals.glb'
import { useGLTF } from "@react-three/drei";
function ThreeCom() {
  const fencesM = useGLTF(fences);
  const solaM = useGLTF(sola);
  const threVOm = useGLTF(threVO);
  const threVTwm = useGLTF(threVTw);
  const threVThm = useGLTF(threVTh);
  const roadDM = useGLTF(roadDe);
  // const carparkM = useGLTF(carpark)

  return (
    <>
      <primitive
        object={fencesM.scene}
        scale={0.025}
        position={[0, -12.5, 0]}
        rotation={[0, 0, 0]}
      />
      <primitive
        object={solaM.scene}
        scale={0.025}
        position={[0, -12.5, 0]}
        rotation={[0, 0, 0]}
      />
      <primitive
        object={threVOm.scene}
        scale={0.025}
        position={[0, -12.5, 0]}
        rotation={[0, 0, 0]}
      />
      <primitive
        object={threVTwm.scene}
        scale={0.025}
        position={[0, -12.5, 0]}
        rotation={[0, 0, 0]}
      />
      <primitive
        object={threVThm.scene}
        scale={0.025}
        position={[0, -12.5, 0]}
        rotation={[0, 0, 0]}
      />
      <primitive
        object={roadDM.scene}
        scale={0.025}
        position={[0, -12.5, 0]}
        rotation={[0, 0, 0]}
      />
      {/* <primitive object={carparkM.scene} scale={0.025} position={[0, -12.5, 0]} rotation={[0, 0, 0]} /> */}
    </>
  );
}

export default ThreeCom;
useGLTF.preload(fences);
useGLTF.preload(sola);
useGLTF.preload(threVO);
useGLTF.preload(threVTw);
useGLTF.preload(threVTh);
useGLTF.preload(roadDe);
// useGLTF.preload(carpark);
