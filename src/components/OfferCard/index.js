import React from 'react';
import {ImageBackground, Text, View} from 'react-native';

const OfferCard = ({item}) => {
  return (
    <ImageBackground
      source={item.imageSource}
      resizeMode="cover"
      style={{
        backgroundColor: 'gray',
        height: 300,
        width: 200,
        borderTopRightRadius: 9,
        borderTopLeftRadius: 35,
        borderBottomLeftRadius: 9,
        borderBottomRightRadius: 35,
        overflow: 'hidden',
        position: 'relative',
        margin: 10,
      }}>
      <View
        style={{
          position: 'absolute',
          height: 50,
          width: 100,
          backgroundColor: '#ff5f00',
          borderBottomRightRadius: 20,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
          {item.price}
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 30,
          left: 20,
        }}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
          {item.place_name}
        </Text>
        <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
          {item.country}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default OfferCard;
