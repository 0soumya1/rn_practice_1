import { Text, View } from 'react-native'    //rnce
import React, { Component } from 'react'

//  Interfaces are a feature of TypeScript that allows us to define the structure or shape of an object and specify the properties and methods that an object has or should have. Their primary function is type checking and aiding developers in catching type-related errors during development.

interface myProps{
    name: string,
    email: string,
    age: number,
}

interface myState{
    counter: number
}

export class ClassComp extends Component <myProps, myState> {
  render() {
    return (
      <View>
         {/* <Text>ClassComp</Text> */}
        <Text>{this.props.name +" "+ this.props.email}</Text>
      </View>
    )
  }
}

export default ClassComp

// props state