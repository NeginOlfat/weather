import React from "react";
import styled from "styled-components/native";
import { Card } from "./card.component";

const CardListContainer = styled.View`
    flex-direction: row;
    justifyContent: space-evenly;
`;

export const CardList = () => {
    return (
        <CardListContainer>
            <Card name="Humidity" value="91" />
            <Card name="Humidity" value="91" />
            <Card name="Humidity" value="91" />
        </CardListContainer>
    )
}