import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Shoes from '../Shoes'

export default function Footer() {
 return (
   <View>
    <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR</Text>
    <View style={{ flexDirection: "row" }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ marginHorizontal: 10 }}>
                <Shoes img={require('../../assets/1.png')} cost='R$140,90'>
                    Nike shox 10
                </Shoes>
            </View>
            <View style={{ marginHorizontal: 10 }}>
                <Shoes img={require('../../assets/2.png')} cost='R280,90'>
                    Nike Downshifter 10
                </Shoes>
            </View>
            <View style={{ marginHorizontal: 10 }}>
                <Shoes img={require('../../assets/3.png')} cost='R$270,90'>
                    Nike Squidward
                </Shoes>
            </View>
            <View style={{ marginHorizontal: 10 }}>
                <Shoes img={require('../../assets/4.png')} cost='590,90'>
                    Nike Epic React Flyknit
                </Shoes>
            </View>
            <View style={{ marginHorizontal: 10 }}>
                <Shoes img={require('../../assets/5.png')} cost='R$999,90'>
                    Nike NDMD
                </Shoes>
            </View>
            <View style={{ marginHorizontal: 10 }}>
                <Shoes img={require('../../assets/6.png')} cost='R$340,90'>
                    Nike FlyForCloud
                </Shoes>
            </View>
        </ScrollView>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: "2%",
        paddingHorizontal: "2%"
    }
})