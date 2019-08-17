import React, { PureComponent } from 'react'
import { Text,StatusBar, StyleSheet, View, Modal, ActivityIndicator, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import firebase from 'firebase'
import { limpa } from '../../store/Actions/RegisterActions'
import { limpaVaga } from '../../store/Actions//PropertiesVagas'
import { Limpa } from '../../store/Actions/AuthActions'
import { TextInputMask } from 'react-native-masked-text'
import b64 from 'base-64'
import {Profile} from '../../store/Actions/ProfileActions'
import {Logout} from '../../store/Actions/AuthActions'
class InitialPage extends PureComponent {
    constructor() {
        super();
        this.state = {
            visibleModal: true,
            online: false
        }
    }
    componentDidMount = async () => {
       
        await firebase.auth().onAuthStateChanged((user) => {
            if (user) {
               //this.props.Logout()
               //this.props.limpaVaga();
                userAtual = user.email;
                var useraut = b64.encode(user.email)
                setTimeout(()=>{
                    this.props.navigation.navigate('App')
                },0) 
                firebase.database().ref('users/').child(useraut).once('value').then((snapshot)=>{
                    //alert(JSON.stringify(snapshot.val()))
                    var usuario = snapshot.val()
                    this.props.Profile({usuario})

                })
            } else {
                 this.props.limpa();
                 this.props.Limpa();
                 setTimeout(()=>{
                    this.props.navigation.navigate('Auth')
                 },0)
            }
        })
    }
    render() {
        return (
            <View
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <StatusBar backgroundColor="#7D44FF" />
                 <ActivityIndicator size="large" color="#7D44FF" style={{ marginTop: 18, marginBottom: 18 }} />
                    <Text>Buscando dados...</Text>
            </View>
        )
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { 
    limpa,
     Limpa ,
     Profile,
     Logout,
     limpaVaga})(InitialPage)


