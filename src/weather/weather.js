import React from "react";
import styled from "styled-components/native";
import { ScrollView, Image as LoadingImage } from "react-native";

import { CardList } from "../components/card/cardList.component";
import { Image } from "../components/image/image.component";
import { DailyChart } from "../components/charts/daily-chart.component";
import { Details } from "../components/details/details.component";
import { Spacer } from "../components/utility/spacer.component";
import { WeatherContext } from "../context/weather.context";


const LoadingContainer = styled.View`
    flex:1;
    justyfy-content: center;
    align-items:center;
`;


export const Weather = () => {

    const { isLoading } = React.useContext(WeatherContext);

    return (
        <>
            {
                !isLoading ? (
                    <ScrollView>
                        <Image />
                        <Spacer />
                        <CardList />
                        <DailyChart />
                        <Spacer />
                        <Details />
                    </ScrollView>
                ) : (
                    <LoadingContainer>
                        <LoadingImage source={require("../../assets/loader.gif")} />
                    </LoadingContainer>
                )
            }
        </>
    )
}