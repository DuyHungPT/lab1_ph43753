import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Bai1 = ({title}) => {
  return (
    <View>
      <View style={styles.header}>
      <Text>{title}</Text>
      <Image source={require("../image/right-arrow.png")} style={styles.immage} />
      <Text style={styles.headerText}>Header</Text>
      <Image source={require("../image/image.png")} style={{width: 30,height: 30}} />
    </View>
    <View style={styles.header}>
      <Text>{title}</Text>
      <Image source={require("../image/right-arrow.png")} style={styles.immage1} />
      <Text style={styles.headerText1}>Header</Text>

    </View>
    <View style={styles.header}>
      <Text>{title}</Text>
      <Image source={require("../image/right-arrow.png")} style={styles.immage2} />


    </View>
    </View>
   
  )
}


export default Bai1

const styles = StyleSheet.create({
    header : {
        width: '100%',
        height: 60,
        backgroundColor: "pink",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row',
        borderWidth: 1,
    },
    headerText : {
        fontSize: 25,
        fontStyle: 'italic',
        marginRight: 130,
    },
    immage:{
        marginRight: 110,
    },
    immage1:{
        marginRight: 110,
    }
    ,
    headerText1 : {
        fontSize: 25,
        fontStyle: 'italic',
        marginRight: 160,
    },
    immage2:{
        marginRight:347,
    }
})