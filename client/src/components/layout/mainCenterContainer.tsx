import React from "react";
import Container from "../ui/container";

const MainCenterContainer = ({ children }: any) => {
    return (
        <main className="min-h-screen w-[100vw] grid place-content-center">
            <Container>{children}</Container>
        </main>
    );
};

export default MainCenterContainer;
