import React from 'react';
import { View, StyleSheet, SafeAreaView, Image } from 'react-native';

import BannerFoto from '../../assets/banner.png';

export default function Home() {
 return (
   <SafeAreaView style={styles.container}>
     <View style={styles.header}>
       <Image
         source={BannerFoto}
         style={styles.image}
       />

       <View>
          
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
  header: {
    marginBottom: 8
  },
  image: {
    width: "#100%"
  }
});