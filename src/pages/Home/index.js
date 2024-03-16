import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AllIcons from '../../assets/icons';
import OfferCard from '../../components/OfferCard';
import AppImages from '../../assets/images';
import {Layout} from '../../modules';

const styles = StyleSheet.create({
  light_medium_fonts: {
    fontSize: 16,
    color: 'grey',
    fontWeight: '500',
    paddingBottom: 10,
  },
  extra_large_fonts: {
    fontSize: 28,
    color: 'black',
    fontWeight: '800',
  },
  rotated_tab: {
    transform: [{rotate: '270deg'}],
    marginTop: 30,
    marginBottom: 30,
    fontSize: 16,
    fontFamily: '500',
    color: 'black',
  },
});

const offersObject = [
  {
    id: 1,
    place_name: 'Taj Mahal',
    country: 'India',
    price: '$2,100',
    type: 'popular',
    imageSource: AppImages.taj_mahal,
  },
  {
    id: 2,
    place_name: 'Sikkim',
    country: 'India',
    price: '$800',
    type: 'popular',
    imageSource: AppImages.sikkim_india,
  },
  {
    id: 3,
    place_name: 'Paris',
    country: 'France',
    price: '$5000',
    type: 'popular',
    imageSource: AppImages.paris,
  },
  {
    id: 4,
    place_name: 'Faisal Mosque',
    country: 'Pakistan',
    price: '$200',
    type: 'popular',
    imageSource: AppImages.faisal_mosque_islamabad,
  },
  {
    id: 5,
    place_name: 'Lake Como',
    country: 'Italy',
    price: '$3000',
    type: 'popular',
    imageSource: AppImages.lake_como,
  },
  {
    id: 6,
    place_name: 'Bali',
    country: 'Indonesia',
    price: '$1000',
    type: 'popular',
    imageSource: AppImages.bali,
  },
  {
    id: 7,
    place_name: 'Bali',
    country: 'Indonesia',
    price: '$1000',
    type: 'Mountain',
    imageSource: AppImages.baliMountain,
  },
  {
    id: 8,
    place_name: 'Bali',
    country: 'Indonesia',
    price: '$1000',
    type: 'Cycling',
    imageSource: AppImages.baliCycling,
  },
];

const usersData = [
  {id: 1, name: 'james', imageSource: AppImages.profile_1},
  {id: 2, name: 'emma', imageSource: AppImages.profile_2},
  {id: 3, name: 'liam', imageSource: AppImages.profile_3},
  {id: 4, name: 'olivia', imageSource: AppImages.profile_4},
  {id: 5, name: 'noah', imageSource: AppImages.profile_5},
  {id: 6, name: 'ava', imageSource: AppImages.profile_6},
  {id: 7, name: 'william', imageSource: AppImages.profile_7},
];

const handleImageData = userData => {
  Alert.alert(userData.name);
};

const Home = () => {
  const [tab, setTab] = useState('popular');
  return (
    <Layout>
      <View style={{paddingTop: 30}}>
        <View
          style={{
            padding: 15,
            paddingTop: 20,
            paddingBottom: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={styles.light_medium_fonts}>Beach and Sea</Text>
            <Text style={styles.extra_large_fonts}>79 Places</Text>
          </View>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'black',
              shadowOffset: {width: 6, height: 10},
              shadowRadius: 6,
              shadowOpacity: 0.2,
              elevation: 15,
              borderRadius: 50,
            }}>
            <Image
              source={AllIcons.pinIcon}
              style={{
                height: 50,
                width: 50,
              }}
            />
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <View>
            <TouchableOpacity onPress={() => setTab('popular')}>
              <Text
                style={[
                  styles.rotated_tab,
                  tab == 'popular' ? {color: '#ff5f00'} : {},
                ]}>
                Popular
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTab('Mountain')}>
              <Text
                style={[
                  styles.rotated_tab,
                  tab == 'Mountain' ? {color: '#ff5f00'} : {},
                ]}>
                Mountain
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTab('Cycling')}>
              <Text
                style={[
                  styles.rotated_tab,
                  tab == 'Cycling' ? {color: '#ff5f00'} : {},
                ]}>
                Cycling
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={offersObject}
            renderItem={({item}) =>
              item.type === tab && <OfferCard item={item} />
            }
            keyExtractor={(_, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{padding: 15, paddingTop: 60}}>
          <Text style={styles.light_medium_fonts}>
            Connect with people Going
          </Text>
          <View
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              height: 90,
            }}>
            <FlatList
              data={usersData}
              renderItem={({item}) => (
                <View
                  style={{
                    height: 60,
                    width: 60,
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 10,
                    marginRight: 10,
                  }}>
                  <TouchableOpacity onPress={() => handleImageData(item)}>
                    <Image
                      source={item.imageSource}
                      style={{
                        position: 'absolute',
                        height: 60,
                        width: 60,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(_, index) => index.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default Home;
