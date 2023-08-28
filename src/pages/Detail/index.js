import React from 'react';
import { Text, SafeAreaView, Image, ScrollView, TouchableOpacity, StyleSheet, View } from 'react-native';

import Dot from '../../component/Dot';

export default function Detail() {

//  navigation.setOptions({
//    headerTitle: 'Nike shox 10' 
//  })

 return (
   <SafeAreaView>
     <ScrollView style={StyleSheet.container}>
       <Image
         source={require('../../assets/detail.png')}
         style={StyleSheet.image}
         resizeMode='cover'
       /> 
     </ScrollView>

     <View>
       <View>
         <Text style={[styles.title, { fontSize: 24 }]}>R$140,90</Text>
       </View>
       <View opacity={0.4}>
         <Text style={[styles.title, { fontSize: 30 }]}>Nike shox 10</Text>
       </View>

       <View style={styles.dotContainer}>
         <Dot color="#2379f4" />
         <Dot color="#fb6e53" />
         <Dot color="#ddd" />
         <Dot color="#000" />
       </View>

     </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF"
  },
  image: {
    width: "100%"
  },
  title: {
    fontWeight: "bold",
    paddingHorizontal: "2%"
  },
  dotContainer: {
    flexDirection: "row",
    marginVertical: "7%",
    marginHorizontal: "3%"
  }
})