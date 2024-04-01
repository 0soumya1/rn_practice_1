import { View, Text } from 'react-native'
import React from 'react'
import TypeScriptComp from './TsxComponent/TypeScriptComp'
import AppNavigator from './Navigation/AppNavigator'
import Products from './TsxFlatlist/Products'
import Main from './TsxReduxToolkit/Main'

const App = () => {
  return (
    <View>
      {/* <Text>App</Text> */}
      {/* <TypeScriptComp/> */}
      {/* <AppNavigator/> */}
      {/* <Products/> */}
      <Main/>
    </View>
  )
}

export default App