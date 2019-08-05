import {StyleSheet} from 'react-native'
export default styles = StyleSheet.create({
  
    Container: {
      flex:1,
      height:'100%',
      backgroundColor:"white",
      padding:2,
      paddingBottom:30
    },
    text_Entrar:{
      fontSize:20,
      color:'white'
    },
    text_Cadastro:{
      fontSize:20,
      color:"#7D44FF"
    },
    button_Cadastro:{
      width:'80%',
      borderRadius:50,
      height:'16%',
      backgroundColor:"white",
      marginBottom:10,
      alignItems:'center',
      justifyContent:'center',
      margin:5
    },
    Button_entrar:{
    width:'80%',
    borderRadius:50,
    height:'18%',
    backgroundColor:"#7D44FF",
    alignItems:'center',
    justifyContent:'center',
    margin:12,
    marginTop:35,
    shadowOffset:{width:0,height:1}
    },
    descricao:{
      color: "#161616",
      fontSize:25
    },
    nome_tela:{
      color: '#7D44FF',
      fontSize:28,
      fontWeight:'500',
      margin:25,
    
    },
    textInput:{
      fontSize:16,
      flex:1,
      fontWeight:'100',
      
    },
    viewInput:{
      width:'85%',
      flexDirection:'row',
      shadowOffset:{height:2,width:0},
      shadowRadius:0,
      shadowColor:'grey',
      shadowOpacity:1.0,
      borderColor:'#7D44FF',
      marginTop:20,
      marginBottom:5,
      paddingStart:10,
      paddingEnd:10,
      borderRadius:50,
      borderWidth:0.6,
    }
})