import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AppImages from '../../../assets/images';
import AllIcons from '../../../assets/icons';

const styles = StyleSheet.create({
  header: {
    // backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  whiteTexts: {
    color: '#FFFFFF',
  },
  blackTexts: {
    color: 'black',
    fontWeight: '500',
    fontSize: 24,
  },
  logoImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logoImage}>
        <Image source={AppImages.app_logo} style={{width: 50, height: 50}} />
      </View>
      <Text style={styles.blackTexts}>Dashboard</Text>
      <View style={[styles.logoImage]}>
        <Image source={AllIcons.menu} style={{width: 25, height: 25}} />
      </View>
    </View>
  );
};

export default Header;
