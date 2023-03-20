import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons';

const UberTypeRoles = (props) => {
  const { id, type, price, duration } = props.data;
  const imageMap = {
    'UberX': require('../../assets/images/UberX.jpeg'),
    'Comfort': require('../../assets/images/Comfort.jpeg'),
    'UberXL': require('../../assets/images/UberXL.jpeg'),
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageMap[type]} />
      <View style={styles.middleContainer}>
        <View style={styles.typeDescription}> 
          <Text style={styles.type}>
            {type}
          </Text>
          <View style={styles.typeIconNumberContainer}>
            <Ionicons style={styles.typeIcon} name={'person'} size={12}/>
            <Text style={{fontSize: 12}}>3</Text>
          </View>
        </View>
        <Text style={styles.time}>8:03PM drop off</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={15} color={'#42d742'}/>
        <Text style={styles.price}>
          est. ${price}
        </Text>
      </View>
    </View>
  );
};

export default UberTypeRoles;
