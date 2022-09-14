import React, { useContext } from "react";
import { View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { WeatherContext } from "../../context/weather.context";
import { Text } from "../typography/text.component";



export const DailyChart = () => {

    const { daily } = useContext(WeatherContext);
    const today = new Date();

    return (
        <View style={{ padding: 16 }}>
            <Text variant="secondary">Daily</Text>
            <LineChart
                data={{
                    labels: [
                        (today.getMonth() + 1) + '-' + (today.getDate() + 1),
                        (today.getMonth() + 1) + '-' + (today.getDate() + 2),
                        (today.getMonth() + 1) + '-' + (today.getDate() + 3),
                        (today.getMonth() + 1) + '-' + (today.getDate() + 4),
                        (today.getMonth() + 1) + '-' + (today.getDate() + 5),
                        (today.getMonth() + 1) + '-' + (today.getDate() + 6),
                    ],
                    datasets: [
                        {
                            data: [
                                daily.list[0].temp.day,
                                daily.list[1].temp.day,
                                daily.list[2].temp.day,
                                daily.list[3].temp.day,
                                daily.list[4].temp.day,
                                daily.list[5].temp.day,
                            ]
                        }
                    ]
                }}
                width={Dimensions.get("window").width - 32}
                height={220}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#2E3238",
                    backgroundGradientFrom: "#808080",
                    backgroundGradientTo: "#2E3238",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#C0C0C0",
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>
    )
};
