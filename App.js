import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { WeatherContextProvider } from "./src/context/weather.context";
import { theme } from "./src/theme";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Spacer } from "./src/components/utility/spacer.component";
import { Search } from "./src/components/search/search.component";
import { Text } from "./src/components/typography/text.component";
import { Weather } from "./src/weather/weather";


const month = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

const week = [
  "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
]

const App = () => {

  const today = new Date();

  return (
    <>
      <ThemeProvider theme={theme}>
        <WeatherContextProvider>
          <SafeArea>
            <Text variant="secondary">{week[today.getDay()]} {month[today.getMonth()]} {today.getDate()} {today.getFullYear()}</Text>
            <Spacer />
            <Search />
            <Weather />
          </SafeArea>
        </WeatherContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
