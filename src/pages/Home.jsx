import { Canvas } from "@react-three/fiber";

import { Suspense, useState } from "react";

import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";

// FIXED: Capitalized the 'I' in HomeInfo to match your usage below
import HomeInfo from "../components/HomeInfo";
import Loader from "../components/Loader";
const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6, -43];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43];
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -1, -4]; // Lifted slightly so it stays "above" the island
    }
    return [screenScale, screenPosition];
  };

  const [planScale, planPosition] = adjustPlaneForScreenSize();
  const [islandScale, islandPosition, islandrotation] =
    adjustIslandForScreenSize();

  return (
    <section className="w-full relative h-screen">
      {/* HOME INFO TOP CONTAINER 
          'absolute top-20' keeps it at the top.
          'z-10' ensures it sits above the 3D Canvas.
          'pointer-events-none' lets you still drag the island.
      */}
      <div className="absolute top-20 left-0 right-0 z-10 flex items-center justify-center pointer-events-none">
        {currentStage && (
          <div className="pointer-events-auto">
            <HomeInfo currentStage={currentStage} />
          </div>
        )}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandrotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            scale={planScale}
            position={planPosition}
            rotation={[0, 20, 0]}
            isRotating={isRotating}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
