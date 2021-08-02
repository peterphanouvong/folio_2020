import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

import "./Playbox.css";

const Box = (props) => {
  // This reference will give us direct access to the mesh so we can animate it dsa
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [goingRight, setGoingRight] = useState(true);
  const [goingUp, setGoingUp] = useState(true);
  const [goingForward, setGoingForward] = useState(true);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    mesh.current.position.x += goingRight ? 0.01 : -0.01;
    mesh.current.position.y += goingUp ? -0.02 : +0.01;
    mesh.current.position.z += goingForward ? -0.01 : +0.02;

    if (mesh.current.position.x > 3) {
      setGoingRight(false);
    } else if (mesh.current.position.x < -3) {
      setGoingRight(true);
    }

    if (mesh.current.position.y < -3) {
      setGoingUp(false);
    } else if (mesh.current.position.y > 3) {
      setGoingUp(true);
    }

    if (mesh.current.position.z < -3) {
      setGoingForward(false);
    } else if (mesh.current.position.z > 3) {
      setGoingForward(true);
    }
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "hotpink" : "#aaa"}
        roughness={0}
        // metalness={1}
      />
    </mesh>
  );
};

const Playbox = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      <directionalLight intensity={0.6} position={[-4, 0, 0]} />
      <Box position={[0, 0, 0]} rotation={[0.2, 0.3, 0.5]} />
      <Box position={[-1, 0.5, 3]} />
      <Box position={[0.5, -3, -1.5]} rotation={[0.9, -0.3, -0.3]} />
    </Canvas>
  );
};

export { Playbox };
