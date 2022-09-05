import React from "react";
import { ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import styled, { ThemeProvider } from "styled-components/native";

import { theme } from "./src/theme";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Spacer } from "./src/components/utility/spacer.component";
import { Search } from "./src/components/search/search.component";
import { Text } from "./src/components/typography/text.component";
import { CardList } from "./src/components/card/cardList.component";
import { Image } from "./src/components/image/image.component";
import { DailyChart } from "./src/components/charts/daily-chart.component";
import { Details } from "./src/components/details/details.component";


const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <Text variant="secondary">Thu Aug 25 2022 </Text>
          <Spacer />
          <Search />
          <ScrollView>
            <Image />
            <Spacer />
            <CardList />
            <DailyChart />
            <Spacer />
            <Details />
          </ScrollView>
        </SafeArea>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
