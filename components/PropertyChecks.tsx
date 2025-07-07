import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from '@react-native-community/checkbox';

interface Props {
    title: string
    children?:React.ReactNode
}
const PropertyChecks = ({title}:Props) => {
  const [toggleCheckBox,setToggleCheckBox] =  useState(false)
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.title}>{title} </Text>
      </View>
      <View>
        <Checkbox
        value={toggleCheckBox}
        onValueChange={()=>setToggleCheckBox(!toggleCheckBox)}
        onCheckColor="red" 
        onFillColor="red" 
        tintColor="red"
        />
      </View>
    </View>
  )
}

export default PropertyChecks

const styles = StyleSheet.create({
    container: {
        height:50,
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:10,
        padding:5,
        marginHorizontal:10,
        borderColor:"white",
        borderWidth:1,
        },
    title:{
      fontSize:14,
      color:"white",
    }
})