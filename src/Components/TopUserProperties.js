import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Thumbnail } from 'native-base';

var date = new Date()
var options = new Date().toLocaleDateString()
export default TopUserProperties = (props) => {
    prop = () => {
        /*Tive que fazer isso pra tentar resolver o erro que estava ocorrendo quando
        o usuario limpava o cache e smp que saia do app o app quebrava por causa do split
        em nome de usuario que não era encontrado
        */
        try {
            return (
                <Text style={{ fontWeight: '500', fontSize: 16 }}>{props.nome.split(' ').slice(0, 2).join(' ').substr(-50, 25)} </Text>
            )

        } catch (error) {
            return (
                <Text style={{ fontWeight: '500', fontSize: 16 }}>carregando...</Text>
            )
        }

    }
    return (
        <View style={{
            width: '100%',
            borderColor: "#7D44FF",
            marginTop: 10,
            marginBottom: 10,
            borderBottomWidth: 0.4,
            
        }}>
            <View style={{
                marginStart: 18,
                marginBottom: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start'
            }}>
                <Thumbnail resizeMode='cover'
                    borderColor="#f2f2f2" large source={props.url}
                    style={styles.uri} />
                <View>
                    <Text style={{ fontWeight: '100', fontSize: 12, marginBottom: -5 }}>Proprietário(a)</Text>
                    {this.prop()}
                </View>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    uri: {
        height: 40, width: 40,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        elevation: 0.2,
        shadowColor: "#7D44FF",
        marginEnd: 10,
        shadowOpacity: 1,
        borderRadius: 190, borderWidth: 0.2, borderColor: '#7D44FF'
    },
})