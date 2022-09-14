import React, { useContext } from "react";
import styled from "styled-components/native";

import { Card } from "./card.component";
import { WeatherContext } from "../../context/weather.context";


const CardListContainer = styled.View`
    flex-direction: row;
    justifyContent: space-evenly;
`;

export const CardList = () => {

    const { humidity, wind, pressure } = useContext(WeatherContext);

    return (
        <CardListContainer>
            <Card name="Humidity" value={humidity} />
            <Card name="Wind" value={wind} />
            <Card name="Pressure" value={pressure} />
        </CardListContainer>
    )
};
