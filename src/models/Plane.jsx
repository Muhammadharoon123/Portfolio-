import React, { useEffect, useRef } from "react";
import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  // 1. Destructure 'animations' (plural)
  const { scene, animations } = useGLTF(planeScene);
  // 2. Pass those animations into the hook
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    // 3. Use a check (?. ) just in case the animation name is different
    if (isRotating) {
      actions["Take 001"]?.play();
    } else {
      actions["Take 001"]?.stop();
    }
  }, [actions, isRotating]);

  return (
    // 4. Attach the ref here so useAnimations can find the mesh
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
