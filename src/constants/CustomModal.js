import {View, Text, Modal, StyleSheet} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';
import {myColor} from '../utility/AppStyles';
import {Dimensions} from 'react-native';

const modalHeight = Dimensions.get('screen').height;

const CustomModal = ({
  modalVisible,
  title_1,
  title_2,
  onPress_1,
  onPress_2,
  messageText,
  iconComponent,
}) => {
  return (
    <Modal visible={modalVisible} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalIconContainer}>{iconComponent}</View>
        <View style={styles.modalMessageView}>
          <Text style={styles.modalMessageText}>{messageText}</Text>
        </View>
        <View style={styles.modalBtnContainer}>
          <View style={styles.modalTextContainer}>
            <CustomButton
              onPress={onPress_1}
              borderColor={myColor.secondryColor}
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
              backgroundColor={myColor.secondryColor}
              fontWeight={'bold'}
              color={'white'}
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
    backgroundColor: 'white',
    height: 250,
    width: 300,
    borderRadius: 14,
  },
  modalBtnContainer: {
    position: 'absolute',
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
  },
  modalMessageText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  modalIconContainer: {
    zIndex: 1,
    borderWidth: 6,
    borderColor: 'white',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: -50,
    backgroundColor: '#F6E3E8',
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});
