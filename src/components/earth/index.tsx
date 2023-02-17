import React from "react";
import { useLoader } from "@react-three/fiber";
import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNightMap from "../../assets/textures/8k_earth_nightmap.jpg";
import EarthCloudMap from "../../assets/textures/8k_earth_clouds.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";
export function Earth() {
  const [colorMap, normalMap, specularMap, cloudMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudMap]
  );

  return (
    <>
      <ambientLight intensity={0.5} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        {/* <meshPhongMaterial color="blue" /> */}
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
         <OrbitControls enableZoom={true} />
      </mesh>
    </>
  );
}
