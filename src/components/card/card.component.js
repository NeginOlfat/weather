import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

import { Text } from "../typography/text.component";
import { Spacer } from "../utility/spacer.component";


const CardContainer = styled.View`
    background-color: ${props => props.theme.color.darkgray};
    padding: ${props => props.theme.size[1]};
    height: 160px; 
    width: 120px;
    align-items: center;
    justify-content: center;
    border-radius: ${props => props.theme.space[3]};
`;

const icons = {
    Humidity: "water-outline",
    Wind: "weather-windy",
    Pressure: "weather-pouring"
}

export const Card = ({ name, value }) => {
    return (
        <CardContainer>
            <MaterialCommunityIcons name={icons[name]} size={36} color="white" />
            <Spacer size="medium" />
            <Text variant="primary">{value}</Text>
            <Spacer />
            <Text variant="secondary">{name}</Text>
        </CardContainer>
    );
};
