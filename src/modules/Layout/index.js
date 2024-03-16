import React from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import Header from './Header';
import DetailHeader from './Header/DetailHeader';
import {useRoute} from '@react-navigation/native';

const Layout = ({children}) => {
  const router = useRoute();
  return (
    <View style={{display: 'flex', flex: 1}}>
      <View style={{flex: 1}}>
        <View>{router.name == 'Search' ? <DetailHeader /> : <Header />}</View>
        <View
          style={{
            height: Dimensions.get('screen'),
            flex: 12,
          }}>
          <ScrollView>{children}</ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Layout;
