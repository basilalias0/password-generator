import { StyleSheet, Text, View } from 'react-native'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Checkbox from '@react-native-community/checkbox';

interface PasswordCharacters {
  numberOfCharacter: number;
  lowerCase: boolean;
  upperCase: boolean;
  number: boolean;
  specialChar: boolean;
}

interface Props {
    title: string
    passChar:PasswordCharacters,
    setPassChar: Dispatch<SetStateAction<PasswordCharacters>>
    children?:React.ReactNode
}
const PropertyChecks = ({title,setPassChar,passChar}:Props) => {
  const [toggleCheckBox,setToggleCheckBox] =  useState(
    title ==="Lower-case Alphabets" ? passChar.lowerCase : 
    title ==="Upper-case Alphabets" ? passChar.upperCase :
    title ==="Include Numbers" ? passChar.number :
    title ==="Include Special Characters" ? passChar.specialChar : false

  )
  
  console.log(passChar)

  useEffect(()=>{
    console.log(passChar)
    if(title ==="Lower-case Alphabets"){
    setPassChar({
      ...passChar,
      lowerCase:toggleCheckBox
    })
  }else if(title ==="Upper-case Alphabets"){
    setPassChar({
      ...passChar,
      upperCase:toggleCheckBox
    })
  }else if(title ==="Include Numbers"){
    setPassChar({
      ...passChar,
      number:toggleCheckBox
    })
  }else if(title ==="Include Special Characters"){
    setPassChar({
      ...passChar,
      specialChar:toggleCheckBox
    })
  }
  },[toggleCheckBox])

  

  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.title}>{title} </Text>
      </View>
      <View>
        <Checkbox
        value={toggleCheckBox}
        onValueChange={()=>setToggleCheckBox(!toggleCheckBox)}
        tintColors={{ true: '#BBBBBB', false: '#BBBBBB' }} 
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