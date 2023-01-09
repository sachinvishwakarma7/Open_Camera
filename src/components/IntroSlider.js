import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const IntroSlider = ({navigation}) => {
  const slides = [
    {
      key: 1,
      title: `How correctly take the \nphoto of the eye.`,
      text: 'Description.\nSay something cool',
      image: require('../assets/images/intro_Images/Video_Explanation_1.png'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Title 2',
      text: 'Description.\nSay something cool',
      image: require('../assets/images/intro_Images/Video_Explanation_2.png'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 3,
      title: 'Title 3',
      text: 'Description.\nSay something cool',
      image: require('../assets/images/intro_Images/Video_Explanation_3.png'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 4,
      title: 'Title 4',
      text: 'Description.\nSay something cool',
      image: require('../assets/images/intro_Images/Video_Explanation_4.png'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 5,
      title: 'Title 5',
      text: 'Description.\nSay something cool',
      image: require('../assets/images/intro_Images/Video_Explanation_5.png'),
      backgroundColor: '#59b2ab',
    },
  ];
  const _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.subTitle}>{item.text}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} resizeMethod="scale" source={item.image} />
        <View style={styles.screenGradiant}></View>
      </View>
    );
  };
  return (
    <AppIntroSlider
      showSkipButton={true}
      data={slides}
      onDone={() => navigation.navigate('Home')}
      renderItem={_renderItem}
    />
  );
};

export default IntroSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    zIndex: 3,
    position: 'absolute',
    bottom: 0,
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 200,
    marginLeft: 20,
  },
  subTitle: {
    zIndex: 2,
    position: 'absolute',
    bottom: 0,
    fontSize: 18,
    color: 'white',
    marginBottom: 150,
    marginLeft: 20,
  },
  screenGradiant: {
    flex: 1,
    zIndex: 2,
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
