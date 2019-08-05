import React, { PureComponent } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import styles from './styles'
export default class AboutLocation extends PureComponent {
    state={
        cidade:'',
        endereço:'',
        bairro:'',
        latitude:'',
        lonitude:''
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', marginStart: 18, marginEnd: 18, marginBottom: 12 }}>
            <View style={{
              marginBottom: 12,
              width: '100%',
              alignItems: 'flex-start',
              marginTop: 6,
              justifyContent: 'flex-start'
            }}>
              <Text style={styles.introduction}>Sobre a localização</Text>
              <Text style={styles.informacoes}>Informações sobre a localização facilita a busca por uma moradia!</Text>
            </View>
            <TextInput style={styles.input}
              placeholder='Cidade da sua vaga'
            />
            <TextInput style={styles.input}
              placeholder='Endereço Rua'
            />
            <TextInput style={styles.input}
              placeholder='Bairro'
            />
          </View>
        )
    }
}
