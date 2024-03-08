import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Bai2 = ({title, imageSource, description, title1, description1, title2, description2, title3, description3, title4, onPressButton }) => {
  return (    
    <View>
      <Text>{title}</Text>
      <Text style={{ fontWeight: "bold" }}>{description}</Text>
      <Text style={{ marginTop: 7 }}>{title1}</Text>
      <Text style={{ fontWeight: "bold" }}>{description1}</Text>
      <Text style={{ marginTop: 7 }}>{title2}</Text>
      <Text style={{ fontWeight: "bold" }}>{description2}</Text>
      <Text style={{ marginTop: 7 }}>{title3}</Text>
      <Text style={{ fontWeight: "bold" }}>{description3}</Text>
      {title4 && <Text style={{ marginTop: 7 }}>{title4}</Text>}
      {imageSource && <Image source={imageSource} style={{ width: 350, height: 200, borderRadius: 10, marginTop: 10 }} />}
      {onPressButton && 
        <TouchableOpacity onPress={onPressButton} style={styles.button}>
          <Text style={styles.buttonText}>Chi Tiet</Text>
        </TouchableOpacity>
      }
    </View>
  )
}

const App = () => {
    return(
      <View>
        <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10,marginTop: 10}}>Lich Trinh</Text>
       <View style={styles.container}>
        
       <Bai2 
       title="Dia Diem" 
       description="Ho Tram Vung Tau"
       title1="Thoi Gian" 
       description1="09.00 - 12.00 AM 12/12/2024"
       title2="Phuong Tien Di Chuyen" 
       description2="Xe Bus"
       title3="Thoi Gian" 
       description3="21.00-22.00"
       title4="Hinh Anh"
       imageSource={{uri: 'https://cdn.tgdd.vn/Files/2022/02/22/1416895/cam-nang-du-lich-ho-tram-vung-tau-day-du-va-chi-tiet-2022-202202230032087404.jpg'}}
       onPressButton={null}
       />
      </View>
      <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10,marginTop: 5}}>Lich Trinh</Text>
      <View style={styles.container}>
        
        <Bai2 
        title="Dia Diem" 
        description="Ho Tram Vung Tau"
        title1="Thoi Gian" 
        description1="09.00 - 12.00 AM 12/12/2024"
        title2="Phuong Tien Di Chuyen" 
        description2="Xe Bus"
        title3="Thoi Gian" 
        description3="21.00-22.00"
        title4=""
        imageSource={null}
        onPressButton={() => {
          alert('Button pressed in Section 2');
        }}
        />
       </View>
      </View>
    )
}
export default App

const styles = StyleSheet.create({
    container : {
      padding: 20,
              backgroundColor:'white',
              borderRadius: 10,
              margin :10,
              shadowColor:'blue',
              shadowOffset:{width:0.9,height: 3},
              elevation:7,
              borderRadius: 20,
    },
    title:{
      fontSize: 30
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
})
