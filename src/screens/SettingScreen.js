import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import LogOutIcon from '../assets/images/svg/LogOutIcon';
import CustomInputBox from '../constants/CustomInputBox';
import TermOfUseIcon from '../assets/images/svg/TermOfUseIcon';
import PrivacyPolicyIcon from '../assets/images/svg/PrivacyPolicyIcon';
import HelpIcon from '../assets/images/svg/HelpIcon';
import AboutIcon from '../assets/images/svg/AboutIcon';
import RestorePurchaseIcon from '../assets/images/svg/RestorePurchaseIcon';
import {myColor} from '../utility/AppStyles';
import {AppFontIndex, myFont} from '../assets/font/AppFontIndex';
import CustomButton from '../constants/CustomButton';
import CustomModal from '../constants/CustomModal';

const SettingScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      {/* <View style={styles.glow} /> */}
      <View style={styles.logInContainer}>
        <View>
          <Text style={[styles.loginText, styles.textcolorWhite]}>
            Logged in as:
          </Text>

          <Text style={[styles.emailText, styles.textcolorWhite]}>
            userEmail@gmail.com
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.logOutIcon}>
          <LogOutIcon height={13} width={11} color={'white'} />
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
        messageText={'Are you sure want to log out?'}
        title_1={'Cancel'}
        onPress_1={() => setModalVisible(false)}
        title_2={'Logout'}
        iconComponent={
          <LogOutIcon width={52} height={44} color={myColor.secondryColor} />
        }
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
    color: 'white',
  },
  btnContainer: {
    marginHorizontal: 20,
  },
});
