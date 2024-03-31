import { View, Text } from 'react-native'
import React, { FunctionComponent, ReactElement } from 'react'

interface myProps{
    name: string,
    email: string,
    age: number,
}

// const FunctionalComp = (props: myProps) => {
//   return (
//     <View>
//       {/* <Text>FunctionalComp</Text> */}
//       <Text>{props.name}</Text>
//     </View>
//   )
// }
const FunctionalComp:FunctionComponent <myProps> = ({name, email, age}: myProps): ReactElement => {
  return (
    <View>
      {/* <Text>FunctionalComp</Text> */}
      <Text>{age}</Text>
    </View>
  )
}

export default FunctionalComp