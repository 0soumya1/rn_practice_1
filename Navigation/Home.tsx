import { View, Text, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamsList } from './AppNavigator'

interface HomeScreenProps{
    navigation:StackNavigationProp<RootStackParamsList, "Home">
}

interface User{
    name: string,
    email: string,
    age: number,
}
interface Items{
    title: string,
    price: number,
    id: string,
}

const Home = ({navigation}: HomeScreenProps) => {
    const [counter, setCounter] = useState<number>(0)
    const [name, setName] = useState<string>('')
    const [isLoaded, setIsLoaded] = useState<boolean>(true)
    const [user, setUser] = useState<User>({name:"" , age: 0, email: ""})  //object
    const [items, setItems] = useState<Items[]>([])  // array
    const [details, setDetails] = useState<null>(null)  // null

    // const ref = useRef<TextInput>(null)
    
  return (
    <View>

        {/* <TextInput ref={ref}/> */}

      <Text style={{padding: 10, borderWidth: 1, color:"black"}}
      onPress={()=>{
        navigation.navigate("Settings", {
            email: "som@gmail.com",
            name: "Soumya", 
        })
    }}>
        Go to Settings
      </Text>
    </View>
  )
}

export default Home