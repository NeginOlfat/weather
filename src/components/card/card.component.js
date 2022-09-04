import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import styled from "styled-components/native";
import { Text } from "../typography/text.component";

const CardContainer = styled.View`
    background-color: ${props => props.theme.color.darkgray};
    padding: ${props => props.theme.size[1]};
    height: 160px; 
    align-items: center;
    justify-content: center;
    border-radius: ${props => props.theme.space[3]};
`;


export const Card = ({ name, value }) => {
    return (
        <CardContainer>
            <Ionicons name="water-outline" size={32} color="white" />
            <Text variant="primary">{value}</Text>
            <Text variant="secondary">{name}</Text>
        </CardContainer>
    );
};
