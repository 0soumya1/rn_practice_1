import { View, Text } from 'react-native'    //rnfe
import React from 'react'
import FunctionalComp from './FunctionalComp'
import ClassComp from './ClassComp'

const TypeScriptComp = () => {
  return (
    <View>
      <Text>TypeScriptComp</Text>
      <ClassComp name={"Soumya"} email={"som@gmail.com"} age={20}/>
      <FunctionalComp name={"Soumya"} email={"som@gmail.com"} age={20}/>
    </View>
  )
}

export default TypeScriptComp