import React from "react";
import styled from "styled-components/native";
import { Text } from "../typography/text.component";

const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: ${props => props.theme.space[3]};
`;

const ImageWeather = styled.Image`
  height: 250px;
  width: 250px;
`;

const DegreeContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Image = () => {
    return (
        <ImageContainer>
            <ImageWeather source={require("../../../assets/Weather/04/04.png")} />
            <DegreeContainer>
                <Text variant="title">35</Text>
                <Text> °C</Text>
            </DegreeContainer>
            <Text variant="secondary" >clear</Text>
        </ImageContainer>
    )
};
