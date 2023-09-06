import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const MenuStyles = StyleSheet.create({
  containerMaster: {
    flex: 1,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    width: screenWidth * 1,
    height: screenHeight * 1,
  },
  logo: {
    width: screenWidth * 1,
    height: screenHeight * 0.5,
  },
});

export { MenuStyles };