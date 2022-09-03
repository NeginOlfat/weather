import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import styled from "styled-components/native";

import { theme } from "./src/theme";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Search } from "./src/components/search/search.component";


const Text = styled.Text`
  color: ${props => props.theme.color.gray};
  font-size: 20px;
`;

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <Text>Thu Aug 25 2022 </Text>
          <Search />
        </SafeArea>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
