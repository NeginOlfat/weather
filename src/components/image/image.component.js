import React, { useContext } from "react";
import styled from "styled-components/native";

import { Text } from "../typography/text.component";
import { WeatherContext } from "../../context/weather.context";
import { weatherImage } from "./weather-icon.component";


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

  const { temp, description, icon } = useContext(WeatherContext);
  return (
    <ImageContainer>
      {icon && <ImageWeather source={weatherImage(icon)} />}
      <DegreeContainer>
        <Text variant="title">{temp}</Text>
        <Text> °C</Text>
      </DegreeContainer>
      <Text variant="secondary" >{description}</Text>
    </ImageContainer>
  )
};
