import React, {useEffect, useState} from 'react';
import styles from './styles';
import {SafeAreaView, TextInput, View, Text} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const DestionationSearch = props => {
  const [originPlace, setOriginPlace] = useState('');
  const [destionationPlace, setDestinationPlace] = useState('');

  useEffect(() => {
    if (originPlace && destionationPlace) {
      console.warn('redirect to results');
    }
  }, [originPlace, destionationPlace]);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder='From'
          fetchDetails
          onPress={(data, details = null) => {
            setOriginPlace({data, details})
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput
          }}
          query={{
            key: 'AIzaSyAAopPOduvNgUa4FjuoSSRemPuEhVb3jj0',
            components: 'country:co',
            language: 'es',
          }}
        />
        <GooglePlacesAutocomplete
          placeholder='Where to?'
          fetchDetails
          onPress={(data, details = null) => {
            setDestinationPlace({data, details})
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput
          }}
          query={{
            key: 'AIzaSyAAopPOduvNgUa4FjuoSSRemPuEhVb3jj0',
            language: 'es',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestionationSearch;
