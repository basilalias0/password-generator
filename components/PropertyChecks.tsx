import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
    title: string
    children?:React.ReactNode
}
const PropertyChecks = ({title}:Props) => {
  return (
    <View style={styles.container}>
      <View >
        <Text>{title} </Text>
      </View>
      <View>
        <Text>Check Box</Text>
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
})