import { Text, View } from "react-native";
import React from 'react';
import HomeMap from "../../components/HomeMap";
import UberTypes from "../../components/UberTypes";

const SearchResults = (props) => {
  return (
    <View>
      <HomeMap />

      <UberTypes />
    </View>
  );
};

export default SearchResults;
