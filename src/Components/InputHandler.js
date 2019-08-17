import React from 'react'

import { View, Text,StyleSheet,TextInput } from 'react-native'
export default InputHandler = (props) => {
    return(
        <View>
            <View ></View>
            <TextInput style={styles.textInput}></TextInput>
        </View>
    )
}
const styles = StyleSheet.create({
    textInput: {
        width: '88%',
        fontSize: 16,
        fontWeight: '100',
        marginTop: 20,
        paddingStart: 10,
        borderRadius: 50,
        borderWidth: 0.6,
        borderColor: "#7D44FF",
        color: '#4A3259'
      },
})