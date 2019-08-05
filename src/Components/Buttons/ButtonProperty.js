import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'
export default ButtonProperty = (props)=>{
    Button = () => {
        if (props.typeProperty === false) {
          return (
            <TouchableOpacity activeOpacity={8} style={styles.bottom} onPress={props.onPress}>
              <Text style={{ marginTop: 1, marginBottom: 1, color: "#7D44FF", fontWeight: '300' }}>{props.title} </Text>
            </TouchableOpacity>
          )
        } else {
          return (
            <TouchableOpacity activeOpacity={8} style={styles.bottom1} onPress={props.onPress}>
              <Text style={{ marginTop: 1, marginBottom: 1, color: 'white' }}>{props.title} </Text>
            </TouchableOpacity>
          )
        }
      }
        return (
            <View>
                {this.Button()}
            </View>
        )
}
const styles = StyleSheet.create({
  bottom: {
    margin: 5,
    alignItems: 'center',
    width: 180,
    padding: 8,
    borderWidth: 0.7,
    borderColor: "#7D44FF",
    borderRadius: 90
  },
  bottom1: {
    margin: 5,
    alignItems: 'center',
    width: 180,
    backgroundColor: "#7D44FF",
    padding: 8,
    borderWidth: 0.7,
    borderColor: "white",
    borderRadius: 90
  },
})

