import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Home'
import Settings from './Settings'

export type RootStackParamsList={
    Home: undefined,
    Settings: {
      name: string,
      email: string,
    },
}

const Stack = createStackNavigator<RootStackParamsList>()
// const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
  //  <View>
  //   <Text>gfhhjhjkhhkj</Text>
  //  </View>
   <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="Home" component={Home} options={{headerShown: true}} />
      <Stack.Screen name="Settings" component={Settings}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigator
