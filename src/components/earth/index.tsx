import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
// import EarthNightMap from "../../assets/textures/8k_earth_nightmap.jpg";
import EarthCloudMap from "../../assets/textures/8k_earth_clouds.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";

import * as THREE from "three";

export function Earth() {
  const [colorMap, normalMap, specularMap, cloudMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudMap]
  );

  const earthRef = useRef<any>();
  const cloudRef = useRef<any>();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 6;
    cloudRef.current.rotation.y = elapsedTime / 7;
  });

  return (
    <>
      <ambientLight intensity={0.1} />

      <pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={1.2} />

      <Stars
        radius={300}
        depth={60}
        factor={7}
        fade={true}
        //   count={20000}
      />
      <mesh
        ref={cloudRef}

        // to position object
        // position={[0, 0, 3]}
      >
        <sphereGeometry args={[2.005, 100, 100]} />
        <meshPhongMaterial
          map={cloudMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        ref={earthRef}

        // position={[0, 0, 3]}
      >
        <sphereGeometry
          // change width and height segment for smoothness
          // size , width segment, height segment
          args={[1.98, 150, 150]}
        />
        {/* <meshPhongMaterial color="blue" /> */}
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls
          enableZoom={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
}
