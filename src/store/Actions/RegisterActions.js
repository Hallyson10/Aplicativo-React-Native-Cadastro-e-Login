import firebase from 'firebase'
import b64 from 'base-64'
import { AsyncStorage, Alert } from 'react-native'
import _ from 'lodash'
import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    CONFIRME_SENHA,
    MODIFICA_NOME,
    MODIFICA_FOTO,
    CADASTRO_ERRO,
    CADASTRO_SUCESSO,
    USUARIO_SUCESSO,
    LOADING_CADASTRO,
    CADASTRADO,
    MODIFICA_NUMBER,
    MODIFICA_DATA,
    MODIFICA_SEXO,
    LIMPA
} from '../reducers/types'

export const deleteUriProfile = ()=>{
    return{type:'DeletePerfil',payload:null}
}

export const modificaEmail = (email) => {
    return {
        type: MODIFICA_EMAIL,
        payload: email
    }
}

export const modificaSenha = (senha) => {
    return {
        type: MODIFICA_SENHA,
        payload: senha
    }
}
export const modificaFoto = (foto) => {
    return {
        type: MODIFICA_FOTO,
        payload: foto
    }
}
export const modificaSexo = (sexo) => {
    return {
        type: MODIFICA_SEXO,
        payload: sexo
    }
}

export const confirmeSenha = (senha) => {
    return {
        type: CONFIRME_SENHA,
        payload: senha
    }
}
export const modificaDate = (date) => {
    return {
        type: MODIFICA_DATA,
        payload: date
    }
}

export const modificaNumber = (number) => {
    return {
        type: MODIFICA_NUMBER,
        payload: number
    }
}

export const modificaNome = (nome) => {
    return {
        type: MODIFICA_NOME,
        payload: nome
    }
}

export const cadastroUsuario = ({ nome, email, password, uri, date, number, escolaridade, sexo }) => {
    try {
        return dispatch => {
            dispatch({ type: LOADING_CADASTRO })
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => {
                    let emailb64 = b64.encode(email);
                    firebase.database().ref('/users/').child(emailb64).set({uri, nome, email, date, number, escolaridade, sexo })
                        .then(value => CadastroSucesso(value, dispatch))
                })
                .catch(error => { CadastroErro(error, dispatch) })
        }
    } catch (error) {
        alert(error)
    }
}

const CadastroSucesso = async (value, dispatch) => {
    try {
        dispatch({ type: CADASTRADO })
    let email = firebase.auth().currentUser.email
    let emailb64 = b64.encode(email);
    await firebase.database().ref('/users/').child(emailb64).once('value', (va) => {
        let us = _.map(va.val())[3]
        Alert.alert('Seja Bem-vindo ' + us, 'Acredite, você pode. Estamos com você! (BuscaAP)')
        dispatch({ type: CADASTRO_SUCESSO, payload: va.val() })
    })
    return true
    } catch (error) {
        alert('Ocorreu um erro inesperado!'+error)
        return false
    }
    
}

const CadastroErro = (error, dispatch) => {
    alert(error + 'erro')
    dispatch({ type: CADASTRO_ERRO, payload: error.message })
    return false
}
export const limpa = () => {
    return {
        type: LIMPA
    }
}
