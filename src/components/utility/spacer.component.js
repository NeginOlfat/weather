import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
    smali: 1,
    medium: 2,
    large: 3,
    xl: 4,
    xxl: 5
};

const positionVariant = {
    top: "margin-top",
    left: "margin-left",
    right: "margin-right",
    bottom: "margin-bottom"
}

const SpaceView = styled.View`
    ${({ variant }) => variant};
`;

export const Spacer = ({ position = "top", size = "small", children }) => {
    const property = positionVariant[position];
    const value = useTheme().space[sizeVariant[size]];
    const variant = `${property}:${value}`;
    return <SpaceView variant={variant} >{children}</SpaceView>
};
