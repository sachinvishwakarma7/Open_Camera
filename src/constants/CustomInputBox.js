import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {fontFamily, myColor} from '../utility/AppStyles';
// import {fontFamily} from '../assets/font/AppFontIndex';

const CustomInputBox = ({iconComp, title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {iconComp}
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomInputBox;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 54,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#45464A',
    width: '100%',
    backgroundColor: '#2C2E32',
    flexDirection: 'row',
    paddingLeft: 20,
    marginVertical: 10,
  },
  titleText: {
    fontFamily: fontFamily.SatoshiBold,
    color: myColor.white,
    paddingLeft: 10,
  },
});
