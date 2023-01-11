import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {fontFamily, myColor} from '../utility/AppStyles';
import CustomButton from './CustomButton';
import CustomTextInput from './CustomTextInput';
import EyeIconClose from '../assets/images/svg/EyeIconClose';
import EyeIconOpen from '../assets/images/svg/EyeIconOpen';

const CustomLoginAccoutModal = ({
  onRequestClose,
  modalVisible,
  onClose,
  overlayClose,
  onChangeText,
}) => {
  const [passwordVisiblity, setPasswordVisiblity] = useState(false);
  return (
    <Modal
      onRequestClose={onRequestClose}
      transparent
      visible={modalVisible}
      animationType={'slide'}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={overlayClose}>
          <View style={styles.modalOverlay}></View>
        </TouchableWithoutFeedback>
        <View style={styles.modalBgContainer}>
          <TouchableOpacity onPress={onClose}>
            <View style={styles.centerLineTop} />
          </TouchableOpacity>
          <View style={styles.loginTitleView}>
            <Text style={styles.loginTitleText}>Log In to Your Account</Text>
          </View>
          <View style={styles.inputBoxView}>
            <View>
              <Text>Email</Text>
              <CustomTextInput
                placeholder={'Your Email'}
                onChangeText={value => onChangeText(value, 'email')}
              />
            </View>
            <View>
              <TouchableOpacity
                onPress={() => setPasswordVisiblity(!passwordVisiblity)}
                style={styles.eyeIconView}>
                {passwordVisiblity ? <EyeIconOpen /> : <EyeIconClose />}
              </TouchableOpacity>
              <Text>Password</Text>
              <CustomTextInput
                onChangeText={value => onChangeText(value, 'password')}
                secureTextEntry={!passwordVisiblity}
                placeholder={'Your Password'}
              />
            </View>
            <View style={styles.buttonView}>
              <CustomButton
                title={'log in'}
                height={56}
                width={'100%'}
                color={myColor.white}
                borderRadius={8}
                fontWeight={'bold'}
                backgroundColor={myColor.primaryColor}
              />
            </View>
            <TouchableOpacity>
              <Text style={styles.bottomMassageText}>
                Don't have a account?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.centerLineBottom} />
        </View>
      </View>
    </Modal>
  );
};

export default CustomLoginAccoutModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalBgContainer: {
    zIndex: 1,
    position: 'absolute',
    backgroundColor: myColor.white,
    bottom: 0,
    right: 0,
    left: 0,
    height: 500,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  centerLineBottom: {
    position: 'absolute',
    margin: 20,
    bottom: 0,
    backgroundColor: 'gray',
    alignSelf: 'center',
    width: 100,
    borderRadius: 5,
    height: 6,
  },
  centerLineTop: {
    margin: 10,
    borderRadius: 5,
    width: 60,
    height: 6,
    backgroundColor: 'lightgray',
    alignSelf: 'center',
  },
  inputBoxView: {
    margin: 20,
  },
  loginTitleView: {
    margin: 20,
  },
  loginTitleText: {
    fontSize: 24,
    color: myColor.black,
    fontFamily: fontFamily.SatoshiBold,
  },
  buttonView: {
    marginVertical: 20,
  },
  bottomMassageText: {
    fontSize: 16,
    color: myColor.black,
    alignSelf: 'center',
    fontStyle: '',
    textDecorationLine: 'underline',
    fontFamily: fontFamily.SatoshiBold,
  },
  eyeIconView: {
    zIndex: 1,
    position: 'absolute',
    bottom: 26,
    right: 20,
  },
});
