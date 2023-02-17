import React from "react";
import { useLoader } from "@react-three/fiber";
import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNightMap from "../../assets/textures/8k_earth_nightmap.jpg";
import EarthCloudMap from "../../assets/textures/8k_earth_clouds.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";

import * as THREE from 'three'


export function Earth() {
  const [colorMap, normalMap, specularMap, cloudMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudMap]
  );

  return (
    <>
      <ambientLight intensity={0.7} />
      <mesh>
        <sphereGeometry args={[1.005,32,32]} />
        <meshPhongMaterial map={cloudMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        {/* <meshPhongMaterial color="blue" /> */}
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
         <OrbitControls enableZoom={true} enableRotate={true} zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4} />
      </mesh>
    </>
  );
}
