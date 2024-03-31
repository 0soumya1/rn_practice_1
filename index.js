/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import messaging from '@react-native-firebase/messaging';

// Register background notification handler
// messaging().setBackgroundMessageHandler(async remoteMessage => {
//     console.log('Message handled in the background!', remoteMessage);
//   });
//   // Register kill state notification handler
// messaging().getInitialNotification(async remoteMessage => {
//     console.log('Message handled in the kill state mode!', remoteMessage);
//   });
  
AppRegistry.registerComponent(appName, () => App);
