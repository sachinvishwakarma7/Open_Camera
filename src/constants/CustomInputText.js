import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';

const CustomInputText = ({placeholder, onChangeText, value}) => {
  return (
    <View>
      <TextInput
        style={{
          height: 50,
          borderColor: 'red',
          borderWidth: 3,
          margin: 10,
          fontSize: 35,
        }}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default CustomInputText;
