import { View } from "react-native";
import CovidMessage from '../../components/CovidMessage';
import HomeMap from '../../components/HomeMap';
import HomeSearch from '../../components/HomeSearch';
import React from 'react';

const HomeScreen = (props) => {
  return (
    <View>
      <HomeMap />

      {/* Covid Message */}
      <CovidMessage />

      {/* Bottom Component */}
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
