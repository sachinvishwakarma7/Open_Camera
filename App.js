import {View, Text, StyleSheet, ActivityIndicator, Linking} from 'react-native';
import Reactc, {useCallback, useEffect, useState} from 'react';
import IntroSlider from './src/components/IntroSlider';
import LinearGradient from 'react-native-linear-gradient';
import {
  Camera,
  useCameraDevices,
} from 'react-native-vision-camera';

const App = () => {
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
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
        />
      </View>
    );
  } else {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
