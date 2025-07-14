import { GestureResponderEvent, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
    onPress: (value:boolean) => void
    modalVisible?:boolean
    title?: string
    children?:React.ReactNode
}

const ModelButton = ({onPress,modalVisible,children}:Props) => {
  return (
    
        <View style={{flex:1,}}>
            <Pressable
            onPress={()=>onPress(false)}
            style={({pressed}) =>[{
                backgroundColor: pressed ? "#f0f0f0":"#333"
            },
                styles.container
            ]}>
               {({ pressed }) =>(
            <Text style={[styles.innerContainer,
                {color:pressed?"#333":"#f0f0f0"}]}
            >{children}</Text>
            )}
            </Pressable>
        </View>
  )
}

export default ModelButton

const styles = StyleSheet.create({
    container: {
        padding: 10,
        textAlign:'center',
        margin:20,
        borderWidth:1,
        borderColor:"#333",
        borderRadius:12
        },
    innerContainer:{
        textAlign:'center'
    }
})