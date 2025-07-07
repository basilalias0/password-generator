import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
    title?: string
    children?:React.ReactNode
}

const PrimaryButton = ({title,children}:Props) => {
  return (
    
        <View style={{flex:1,}}>
            <Pressable
            style={({pressed}) =>[{
                backgroundColor: pressed ? '#333' : '#f0f0f0'
            },
                styles.container
            ]}>
               {({ pressed }) =>(
            <Text style={[styles.innerContainer,
                {color:pressed?"#f0f0f0":"#333"}]}
            >{children}</Text>
            )}
            </Pressable>
        </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    container: {
        padding: 10,
        textAlign:'center',
        margin:20,
        borderWidth:1,
        borderColor:'#f0f0f0',
        borderRadius:12
        },
    innerContainer:{
        textAlign:'center'
    }
})