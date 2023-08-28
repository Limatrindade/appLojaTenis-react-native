import React from 'react';
import { View, StyleSheet, SafeAreaView, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import BannerFoto from '../../assets/banner.png';

import Shoes from '../../component/Shoes';

export default function Home() {

 const navigation = useNavigation();

 return (
   <SafeAreaView style={styles.container}>
     <View style={styles.header}>
       <Image
         source={BannerFoto}
         style={styles.image}
       />

       <View style={styles.containerTexto}>
          <Text style={styles.texto}>TÊNIS</Text>
          <Text style={[styles.texto, { color: "#CECECF" }]}> - </Text>
          <Text style={[styles.texto, { color: "#CECECF" }]}>MASCULINO</Text>
          <TouchableOpacity style={styles.botaoTouchable}>
            <MaterialIcons
              name='filter-list'
              size={24}
              color="#000"
            />
          </TouchableOpacity>
       </View>

     </View>

     <View style={styles.line} />

     <ScrollView>
        <Text style={styles.texto}>LANÇAMENTOS</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/1.png')} cost='R$140,90' onClick={() => navigation.navigate('Detail')}>
            Nike shox 10
        </Shoes>
          <Shoes img={require('../../assets/2.png')} cost='R$280,90' onClick={() => alert('Clicou')}>
            Nike Downshifter 10
          </Shoes>   
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/3.png')} cost='R$270,90' onClick={() => alert('Clicou')}>
            Nike Squidward
        </Shoes>
          <Shoes img={require('../../assets/4.png')} cost='R$590,90' onClick={() => alert('Clicou')}>
            Nike Epic React Flyknit
          </Shoes>   
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/5.png')} cost='R$999,90' onClick={() => alert('Clicou')}>
            Nike NDMD
        </Shoes>
          <Shoes img={require('../../assets/6.png')} cost='R$340,90' onClick={() => alert('Clicou')}>
            Nike FlyForCloud
          </Shoes>   
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
  header: {
    marginBottom: 8
  },
  image: {
    width: "#100%"
  },
  containerTexto: {
    flexDirection: "row",
    marginVertical: "5%",
    marginHorizontal: "5%"
  },
  texto: {
    fontSize: 26,
    marginHorizontal: "1%"
  },
  botaoTouchable: {
    position: "absolute",
    right: 0,
    alignSelf: "center"
  },
  line: {
    borderBottomColor: "D8D8D8",
    borderBottomWidth: 2
  }
});