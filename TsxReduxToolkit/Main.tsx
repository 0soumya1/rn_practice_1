import { View, Text } from 'react-native'
import React from 'react'
import Notes from './Notes'
import { Provider } from 'react-redux'
import { store } from './reduxwithts/store'

const Main = () => {
  return (
    <Provider store={store}>
     <Notes/>
    </Provider>
  )
}

export default Main