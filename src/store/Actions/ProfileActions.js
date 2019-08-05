//busca o usuario autenticado
/* Recupera o usuário cadastrado
//     function CadastraUsuario(emailb64) e cadastra todas as informações no firebase conforme o caminho do email recebido.
//     function RemoveUsuario(emailb64) recebe o email do cara autenticado e exclui a conta.
//     function MostrarUsuario(emailb4) recebe o email e busca no banco todos os dados deste usuário
//     function AtualizarNomeUsuario(emailb64,nome),
//     function AtualizarEmailUsuario(emailb64,email) 
// */
import firebase from 'firebase'
import { PROFILE } from '../reducers/types'

export const Profile = ({ usuario }) =>{
    try {
       return dispatch=>{
        dispatch({ type: PROFILE, payload: usuario })
       }
    } catch (error) {
        alert('ouve um erro no profile action')
    }

}




















//UsuarioAtual
// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//     } else {
//       // No user is signed in.
//     }
//   });

// var user = firebase.auth().currentUser;

// if (user) {
//   // User is signed in.
// } else {
//   // No user is signed in.
// }
//Atualizar email
// var user = firebase.auth().currentUser;

// user.updateEmail("user@example.com").then(function() {
//   // Update successful.
// }).catch(function(error) {
//   // An error happened.
// });


//Enviar email de verificação
// var user = firebase.auth().currentUser;

// user.sendEmailVerification().then(function() {
//   // Email sent.
// }).catch(function(error) {
//   // An error happened.
// });

//Alterar senha
// var user = firebase.auth().currentUser;
// var newPassword = getASecureRandomPassword();

// user.updatePassword(newPassword).then(function() {
//   // Update successful.
// }).catch(function(error) {
//   // An error happened.
// });


//excluir conta de usuario
// var user = firebase.auth().currentUser;

// user.delete().then(function() {
//   // User deleted.
// }).catch(function(error) {
//   // An error happened.
// });

//Redefinir senha
// var auth = firebase.auth();
// var emailAddress = "user@example.com";

// auth.sendPasswordResetEmail(emailAddress).then(function() {
//   // Email sent.
// }).catch(function(error) {
//   // An error happened.
// });