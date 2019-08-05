import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import styles from '../PropertyRegistration/styles'
export default class DescriptionProperty extends Component {
    state = {
        descriptionVaga:''
    }
    render() {
        return (
            <View style={{ height: 200, width: '100%'}}>
                <Text style={styles.introduction}>Descrição</Text>
                <Text style={styles.informacoes}>Descreva informações adicionais para sua vaga</Text>
                <View style={styles.descriptionInput}>
                    <TextInput
                        maxLength={180}
                        style={{
                            marginStart: 8,
                            height: 100,
                            marginRight: 5
                        }}
                        multiline
                        value={this.state.descriptionVaga}
                        onChangeText={(text) => { this.setState({ descriptionVaga: text }) }}
                    />
                </View>
                <View style={{ width: '100%', alingItems: 'flex-end' }}>
                    <Text style={{ alignSelf: 'flex-end', marginRight: 14 }}>{this.state.descriptionVaga.length} /180</Text>
                </View>
            </View>
        )
    }
}

