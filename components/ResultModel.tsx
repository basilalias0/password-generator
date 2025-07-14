import { Alert, Dimensions, Modal, Share, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from './PrimaryButton'
import ModelButton from './ModelButton'

interface Props{
    password:string,
    modalVisible:boolean
    setModalVisible:(value:boolean)=> void
}

const ResultModel = ({password,setModalVisible,modalVisible}:Props) => {
    const screeHeight = Dimensions.get('screen').height
    const screeWidth= Dimensions.get('screen').width
    

    const handleShare = async ()=>{
        Alert.alert(password)

    }
  return (
        <Modal
        animationType='slide'  // Slides up from the bottom
        transparent={true}     // Allows background content to be seen (dimmed)
        visible={modalVisible} // Controls if modal is visible
      >
            <View style={[styles.modal,
                {height:screeHeight*0.5,marginTop:screeHeight*0.5}]}>
                <Text style={styles.modelTitle}>Your Password is: </Text>
                <View style={[styles.passwordContainer,{width:screeWidth*.66}]}>
                    <Text style={styles.passwordText}>{password}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <ModelButton onPress={()=>handleShare}>Save and Share</ModelButton>
                <ModelButton modalVisible={modalVisible} onPress={()=>setModalVisible(false)}>Close</ModelButton>
                </View>
                
            </View>
        </Modal>
      
  )
}

export default ResultModel

const styles = StyleSheet.create({
    modal:{
       backgroundColor: 'white',
       borderWidth:1,
       alignItems:'center',
       justifyContent:'space-around',
       borderColor:"white",
       borderRadius:8
    },
    modelTitle:{
        fontSize:20,
        color:"black",
    },
    passwordContainer:{
        width:300,
        backgroundColor: '#1C1C1E',
    },
    passwordText:{
        fontSize:20,
        color:"white",
        padding:10,
        textAlign:'center'
    }
})