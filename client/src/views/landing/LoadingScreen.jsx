import { useProgress } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import EwisLogo from "../../assets/logo/EwisLogo.webp";

function LoadingScreen({ onLoaded }) {
  const { progress } = useProgress();
  const [progressOver, setprogressOver] = useState(false);

  useEffect(() => {
    if (progress >= 100) {
      setprogressOver(true);
    }
  }, [progress]);

  const numericProgress = parseInt(progress, 10);

  return (
    <div className="flex flex-col items-center justify-center gap-5 text-center w-screen h-screen bg-primary">
      <div className="max-w-[400px] px-10">
        <img src={EwisLogo} alt="" />
      </div>
      <progress
        className="w-96 h-1 bg-white text-red-200"
        value={progress}
        max="100"
      ></progress>
      <div className="flex flex-row items-end justify-center gap-0">
        <button
          className="mt-5 px-4 py-2 bg-white text-primary  rounded font-bold w-[150px] "
          onClick={onLoaded}
          disabled={!progressOver}
        >
          {progressOver ? "Enter    " : "Loading..."}
        </button>
      </div>
    </div>
  );
}

export default LoadingScreen;
