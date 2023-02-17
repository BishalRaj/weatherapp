import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import styled from "styled-components";
import { Earth } from "./components/earth";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  background: black;
`;

function App() {
  return (
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;
