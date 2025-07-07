import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import PropertyChecks from '../components/PropertyChecks'

const Home = () => {
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Password Generator</Text>
        </View>
        <View style={styles.textInputContainer}>
            <Text style={styles.textInputLabel}>Number of Character:</Text>
            <TextInput 
            style={styles.textInputArea}
            keyboardType='numeric'/>
        </View>
        <View>
            <PropertyChecks title ={"Lower-case Alphabets"}/>
            <PropertyChecks title ={"Upper-case Alphabets"}/>
            <PropertyChecks title ={"Include Numbers"}/>
            <PropertyChecks title ={"Include special Characters"}/>
            
        </View>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical:25,
    },
    titleContainer:{
        alignItems: 'center',
        justifyContent: 'center',

    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color:"#E0E0E0"
    },
    textInputContainer:{
        marginVertical: 10,
        alignItems:'center',
        flexDirection:"row",
        justifyContent: 'space-between',
        
    },
    textInputLabel:{
        fontSize: 18,
        color:'#E0E0E0'
    },
    textInputArea:{
        width: 200,
        fontSize: 16,
        justifyContent:'center',
        height: 40,
        borderWidth:1,
        borderColor:'#E0E0E0',
        borderRadius:4,
        color:'#E0E0E0'
    },

})