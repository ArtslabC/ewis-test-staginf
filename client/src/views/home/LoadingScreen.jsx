import { useProgress } from "@react-three/drei";
import React from "react";

function LoadingScreen() {
  const { progress } = useProgress();
  // Extracting only numbers from the progress value
  const numericProgress = parseInt(progress, 10);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 text-center w-screen h-screen bg-primarygray ">
        <div className="w-20 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#065f46_0deg,#065f46_180deg,transparent_180deg,transparent_360deg)]">
          <span className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#34d399_0deg,#34d399_180deg,transparent_180deg,transparent_360deg)]"></span>
        </div>
        <progress
          className="w-96 h-1 bg-white "
          value={progress}
          max="100"
        ></progress>
        <div className="flex flex-row items-end justify-center gap-0 mt-5">
          {/* Displaying only the numeric part of the progress */}
          <p className="font-Poppins font-medium text-base  flex flex-row items-center justify-center w-28">
            <span>{numericProgress} % Loading</span>{" "}
          </p>
          <div className="flex flex-row gap-1 mb-1">
            <div className="w-1 h-1 rounded-full bg-primary animate-bounce"></div>
            <div className="w-1 h-1 rounded-full bg-primary animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-1 h-1 rounded-full bg-primary animate-bounce [animation-delay:-.5s]"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingScreen;
