import { View, Text } from 'react-native'
import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';

function App() {
   
    useEffect(()=>{
      getDeviceToken();
    },[])

    const getDeviceToken = async () => {
      let token = await messaging().getToken();
       console.log(token , "token");
    }
// Register foreground notification handler
    useEffect(() => {
      const unsubscribe = messaging().onMessage(async remoteMessage => {
        Alert.alert('A new FCM message arrived in foreground mode!', JSON.stringify(remoteMessage));
      });
  
      return unsubscribe;
    }, []);
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App