import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'

class AnuncioLogin extends PureComponent {
    render() {
        return (
            <View style={{ height: 96, maxHeight: 100, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flex: 1, borderWidth:1,borderColor:'red', height: 96, maxHeight: 100, width: '90%', marginBottom: 6, borderRadius: 4 }}>
                    <Text>Anuncios</Text>
                </View>
            </View>
        )
    }
}
export default AnuncioLogin
