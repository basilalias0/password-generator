import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './screens/Home'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    paddingTop:25,
    padding:10
    },
})
