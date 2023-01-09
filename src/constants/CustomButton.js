import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const CustomButton = ({
  onPress,
  fontWeight,
  title,
  backgroundColor,
  color,
  borderWidth,
  borderRadius,
  borderColor,
  fontSize,
  width,
  height,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      backgroundColor && {backgroundColor},
      {borderColor},
      {borderWidth},
      {fontSize},
      {borderRadius},
      {width},
      {height},
      styles.appButtonContainer,
    ]}>
    <Text
      style={[
        color && {color},
        fontSize && {fontSize},
        fontWeight && {fontWeight},
        styles.appButtonText,
      ]}>
      {title}
    </Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  appButtonContainer: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  appButtonText: {
    alignItems: 'center',
    alignSelf: 'center',
    textTransform: 'uppercase',
    justifyContent: 'center',
  },
});
export default CustomButton;
