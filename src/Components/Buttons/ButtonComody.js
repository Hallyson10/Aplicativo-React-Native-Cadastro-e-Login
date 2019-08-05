import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
//import styles from '../PropertyRegistration/styles'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default ButtonComody = (props) => {
    ButtonAtived = () => {
        if (props.component === '' || props.component === false) {
            return (
                <View>
                    <TouchableOpacity onPress={props.onPress}
                        style={[styles.buttonAnimaisAtivos,{width:props.size}]}>
                        <View style={styles.positionIconButtons}>
                            <Icon name={props.Icon} color='#7D44FF' />
                            <Text style={{ color: '#7D44FF', marginStart: 2, fontSize: 12, fontWeight: '200' }}>{props.title} </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View style={[styles.sombraButtomAnimais,{width:props.size}]}>
                </View>
            )
        }
    }
    ButtonDesatived = () => {
        if (props.component !== '' || props.component === true) {
            return (
                <View>
                    <TouchableOpacity onPress={props.onPress}
                        activeOpacity={10}
                        style={[styles.buttomAnimalDesative,{width:props.size}]} >
                        <View style={styles.positionIconButtons}>
                            <Icon name={props.Icon} color='white' />
                            <Text style={{ color: 'white', marginStart: 2, fontSize: 12, fontWeight: '200' }}>{props.title} </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
    }
    return (
        <View style={styles.buttonsAgrups}>
            <View >
                {this.ButtonAtived()}
            </View>
            <View>
                {this.ButtonDesatived()}
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    buttonAnimaisAtivos: {
        justifyContent: 'center',
        borderRadius: 90,
        height: 36,
        padding: 5,
        margin: 3,
        backgroundColor: 'white',
        alignItems: 'center',
        borderWidth: 0.3,
        borderColor: "#7D44FF"
    },
    sombraButtomAnimais: {
        justifyContent: 'center',
        height: 36,
        backgroundColor: "#7D44FF",
        borderRadius: 90,
        opacity: 0.1,
        margin: 1,
        width: 115,
        shadowColor: "#7D44FF",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.30,
        shadowRadius: 11.95,
        marginBottom:-30,
        elevation: 18,
        alignItems: 'center'
    },
    buttomAnimalDesative: {
        justifyContent: 'center',
        height: 36,
        borderRadius: 90,
        margin: 3,
        padding: 5,
        backgroundColor: "#7D44FF",
        alignItems: 'center'
    },
    positionIconButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
})