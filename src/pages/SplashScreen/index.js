import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AppImages from '../../assets/images';

export default function SplashScreen() {
  return (
    <View
      style={{
        height: Dimensions.get('screen').height,
        backgroundColor: '#ff5f00',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Animatable.Image
        source={AppImages.splash_screen}
        height={100}
        width={100}
        duration={2000}
        animation={'wobble'}
        iterationCount={5}
        direction={'alternate-reverse'}
      />
      <Animatable.Text
        style={{color: 'white', fontSize: 30, fontWeight: '800'}}
        duration={4000}
        animation={'rubberBand'}
        direction={'alternate-reverse'}
        easing="ease-out"
        iterationCount="infinite"
        delay={2}>
        Travelooking
      </Animatable.Text>
    </View>
  );
}
