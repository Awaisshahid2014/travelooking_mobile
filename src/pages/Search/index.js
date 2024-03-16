import React from 'react';
import {Layout} from '../../modules';
import {View, Text} from 'react-native';
import AppStyles from '../../assets/Styles';

export default function Search() {
  return (
    <Layout>
      <View style={{padding: 20}}>
        <Text style={AppStyles.large_black_bold}>Why Bali?</Text>
        <Text style={{color: 'gray', lineHeight: 20}}>
          Embark on an enchanting journey to Bali through Travelooking, where
          lush landscapes meet vibrant cultures. Bali, known as the "Island of
          the Gods," beckons with its pristine beaches, serene rice terraces,
          and ancient temples. Immerse yourself in the Balinese way of life,
          indulging in exquisite cuisine, traditional dances, and spiritual
          tranquility. With Travelooking, unlock the gateway to Bali's mystical
          allure, promising a unique blend of relaxation and adventure for an
          unforgettable escape.
        </Text>
        <View>
          <Text style={{color: 'gray', lineHeight: 20}}>askdfjkasdf</Text>
        </View>
      </View>
    </Layout>
  );
}
