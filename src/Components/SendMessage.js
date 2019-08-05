import React from 'react'
import { View, Text, Linking, TouchableOpacity } from 'react-native'

export default SendMessage = ({texto, phone}) => {
    envie = () => {
        Linking.openURL(`whatsapp://send?text=${texto}&phone=${phone}`);
    }
    return (
        <View>
            <TouchableOpacity onPress={this.envie} >
                <Text>Envie whatsapp</Text>
            </TouchableOpacity>
        </View>
    )
}