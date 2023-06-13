import React, {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {Environment, OrbitControls} from "@react-three/drei";
import {Model} from "./Model";
import Container from "@mui/material/Container";
import RokuTypography from "../../components/ui/RokuTypography";

const TryOn3D = () => {
    return (
        <Container sx={{
            mt: 10,
            mb: 15,
            width: "90vw",
            height: "90vh",
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <RokuTypography align="center" variant="h2" marked="center">
                Virtual Try-On
            </RokuTypography>
            <RokuTypography  sx={{mb: 4, my: 8}}  variant="body2">
                {"Try on our products virtually! "}
                {"You can try different combinations of colors and fabrics."}
            </RokuTypography>
            {/*<Canvas pixelRatio={[1, 2]} camera={{ position: [-10, 15, 15], fov: 50 }}>*/}
            <Canvas camera={{position: [0, 0, 8]}}>
                <ambientLight intensity={1}/>
                <Suspense fallback={null}>
                    <Model/>
                    <OrbitControls/>
                    {/* <Environment preset="park" background/> */}
                </Suspense>
            </Canvas>
        </Container>
    )
}

export default TryOn3D