import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import DestionationSearch from './src/screens/DestinationSearch';
import SearchResults from './src/screens/SearchResults/index';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      {/* <HomeScreen /> */}
      <DestionationSearch />
      <SearchResults />
    </>
  );
}

export default App;
