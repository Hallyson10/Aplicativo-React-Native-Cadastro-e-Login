
import firebase from 'firebase'
import _ from 'lodash'
import b64 from 'base-64'
import { Alert } from 'react-native'
import {
    LOADING_EM_ANDAMENTO,
    USUARIO_SUCESSO,
    USUARIO_ERRO,
    PERFIL_USUARIO,
    DESLOGADO,
    MODIFICA_PASSWORD,
    MODIFICA_EMAIL,
    LIMPA,
    PROFILE
} from '../reducers/types'

export const modificaEmail = (email) => {

    return {
        type: MODIFICA_EMAIL,
        payload: email
    }
}

export const modificaSenha = (senha) => {
    return {
        type: MODIFICA_PASSWORD,
        payload: senha
    }
}

export const AutenticarUser = ({ email, password }) => {
    return dispatch => {
        dispatch({ type: LOADING_EM_ANDAMENTO })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((value) => usuario_sucesso(value, dispatch))
            .catch(error => usuario_erro(error, dispatch))
    }

}
export const Limpa = () => {
    return {
        type: LIMPA
    }
}

const usuario_sucesso = async (value, dispatch) => {
    try {
        let email = firebase.auth().currentUser.email
        let emailb64 = b64.encode(email);
        await firebase.database().ref('/users/' + emailb64).once('value', snapshot => {
            let usuario = _.map(snapshot.val())
            dispatch({ type: PROFILE, payload: usuario })
            dispatch({ type: USUARIO_SUCESSO });
        })
       
    } catch (error) {
        Alert.alert('Ops!', 'ocorreu um problema ao entrar!')
    }
}

const usuario_erro = (error, dispatch) => {
    dispatch({ type: USUARIO_ERRO })
}

export const Logout = () => {
    return dispatch => {
        try {
            var user = firebase.auth().currentUser
            if (user != null) {
                firebase.auth().signOut().then(() => {

                    dispatch({ type: DESLOGADO })
                    dispatch({ type: LIMPA })
                    dispatch({type:'limpaVaga'})
                }).then(() => { Alert.alert(' ', 'Volte sempre!') })

            }

        } catch (error) {
            alert('houve um problema!')
        }

    }
}





























// export const Buscar_usuarios_procurando_vaga = () => {

//     return dispatch => {

//     }
// }
// const Buscar_usuario = async (emailb64) => {
//     let dataUser
//     try {

//         await firebase.database().ref('/users/' + emailb64).on('value', (snapshot) => {
//             dataUser = snapshot.val()
//         })
//         return dataUser

//     } catch (error) {
//         alert('não existe usuário')
//         return false
//     }

// }

// export const Ativar_procurando_imovel = ({ nome, cidade, valorMax, descricao }) => {
//     return dispatch => {
//         try {

//             firebase.database().ref('/users_procurando/').push({ nome, cidade, valorMax, descricao }).then(() => {
//                 alert(nome + ' Você está procurando imóvel em ' + cidade)
//             }).catch((error) => {
//                 alert('Houve um erro!')
//             })

//         } catch (error) {

//         }

//     }
// }

// export const Visualizar_usuarios_procurando_imovel = (city) => {
//     return dispatch => {
//         try {
//             firebase.database().ref('/users_procurando/').orderByChild("cidade").equalTo(city).on('value', (snapshot) => {
//                 let dataBD = _.values(snapshot.val());
//                 dispatch({ type: USUARIO_PROCURANDO_IMOVEL, payload: dataBD });
//             })
//         } catch (error) {
//             alert('erro ao buscar user')
//         }
//     }
// }























// export const VERIFICAR_EMAIL = (email)=>{
    //var user = firebase.auth().languageCode='de';
//     user.sendEmailVerification(email).then(function() {
//         // Email sent.
//       }).catch(function(error) {
//         // An error happened.
//       });
// }
// export const redefinir_senha = (email)=>{
//         var auth = firebase.auth().languageCode='de';
//         var emailAddress = email;

//         auth.sendPasswordResetEmail(emailAddress).then(function() {
//         // Email sent.
//         }).catch(function(error) {
//         // An error happened.
//         });
// }
// export const excluir_conta = () =>{
//     var user = firebase.auth().currentUser;

//     user.delete().then(function() {
//     // User deleted.
//     }).catch(function(error) {
//     // An error happened.
//     });
// }