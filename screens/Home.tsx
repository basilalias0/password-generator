import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import PropertyChecks from '../components/PropertyChecks'
import PrimaryButton from '../components/PrimaryButton'
import ResultModel from '../components/ResultModel'
import {useFormik} from 'formik'
import * as Yup from 'yup'

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
    const validationSchema = Yup.object({
        numberOfCharacter:Yup.string()
        .matches(/^[0-9]+$/, 'Age must be a number')
        .max(3,"maximum 3 digits")
        .min(1,"At least 1 digit")
        .required("Field is req")
        
    }) 
    const formik = useFormik({
        initialValues: {
            numberOfCharacter: '',
            },
        validationSchema,
        onSubmit:(values)=>{
             const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$';

    let allCharsAllowed =''

    let result = '';
    // Ensure at least one of each type if length allows
    
        if(passwordCharacteristics.lowerCase){
            allCharsAllowed += lowercaseChars;
        }
        if(passwordCharacteristics.upperCase){
            allCharsAllowed += uppercaseChars;
        }
        if(passwordCharacteristics.number){
            allCharsAllowed += numberChars
        }
        if(passwordCharacteristics.specialChar){
            allCharsAllowed += specialChars
        }
    

    // Fill the rest of the string with random characters from the combined pool
    for (let i = result.length; i < Number(values.numberOfCharacter); i++) {
        result += allCharsAllowed.charAt(Math.floor(Math.random() * allCharsAllowed.length));
    }

    // Shuffle the string to randomize the positions of required characters
    // (This is important so the first four characters aren't always a fixed type
    
    setModalVisible(true)
    setPasswordGenerated( result.split('').sort(() => 0.5 - Math.random()).join('')) 
        }
    })

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
            value={formik.values.numberOfCharacter}
            onBlur={formik.handleBlur('numberOfCharacter')}
            onChangeText={formik.handleChange('numberOfCharacter')}
            />
        </View>
        {formik.touched.numberOfCharacter && formik.errors.numberOfCharacter ?
        <Text style={styles.errorText}>{formik.errors.numberOfCharacter}</Text>:null}
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
            <PrimaryButton onPress={formik.handleSubmit}>Generate Button</PrimaryButton>
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
    errorText:{
        color:'red',
        fontSize:20,
    }

})