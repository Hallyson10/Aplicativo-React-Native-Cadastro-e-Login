import React, { PureComponent } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TouchableHighlight, StatusBar, AsyncStorage } from 'react-native'
import firebase from 'firebase'
import store from '../../../Services/store'
import { Button } from 'react-native-elements';
import SendMessage from '../../Components/SendMessage'

export default class Boas_vindas extends PureComponent {
    constructor(props) {
        super(props);

    }

    state = {
        name: ''
    }

    static navigationOptions = {
        header: null,
        title: 'Welcome',
        fontSize: 30,
        headerStyle: {
            backgroundColor: '#7D44FF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor="#7D44FF" />
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:30,color:'pink'}}>olá Jean </Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ margin: 20 }}>
                        <Button activeOpacity={5} title='Buscar Vaga' onPress={() => { this.props.navigation.navigate('Cadastro', { param: "vaga" }) }}>
                            
                        </Button>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Cadastro', { param: "procurando" }) }}>
                            <Text style={{ fontSize: 25 }}>Pessoas procurando vaga</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Cadastro', { param: "anuncio" }) }}>
                            <Text style={{ fontSize: 25 }}>Quero anunciar</Text>
                        </TouchableOpacity>
                    </View>
                    <SendMessage texto='link' phone='+55(88)99649-9319'/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
