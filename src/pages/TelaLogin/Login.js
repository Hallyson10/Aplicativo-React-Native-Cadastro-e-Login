import React, { Component, PureComponent } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  AsyncStorage,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StatusBar,
  ActivityIndicator,
  View
} from 'react-native';
import { connect } from 'react-redux';
import b64 from 'base-64';
import styles from '../StylesGlobal/Styles';
import { AutenticarUser } from '../../store/Actions/AuthActions';
import Icon from 'react-native-vector-icons/FontAwesome'
import AnuncioLogin from '../../Components/Anuncios';

class Login extends PureComponent {
  state = {
    email: '',
    password: '0',
    visible: false,
    autent: false,
    erro: '',
    icon: <Icon />,
    iconE: <Icon />
  }
  static navigationOptions = {
    title: 'LOGIN',
    fontSize: 30,
    headerStyle: {
      backgroundColor: '#7D44FF',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  _AutenticarUser() {
    const { email, password } = this.state;
    const emailb64 = b64.encode(email)
    // await AsyncStorage.setItem('userToken', emailb64);
    this.props.AutenticarUser({ email, password });
  }
  validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(text) === false)
    {
    
    return false;
      }
    else {
      return true;
    }
    }
    _verifyEmail = async ()=>{
      const v = this.validate(this.state.email)
      if(v){
        this.setState({iconE:<Icon name='check-circle' color='#7D44FF' size={28} style={{ alignSelf: 'center' }} />})
      }else{
      this.setState({ iconE:<Icon name='times-circle' color='red' size={28} style={{alignSelf:'center'}} />})
      return false
    }}
  
  _verifyPassword = async () => {
    
    if (this.state.password.length > 6) {
      this.setState({ erro: 'A senha deve conter no mínimo 6 dígitos' })
      this.setState({icon:<Icon name='check-circle' color='#7D44FF' size={28} style={{ alignSelf: 'center' }} />
    })
    }else{
      this.setState({ icon:<Icon name='times-circle' color='red' size={28} style={{alignSelf:'center'}} />})
      return false
    }
  }

  renderButton() {
    if (this.props.loading_login) {
      return (
        <TouchableOpacity style={styles.Button_entrar} activeOpacity={5}>
          <ActivityIndicator size="small" color="white" style={{ marginTop: 18, marginBottom: 18 }} />
        </TouchableOpacity>
      )
    }

    return (
      <TouchableOpacity style={styles.Button_entrar} activeOpacity={5} onPress={()=>this._AutenticarUser() }>
        <Text style={styles.text_Entrar}>Entrar</Text>
      </TouchableOpacity>
    )


  }
  nomeCadastro() {
    return (
      <TouchableOpacity
        style={styles.button_Cadastro}
        activeOpacity={2}
        onPress={() => { this.props.navigation.navigate('Cadastro') }}>
        <Text style={styles.text_Cadastro}>Criar uma Conta</Text>
      </TouchableOpacity>
    )
  }
  render() {
    const { isAutenticaded } = this.props;
    if (isAutenticaded) {
      this.props.navigation.navigate('App')
    }
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ backgroundColor: "white" }}>
          <View style={styles.Container}>
            <View style={{ flex: 2 }}>
              <Text style={styles.nome_tela}>Bem-vindo!</Text>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingBotton: 100, marginTop: 50, backgroundColor: "white" }}>
                <View
                  style={styles.viewInput}>
                  <TextInput
                    placeholder='Digite seu email'
                    value={this.state.email}
                    autoCorrect={false}
                    autoCompleteType={"off"}
                    onEndEditing={(email)=>this._verifyEmail(email)}
                    onChangeText={(email) => {this.setState({ email: email }) }}
                    autoCapitalize={'none'}
                    style={styles.textInput}
                    placeholderTextColor='#ccc'
                    autoCorrect={false}
                    returnKeyType={"next"}
                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                  />
                  {this.state.iconE}
                </View>
                <View style={styles.viewInput}>
                  <TextInput
                    secureTextEntry={this.state.visible}
                    placeholder='Digite sua senha'
                    onEndEditing={(senha)=>this._verifyPassword(senha)}
                    value={this.state.senha}
                    onChangeText={(senha) => { this.setState({ password: senha }) }}
                    style={styles.textInput} placeholderTextColor='#ccc'
                    ref={(input) => { this.secondTextInput = input; }}
                  />
                  {this.state.icon}
                </View>
                <Text style={{ color: 'red' }}>{this.props.erro_login}</Text>
                {this.renderButton()}
                <Text style={{ fontSize: 20, fontWeight: '300', color: '#ccc', marginTop: 5 }}>Ou</Text>
                {this.nomeCadastro()}
              </View>
            </View>
          </View>
        </ScrollView>
        <AnuncioLogin />
      </View>
    );
  }
}



const mapStateToProps = state => ({
  loading_login: state.Auth.loading_login,
  isAutenticaded: state.Auth.isAutenticaded,
  erro_login: state.Auth.erro_login
})
export default connect(mapStateToProps, { AutenticarUser, AnuncioLogin })(Login)

