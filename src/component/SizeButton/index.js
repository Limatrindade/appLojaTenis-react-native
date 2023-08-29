import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SizeButton(props) {
 return (
   <View style={[styles.container, { backgroundColor: props.bgColor || "#FFF" }]}>
     <Text style={[styles.texto, { color: props.color || "#ddd" }]}>
        {props.children}
     </Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 50,
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 4,
        borderColor: "#e6e6e6",
        borderWidth: 3,
        marginHorizontal: 10
    },
    texto: {
        textAlign: "center",
        color: "#FFF",
        fontSize: 18,
        textAlignVertical: "center"
    }
})