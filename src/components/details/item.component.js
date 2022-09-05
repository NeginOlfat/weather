import React from "react";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import { sunrise } from "../../../assets/Details/sunrise";
import { sunset } from "../../../assets/Details/sunset";
import { people } from "../../../assets/Details/people";
import { color } from "../../theme/color";
import { Text } from "../typography/text.component";
import { Spacer } from "../utility/spacer.component";


const Container = styled.View`
    flex-direction: row;
    padding-horizontal: ${props => props.theme.space[2]};
`;
const TextContainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`;

const icon = {
    sunrise,
    sunset,
    population: people
}

export const Item = ({ name, value }) => {
    return (
        <Container>
            <SvgXml width="24" height="24" xml={icon[name]} color={color.white} />
            <Spacer position="left" size="large" />
            <TextContainer>
                <Text variant="details">{name}</Text>
                <Text variant="details">{value}</Text>
            </TextContainer>
            <Spacer position="right" size="large" />
        </Container>
    );
};
