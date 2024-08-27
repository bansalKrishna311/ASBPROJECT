import { ScrollView, StyleSheet, Text, View, SafeAreaView} from 'react-native'
import React from 'react'
import AsbProjectOne from './components/AsbProjectOne'
import AsbProjectTwo from './components/AsbProjectTwo'

export default function App() {
  return (
   <SafeAreaView>
    {/* <AsbProjectOne/> */}
    <AsbProjectTwo/>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({})