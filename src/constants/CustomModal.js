import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';
import {Dimensions} from 'react-native';
import {fontFamily, myColor} from '../utility/AppStyles';

const modalHeight = Dimensions.get('screen').height;

const CustomModal = ({
  modalVisible,
  onRequestClose,
  title_1,
  title_2,
  onClose,
  overlayClose,
  onPress_2,
  messageText,
  iconComponent,
  btnColor,
  iconBgColor,
}) => {
  return (
    <Modal
      visible={modalVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={onRequestClose}>
      <TouchableWithoutFeedback onPress={overlayClose}>
        <View style={styles.modalOverlay}></View>
      </TouchableWithoutFeedback>
      <View style={styles.modalContainer}>
        <View
          style={[styles.modalIconContainer, {backgroundColor: iconBgColor}]}>
          {iconComponent}
        </View>
        <View style={styles.modalMessageView}>
          <Text style={styles.modalMessageText}>{messageText}</Text>
        </View>
        <View style={styles.modalBtnContainer}>
          <View style={styles.modalTextContainer}>
            <CustomButton
              onPress={onClose}
              borderColor={btnColor}
              borderRadius={8}
              borderWidth={1}
              title={title_1}
              width={120}
              height={60}
              fontWeight={'bold'}
            />
          </View>
          <View style={styles.modalTextContainer}>
            <CustomButton
              onPress={onPress_2}
              borderRadius={8}
              title={title_2}
              width={120}
              height={60}
              backgroundColor={btnColor}
              fontWeight={'bold'}
              color={myColor.white}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: modalHeight / 3,
    alignSelf: 'center',
    paddingBottom: 40,
    justifyContent: 'center',
    backgroundColor: myColor.white,
    height: 250,
    width: 330,
    borderRadius: 14,
  },
  modalOverlay: {
    zIndex: -1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalBtnContainer: {
    position: 'absolute',
    paddingHorizontal: 20,
    bottom: 10,
    right: 0,
    left: 0,
    flexDirection: 'row',
  },
  modalTextContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  modalMessageView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  modalMessageText: {
    fontSize: 26,
    textAlign: 'center',
    color: myColor.black,
    fontFamily: fontFamily.SatoshiBold,
  },
  modalIconContainer: {
    zIndex: 1,
    borderWidth: 6,
    borderColor: myColor.white,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: -50,
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});
