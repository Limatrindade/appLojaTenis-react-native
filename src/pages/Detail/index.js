import React from 'react';
import { Text, SafeAreaView, Image, ScrollView, TouchableOpacity, StyleSheet, View } from 'react-native';

import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';
import Footer from '../../component/Footer';

export default function Detail({ navigation }) {

 navigation.setOptions({
   title: 'Nike shox 10' 
 })

 return (
   <SafeAreaView>
     <ScrollView style={StyleSheet.container}>
       <Image
         source={require('../../assets/detail.png')}
         style={StyleSheet.image}
         resizeMode='cover'
       /> 
     

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

       <View style={{ flexDirection: "row", width: "100%" }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <SizeButton bgColor="#17181a" color="#FFF" >39</SizeButton>
          <SizeButton>40</SizeButton>
          <SizeButton>41</SizeButton>
          <SizeButton>42</SizeButton>
        </ScrollView>
       </View>

       <View style={styles.textContent}>
        <Text style={styles.textTitle}>
          Nike shox 10
        </Text>
        <Text style={styles.textContent}>
          O tênis Nike Masculino Shox 10 traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável. Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético.
        </Text>
        <Text style={styles.textList}>
          - Categoria: Amortecimento
        </Text>
        <Text style={styles.textList}>
          - Material: Mesh
        </Text>
       </View>

       <Button/>

       <View style={styles.line} />

       <Footer/>

     </View>
    </ScrollView>
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
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: "2%",
    paddingHorizontal: "2%"
  },
  textTitle: {
    fontSize: 22,
    marginVertical: "2%"
  },
  textList: {
    fontSize: 16, 
    lineHeight: 25
  },
  line: {
    borderWidth: 1,
    borderBottomColor: "#DDD",
    marginVertical: "2%"
  }
})