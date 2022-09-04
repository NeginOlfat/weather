import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import { SearchBar } from "react-native-elements";
import styled from "styled-components/native";

import { color } from "../../theme/color";
import { Spacer } from "../utility/spacer.component";


const SearchBarContainer = styled.View`
  padding-Horizontal: ${props => props.theme.space[4]};
  padding-vertical: ${props => props.theme.space[2]};
  flex-direction: row;
  justify-content: center;
  align-items:center;
`;

const SearchCityContainer = styled.View`
    flex: 1;
`;

const SearchCity = styled(SearchBar).attrs({
    containerStyle: { borderRadius: 32, padding: 0 },
    inputContainerStyle: { borderRadius: 32, }
})`
    flex: 1;
`;

export const Search = () => {

    const [searchedCity, setSearchedCity] = useState("tehran");

    const onSearch = () => {
        console.log(searchedCity)
    }

    return (
        <SearchBarContainer>
            <SearchCityContainer >
                <SearchCity
                    placeholder="Search Cities"
                    onChangeText={(city) => setSearchedCity(city)}
                    value={searchedCity}
                    onSubmitEditing={onSearch}
                    searchIcon={false}
                />
            </SearchCityContainer>
            <Spacer position="left" size="medium" />
            <IconButton
                icon="magnify"
                mode="contained"
                size={28}
                iconColor="#c0c0c0"
                containerColor={color.darkgray}
                onPress={onSearch}
            />
        </SearchBarContainer>

    );
};
