import React from 'react';
import {
  Text,
  Dimensions,
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import AppImages from '../../../assets/images';
import AllIcons from '../../../assets/icons';
import Colors from '../../../assets/colors';
import AppStyles from '../../../assets/Styles';

export default function DetailHeader() {
  return (
    <View style={{position: 'relative', minHeight: 370}}>
      <ImageBackground
        source={AppImages.bali_trip}
        style={{
          height: 300,
          width: Dimensions.get('screen').width,
          borderBottomRightRadius: 50,
          backgroundColor: 'red',
          overflow: 'hidden',
          paddingHorizontal: 10,
          paddingVertical: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image source={AllIcons.left_arrow} style={{height: 30, width: 30}} />
          <Image source={AllIcons.menu} style={{height: 30, width: 30}} />
        </View>
        <View
          style={{
            paddingTop: 20,
          }}>
          <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              Bali
            </Text>
            <Image
              source={AllIcons.rainy_clouds}
              style={{height: 30, width: 30, marginLeft: 10}}
            />
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              17 &deg;C
            </Text>
          </View>
          <Text style={{fontSize: 36, fontWeight: 'bold', color: 'white'}}>
            Indonesia
          </Text>
          <View style={{paddingTop: 10}}>
            <TouchableOpacity>
              <Text style={{fontSize: 20, fontWeight: '500', color: 'white'}}>
                View Trip Plan
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          paddingHorizontal: 15,
          width: Dimensions.get('screen').width,
          position: 'absolute',
          bottom: 0,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            position: 'relative',
          }}>
          <View
            style={[
              {
                height: 130,
                width: 100,
                backgroundColor: Colors.main_orange_color,
                borderTopLeftRadius: 35,
                borderBottomRightRadius: 35,
                justifyContent: 'center',
                alignItems: 'center',
              },
              AppStyles.shadowContainer,
            ]}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: 'white',
                paddingVertical: 10,
              }}>
              $2,100
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'medium',
                color: 'white',
              }}>
              Inc Sales Tax
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 10,
              left: 130,
            }}>
            <Text style={{color: 'black'}}>
              5 days and 4 nights stay in Bali
            </Text>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 5,
              }}>
              <Text style={{color: 'black', flex: 1, fontWeight: 'bold'}}>
                14-20 June
              </Text>
              <Text style={{color: 'black', flex: 1, fontWeight: 'bold'}}>
                Bali & Beaches
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
