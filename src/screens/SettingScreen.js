import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import LogOutIcon from '../assets/images/svg/LogOutIcon';
import CustomInputBox from '../constants/CustomInputBox';
import TermOfUseIcon from '../assets/images/svg/TermOfUseIcon';
import PrivacyPolicyIcon from '../assets/images/svg/PrivacyPolicyIcon';
import HelpIcon from '../assets/images/svg/HelpIcon';
import AboutIcon from '../assets/images/svg/AboutIcon';
import RestorePurchaseIcon from '../assets/images/svg/RestorePurchaseIcon';
import {fontFamily, myColor} from '../utility/AppStyles';
import CustomButton from '../constants/CustomButton';
import CustomModal from '../constants/CustomModal';
import CustomLoginAccoutModal from '../constants/CustomLoginAccoutModal';

const SettingScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const getValue = (value, name) => {
    console.log('SettingScreen', value, name);
    if (name == 'email') {
      setUserInfo({
        ...userInfo,
        email: value,
      });
    } else if (name == 'password') {
      setUserInfo({
        ...userInfo,
        password: value,
      });
    }
  };
  console.log('SettingScreen', userInfo);
  return (
    <View style={styles.container}>
      {/* <View style={styles.glow} /> */}
      <View style={styles.logInContainer}>
        <View>
          <Text style={[styles.loginText, styles.textcolorWhite]}>
            Logged in as:
          </Text>
          <TouchableOpacity onPress={() => setLoginModalVisible(true)}>
            <Text style={styles.emailText}>userEmail@gmail.com</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.logOutIcon}>
          <LogOutIcon height={26} width={22} color={myColor.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>Version 1.0.0</Text>
      </View>

      <View style={styles.horizontalLine}></View>

      <View style={styles.btnContainer}>
        <CustomInputBox title={'Terms of Use'} iconComp={<TermOfUseIcon />} />
        <CustomInputBox
          title={'PriVacy Policy'}
          iconComp={<PrivacyPolicyIcon />}
        />
        <CustomInputBox title={'Help'} iconComp={<HelpIcon />} />
        <CustomInputBox title={'About'} iconComp={<AboutIcon />} />
        <CustomInputBox
          title={'Resotre Purchase'}
          iconComp={<RestorePurchaseIcon />}
        />
      </View>

      <CustomModal
        modalVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        overlayClose={() => setModalVisible(false)}
        onRequestClose={() => setModalVisible(false)}
        messageText={'Are you sure want to log out?'}
        title_1={'Cancel'}
        title_2={'Logout'}
        btnColor={myColor.primaryColor}
        iconBgColor={myColor.primaryColor}
        iconComponent={
          <LogOutIcon width={52} height={44} color={myColor.white} />
        }
      />
      <CustomLoginAccoutModal
        onChangeText={(value, name) => getValue(value, name)}
        modalVisible={loginModalVisible}
        overlayClose={() => setLoginModalVisible(false)}
        onRequestClose={() => setLoginModalVisible(false)}
      />
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColor.bgColor,
  },
  glow: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    left: 72,
    top: 668,
    height: 230,
    width: 230,
    backgroundColor: '#479DC2',
    borderColor: 'red',
    opacity: 0.3,
    borderRadius: 50,
    borderWidth: 10,
    elevation: 10,
    shadowRadius: 10,
  },
  loginText: {
    fontSize: 16,
    fontFamily: fontFamily.SatoshiRegular,
  },
  logInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
  },
  versionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    marginBottom: 10,
  },
  versionText: {
    color: 'gray',
  },
  emailText: {
    fontSize: 20,
    color: myColor.white,
    fontFamily: fontFamily.SatoshiBold,
  },
  logOutIcon: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: myColor.primaryColor,
    borderRadius: 10,
  },
  horizontalLine: {
    borderColor: '#45464A',
    borderBottomWidth: 2,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  textcolorWhite: {
    color: myColor.white,
  },
  btnContainer: {
    marginHorizontal: 20,
  },
});
