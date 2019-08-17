import React, { Component } from 'react'
import { Text, Button, StyleSheet, View } from 'react-native'
import StepIndicator from 'react-native-step-indicator';
import { TextInput } from 'react-native-paper';



export default class Steps extends Component {
    state = {
        text: ''
    }
    render() {
        return (
            <View style={{ flex: 1,alignItems:'center' }}>
                <View style={{ width: '80%', marginTop: 20 }}>
                    <TextInput
                    style={{backgroundColor:'#fff'}}
                        selectionColor='red'

                        mode='outlined'
                        label='Email'
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                    />
                    
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({})
