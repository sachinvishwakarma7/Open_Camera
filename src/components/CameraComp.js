import {View, Text, StyleSheet, ActivityIndicator, Linking} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const CameraComp = () => {
  const [permissions, setPermissions] = useState(false);
  const devices = useCameraDevices();
  const device = devices.back;
  console.log('devices', devices);

  const getCameraParmission = useCallback(async () => {
    const requestParmission = await Camera.requestCameraPermission();
    console.log('parmission', requestParmission);
    if (requestParmission == 'denied') {
      await Linking.openSettings();
    }
  }, []);

  useEffect(() => {
    Camera.getCameraPermissionStatus().then(() => {
      setPermissions(true);
    });
    getCameraParmission();
  }, []);

  if (device && device?.id && permissions) {
    return (
      <View style={styles.container}>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
};

export default CameraComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
