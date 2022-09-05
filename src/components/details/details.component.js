import React from "react";
import styled from "styled-components/native";
import { Spacer } from "../utility/spacer.component";
import { Text } from "../typography/text.component";
import { Item } from "./item.component";


const ContainerItems = styled.View`
    background-color: ${props => props.theme.color.darkgray};
    padding: ${props => props.theme.size[1]}; 
    border-radius: ${props => props.theme.space[3]};
`;

const Container = styled.View`
    padding: ${props => props.theme.size[2]}; 
`;


export const Details = () => {
    return (
        <Container>
            <Text variant="secondary">Details</Text>
            <Spacer size="medium" />
            <ContainerItems>
                <Item name="sunrise" value="6:24" />
                <Spacer size="large" />
                <Item name="sunset" value="6:24" />
                <Spacer size="large" />
                <Item name="population" value="4612191" />
            </ContainerItems>
        </Container>
    )
};
