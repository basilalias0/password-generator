import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import PropertyChecks from '../components/PropertyChecks'
import PrimaryButton from '../components/PrimaryButton'
import ResultModel from '../components/ResultModel'

const Home = () => {
    const [passwordCharacteristics,setPasswordCharacteristics] = useState({
        numberOfCharacter:0,
        lowerCase:false,
        upperCase:false,
        number:false,
        specialChar:false
    })
    const [passwordGenerated,setPasswordGenerated] = useState("")
    const [modalVisible, setModalVisible] = useState(false);

    function generateRandomString() {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$'; // You can customize this set

    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;

    let result = '';
    // Ensure at least one of each type if length allows
    if (passwordCharacteristics.numberOfCharacter >= 4) {
        if(passwordCharacteristics.lowerCase){
            result += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
        }
        if(passwordCharacteristics.upperCase){
            result += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
        }
        if(passwordCharacteristics.number){
            result += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
        }
        if(passwordCharacteristics.specialChar){
            result += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
        }
    }

    // Fill the rest of the string with random characters from the combined pool
    for (let i = result.length; i < passwordCharacteristics.numberOfCharacter; i++) {
        result += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    // Shuffle the string to randomize the positions of required characters
    // (This is important so the first four characters aren't always a fixed type)
    setModalVisible(true)
    setPasswordGenerated( result.split('').sort(() => 0.5 - Math.random()).join(''))
}
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Password Generator</Text>
        </View>
        <View style={styles.textInputContainer}>
            <Text style={styles.textInputLabel}>Number of Character:</Text>
            <TextInput 
            style={styles.textInputArea}
            keyboardType='numeric'
            value={passwordCharacteristics.numberOfCharacter.toString()}
            onChangeText={(newValue)=>{
                        setPasswordCharacteristics(prevState => {
                            const value = Number(newValue)
                            return (
                                {
                            ...prevState, 
                            numberOfCharacter: typeof value==="number"? value:0
                        })})
            }}          
            />
        </View>
        <View>
            <PropertyChecks setPassChar={setPasswordCharacteristics} 
            passChar={passwordCharacteristics} title ={"Lower-case Alphabets"}/>
            <PropertyChecks setPassChar={setPasswordCharacteristics} 
            passChar={passwordCharacteristics} title ={"Upper-case Alphabets"}/>
            <PropertyChecks setPassChar={setPasswordCharacteristics} 
            passChar={passwordCharacteristics} title ={"Include Numbers"}/>
            <PropertyChecks setPassChar={setPasswordCharacteristics}
            passChar={passwordCharacteristics} title ={"Include Special Characters"}/>  
        </View>
        <View style={{flexDirection:"row"}}>
            <PrimaryButton onPress={generateRandomString}>Generate Button</PrimaryButton>
            <PrimaryButton onPress={()=>setPasswordCharacteristics({
                numberOfCharacter:0,
                lowerCase:false,
                upperCase:false,
                number:false,
                specialChar:false
            })} >All Reset</PrimaryButton>
        </View>
        {modalVisible && <ResultModel password={passwordGenerated} modalVisible={modalVisible} setModalVisible={setModalVisible}/>}
        
      
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