import {Platform, StyleSheet} from 'react-native';
import Colors from '../colors';

const AppStyles = StyleSheet.create({
  normal_black_text: {color: 'black'},
  medium_black_text: {fontWeight: 'medium', color: 'black'},
  large_black_bold: {fontSize: 36, fontWeight: 'bold', color: 'black'},
  shadowContainer: {
    ...Platform.select({
      ios: {
        shadowColor: Colors.main_orange_color,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});

export default AppStyles;
