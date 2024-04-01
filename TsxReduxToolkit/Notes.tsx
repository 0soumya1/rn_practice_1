import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from './reduxwithts/hooks'
import { Note, addNote, noteSelector } from './reduxwithts/notesSlice'

const Notes = () => {
  const [title, setTitle] = useState<string>('')
  const [desc, setDesc] = useState<string>('')
  const dispatch = useDispatch()
  const notes = useAppSelector(noteSelector)
  console.log(notes);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <TextInput
        placeholder='enter note title'
        style={{
          width: "90%",
          height: 50,
          borderWidth: 1,
          marginTop: 20,
          paddingLeft: 20,
          // margin:15,
          alignSelf: "center",
        }}
        value={title}
        onChangeText={(txt) => setTitle(txt)}
      />
      <TextInput
        placeholder='enter note description'
        style={{
          width: "90%",
          height: 50,
          borderWidth: 1,
          marginTop: 20,
          paddingLeft: 20,
          // margin:15,
          alignSelf: "center",
        }}
        value={desc}
        onChangeText={(txt) => setDesc(txt)}
      />
      <TouchableOpacity
        style={{
          width: "90%",
          height: 50,
          borderWidth: 1,
          marginTop: 20,
          // paddingLeft: 20,
          // margin:15,
          alignSelf: "center",
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center"
        }}
        onPress={() => {
          dispatch(addNote({ title, desc }))
        }}
      >
        <Text style={{ color: "white" }}>Add Note</Text>
      </TouchableOpacity>
      <FlatList data={notes} renderItem={({ item }: { item: Note }) => {
        return (
          <View
            style={{
              width: "90%",
              height: 50,
              borderWidth: 1,
              marginTop: 20,
              paddingLeft: 20,
              // margin:15,
              alignSelf: "center",
            }}>
            <Text>{item.title}</Text>
            <Text>{item.desc}</Text>
          </View>
        )
      }} />
    </View>
  )
}

export default Notes