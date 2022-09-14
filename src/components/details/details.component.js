import React, { useContext } from "react";
import styled from "styled-components/native";

import { Spacer } from "../utility/spacer.component";
import { Text } from "../typography/text.component";
import { Item } from "./item.component";
import { WeatherContext } from "../../context/weather.context";


const ContainerItems = styled.View`
    background-color: ${props => props.theme.color.darkgray};
    padding: ${props => props.theme.size[1]}; 
    border-radius: ${props => props.theme.space[3]};
`;

const Container = styled.View`
    padding: ${props => props.theme.size[2]}; 
`;

const sunPosition = (time) => {
    const data = new Date(time * 1000);
    const timestr = data.toLocaleTimeString();
    return timestr;
}

export const Details = () => {

    const { sunrise, sunset, daily } = useContext(WeatherContext);

    return (
        <Container>
            <Text variant="secondary">Details</Text>
            <Spacer size="medium" />
            <ContainerItems>
                <Item name="sunrise" value={sunPosition(sunrise)} />
                <Spacer size="large" />
                <Item name="sunset" value={sunPosition(sunset)} />
                <Spacer size="large" />
                <Item name="population" value={daily.city.population} />
            </ContainerItems>
        </Container>
    )
};
