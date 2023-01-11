import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const CustomTextInput = ({
  onFocus,
  secureTextEntry,
  onChangeText,
  placeholder,
}) => {
  return (
    <>
      <TextInput
        onFocus={onFocus}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    borderColor: 'lightgray',
    borderRadius: 6,
    height: 56,
    borderWidth: 2,
    padding: 10,
    marginVertical: 10,
  },
});
