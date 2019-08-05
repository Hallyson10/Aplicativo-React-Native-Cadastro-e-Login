import {StyleSheet, Platform} from 'react-native'
export default styles = StyleSheet.create({

    Container: {
      flex: 1,
      backgroundColor: "white",
      height: '100%',
      marginTop: Platform.OS === 'android' ? 20 : 22
    },
    text_Entrar: {
      fontSize: 20,
      color: 'white'
    },
    button_Cadastro: {
      width: '70%',
      borderRadius: 50,
      height: 52,
      backgroundColor: '#7D44FF',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 30
    },
    descricao: {
      color: "#7D44FF",
      fontSize: 25
    },
    nome_tela: {
      color: '#7D44FF',
      fontSize: 16
    },
    textInput: {
      width: '88%',
      fontSize: 16,
      fontWeight: '100',
      marginTop: 20,
      paddingStart: 10,
      borderRadius: 50,
      borderWidth: 0.6,
      borderColor: "#7D44FF",
      color: '#4A3259'
    },
    senha:{
      width: '88%',
      fontSize: 16,
      fontWeight: '100',
      marginTop: 8,
      paddingStart: 10,
      borderRadius: 50,
      borderWidth: 0.8,
      borderColor: "#7D44FF",
      color: '#4A3259'
    },
    sexo:{
      marginTop:20
    },
    escolaridade:{
      height: 52,
      justifyContent:'center',
      width: '88%',
      marginTop: 20,
      borderRadius: 50,
      borderWidth: 0.8,
      borderColor: "#7D44FF"
    },
    uri:{
      margin: 5, height: 80, width: 80,
      shadowColor:'#7D44FF',
      borderRadius: 190, borderWidth: 0.3, borderColor: '#7D44FF'
    }
  })