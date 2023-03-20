import React from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import UberTypeRoles from '../UberTypeRole';
import styles from './styles';
import typesData from '../../assets/data/types';

const UberTypes = (props) => {

  const confirm = () => {
    console.warn('confirm')
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Uber types</Text>
        {typesData.map((ubertype, index) => {
          return <UberTypeRoles key={index} data={ubertype}/>;
        })}

        <Pressable onPress={confirm} style={styles.pressableContainer}>
          <Text style={styles.pressableText}>
            Confirm Uber
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default UberTypes;