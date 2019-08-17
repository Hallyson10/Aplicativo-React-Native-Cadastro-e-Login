import React, { PureComponent } from 'react';
import firebase from 'firebase'
import {
  StyleSheet,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  Picker,
  Alert,
  Platform,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  TextInput,
  StatusBar,
  View
} from 'react-native'

import { Thumbnail } from 'native-base';
import { connect } from 'react-redux'
import { CheckBox } from 'react-native-elements'
import ImagePicker from 'react-native-image-picker'
import { TextInputMask } from 'react-native-masked-text'
import Icon from 'react-native-vector-icons/FontAwesome'
import Modal from 'react-native-modalbox';
import NavBar from '../../Components/NavBackButton'
import styles from './Styles'
import {
  deleteUriProfile,
  modificaFoto,
  modificaNome,
  modificaEmail,
  modificaNumber,
  modificaDate,
  modificaSexo,
  cadastroUsuario,
  CadastroSucesso,
} from '../../store/Actions/RegisterActions'
import { AutenticarUser } from '../../store/Actions/AuthActions'

const options = {
  quality: 1.0,
  maxWidth: 500,
  maxHeight: 500,
  title: 'Escolha sua melhor foto',
  storageOptions: {
    skipBackup: false,
    path: 'Coliving'
  }
};

class Cadastro extends PureComponent {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'CADASTRE-SE',
    headerStyle: {
      backgroundColor: "#7D44FF"
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    nomeErro: 'Digite seu nome completo.',
    senhaErro: 'As senhas não estão iguais.',
    uri: { uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' },
    email: '',
    password: 0,
    passwordVerify: '',
    masculino: false,
    feminino: false,
    escolaridade: '',
    errorImage: ''
  }

  _cadastroUsuario = async () => {
    try {
      const { nome, email, num, sexo, uri, date } = this.props
      var number = `+55${num}`
      this.setState({ email: email })
      const { password, escolaridade, ...state } = this.state
      await this.props.cadastroUsuario({ nome, email, password, uri, date, number, escolaridade, sexo })

    } catch (error) {
      console.log(error)
    }
  }

  _CameraPhoto = () => {
    ImagePicker.launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // You can also display the image using data:
        const source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.props.modificaFoto(source)
        //alert("passou pelo register")
        // this.props.modificaFoto(source);
      }
    });
  }

  SelecionarImagem() {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // You can also display the image using data:
        const source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({ errorImage: '' })
        this.props.modificaFoto(source)
        //alert("passou pelo register")
        // this.props.modificaFoto(source);
      }
    });
  }
  deletePerfil = () => {
    this.props.deleteUriProfile()
  }
  verificaSenha() {
    try {
      if (this.props.uri != null) {
        if (this.props.nome.length >= 3) {
          if (this.props.email.length > 0) {
            if (this.state.escolaridade != "") {
              if (this.props.num.length >= 11) {
                if (this.state.password.length < 6) {
                  () => { false }
                  Alert.alert('Ops', 'Sua senha deve conter no mínimo 6 dígitos!')
                }
                else if (this.state.password === this.state.passwordVerify) {
                  this._cadastroUsuario()
                } else {
                  () => false
                  Alert.alert('Ops!', this.state.senhaErro)
                }
              } else {
                Alert.alert('Ops!', 'Digite um número de telefone válido!'), () => false
              }
            } else {
              Alert.alert('Ops!', 'O campo escolaridade está em branco'), () => false
            }
          } else {
            Alert.alert('Ops!', 'Digite seu email!'), () => false
          }

        } else {
          () => false
          Alert.alert('Ops!', this.state.nomeErro)
        }
      } else {
        () => false
        Alert.alert('Ops!', '"Pessoas com fotos no perfil tem mais chances de serem convidados para uma moradia", insira uma foto')
      }

    } catch (error) {
      alert('Falha de conexão com a internet')
    }

  }
  Login() {
    const { isCadastrado } = this.props;
    if (isCadastrado) {
      this.props.navigation.navigate('App')
    } else {
      return false
    }
  }
  modificaNameInput = async (nome) => {
    if (this.props.uri !== null) {
      await this.setState({ errorImage: '' })
      await this.props.modificaNome(nome)
    } else {
      this.setState({ errorImage: 'Selecione uma foto de perfil' })
      return false
    }
  }

  checked = () => {
    if (this.state.masculino === true) {
      this.setState({ masculino: false })
    } else if (this.state.masculino === false) {
      this.setState({ masculino: true })
      this.setState({ feminino: false })
      this.props.modificaSexo('Homem')
    }
  }
  checkedFeminino = () => {
    if (this.state.feminino === true) {
      this.setState({ feminino: false })
    } else if (this.state.feminino === false) {
      this.setState({ feminino: true })
      this.setState({ masculino: false })
      this.props.modificaSexo('Mulher')
    }
  }

  _renderButton() {
    const { loading_cadastro } = this.props;
    if (loading_cadastro) {
      return (
        <View
          style={styles.button_Cadastro}>
          <ActivityIndicator size="small" color="white" />
        </View>
      )
    }
    return (
      <TouchableOpacity
        onPress={() => this.verificaSenha()}
        style={styles.button_Cadastro}
        activeOpacity={2}>
        <Text style={styles.text_Entrar}>Cadastrar</Text>
      </TouchableOpacity>
    )
  }
  _imageProfile = () => {
    if (this.props.uri != null) {
      return (
        <View style={{ alignItems: 'center' }}>
          <View>

            <TouchableOpacity activeOpacity={5} onPress={() => { this.props.navigation.navigate('Image') }}>

              <ImageBackground resizeMode='cover'
              imageStyle={{borderRadius:190}}
                borderColor="#f2f2f2" large source={this.props.uri}
                style={styles.uri} >
                <TouchableOpacity onPress={this.deletePerfil}
                  style={{
                    height: 25,
                    width: 25,
                    backgroundColor: '#7D44FF',
                    borderRadius: 90,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: -20,
                  }}>
                  <Text style={{ color: 'white' }}>X</Text>
                </TouchableOpacity>

              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ color: "#7D44FF", marginStart: 8, fontSize: 16 }}>Olá, {this.props.nome.split(' ').slice(0, 2).join(' ').substr(-50, 25)} !</Text>
          </View>
        </View>
      )
    } else {
      return (
        <ImageBackground style={styles.uri}>
          <TouchableOpacity style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }} onPress={this._CameraPhoto}>
            <View style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              opacity: 0.1,
              height: 105,
              width: 105,
              borderRadius: 180
            }}>
              <Icon name='camera' color='#7D44FF' size={24} />
              <Text style={{ color: '#7D44FF', fontSize: 10 }}>Tirar foto</Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      )
    }
  }
  _AddPerfil = () => {
    if (this.props.uri != null) {
      return (
        <TouchableOpacity onPress={this.SelecionarImagem.bind(this)}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Icon name='edit' size={20} color='#7D44FF' />
            <Text style={{ color: '#7D44FF', marginStart: 5 }}>Editar foto</Text>
          </View>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity onPress={this.SelecionarImagem.bind(this)}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Icon name='image' size={20} color='#7D44FF' />
            <Text style={{ color: '#7D44FF', marginStart: 5 }}>Selecionar foto de perfil</Text>
          </View>
        </TouchableOpacity>
      )
    }
  }

  render() {
    const { isCadastrado } = this.props;
    const { email, password } = this.state;
    if (isCadastrado) {
      this.props.AutenticarUser({ email, password })
      this.props.navigation.navigate('App')
    }
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#7D44FF" />
        <ScrollView style={{ flex: 1, backgroundColor: "white", alignContent: 'center' }}>
          <View style={styles.Container}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 28, paddingVertical: 20, marginHorizontal: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.nome_tela}>Já é cadastrado?</Text>
                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    marginStart: 8,
                    alingItems: 'center',
                    padding: 8, borderWidth: 0.6,
                    borderColor: "#7D44FF",
                    padding: 2,
                    paddingVertical: 2,
                    backgroundColor: "#7D44FF",
                    borderRadius: 90
                  }} onPress={async () => { await setTimeout(() => { this.props.navigation.navigate('Login') }, 0) }}>
                  <Text style={{
                    color: "#ffffff", fontSize: 16, margin: 4,
                    fontWeight: '500'
                  }}>ENTRAR</Text>
                </TouchableOpacity>
              </View>
              <Text style={{ fontSize: 16, color: 'gray', margin: 10 }}>ou</Text>
              <Text style={styles.nome_tela}>Preencha seus dados abaixo!</Text>
            </View>
            <View style={{ height: 100, maxHeight: 150, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
              {this._imageProfile()}
              {this._AddPerfil()}

            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingBotton: 100, marginTop: 30 }}>
              <TextInput
                placeholder='Nome completo'
                value={this.props.nome}
                onChangeText={(nome) => { this.modificaNameInput(nome) }}
                style={styles.textInput}
                placeholderTextColor='#ccc'
                autoCapitalize='words'
                autoCorrect={false}
                returnKeyType={"next"}
                onSubmitEditing={() => { this.secondTextInput.focus(); }}
              />
              <Text style={{ fontSize: 12, color: 'red', marginBottom: 1 }}>{this.state.errorImage} </Text>
              
              <TextInput
                placeholder='Digite um email válido'
                value={this.props.email}
                onChangeText={(email) => { this.props.modificaEmail(email) }}
                style={[styles.textInput,{marginTop:1}]}
                placeholderTextColor='#ccc'
                autoCapitalize={'none'}
                autoCorrect={false}
                ref={(input) => { this.secondTextInput = input; }}
                returnKeyType={"next"}
              />
              <TextInputMask
                placeholder='Número para contato'
                placeholderTextColor='#ccc'
                ref={(ref) => this.datetimeField = ref}
                style={styles.textInput}
                type={'cel-phone'}
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask: '(99) '
                }}
                value={this.props.num}
                onChangeText={text => {
                  this.props.modificaNumber(text)
                }}
              // verificar se é válido
              //ref={(ref) => this.phoneField = ref}
              />
              <TextInputMask
                placeholder='Data de nascimento'
                placeholderTextColor='#ccc'
                style={styles.textInput}
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY'
                }}
                value={this.props.date}
                onChangeText={text => {
                  this.props.modificaDate(text)
                }}
                // add the ref to a local var
                ref={(ref) => this.phoneField = ref}
              />
              <View
                style={styles.escolaridade}>
                <Picker
                  mode='dialog'
                  selectedValue={this.state.escolaridade}
                  style={{ flex: 1, alignItems: 'center', justifyContent: 'center', color: '#333' }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ escolaridade: itemValue })
                  }>
                  <Picker.Item label="Escolaridade" value="" />
                  <Picker.Item label="Cursando Ensino Fundamental" value="Cursando Ensino Fundamental" />
                  <Picker.Item label="Cursando Ensino Médio" value="Cursando Ensino Médio" />
                  <Picker.Item label="Ensino Médio Completo" value="Ensino Médio Completo" />
                  <Picker.Item label="Cursando Ensino Superior" value="Universitário" />
                  <Picker.Item label="Ensino Superior Completo" value="Graduado" />
                  <Picker.Item label="Cursando Pós-Graduação" value="Pós-Graduado" />
                </Picker>
              </View>
              <View style={styles.sexo}>
                <Text style={{ color: '#7D44FF' }}>Sexo</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name='male' size={18} color='#7D44FF' style={{ marginEnd: -14 }} />
                  <CheckBox checkedColor='#7D44FF' center title='Masculino' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.masculino}
                    containerStyle={{ backgroundColor: "transparent", borderColor: "transparent" }} onPress={this.checked} textStyle={{ color: '#7D44FF' }}
                  />
                  <Icon name='female' size={18} color='#7D44FF' style={{ marginEnd: -14 }} />
                  <CheckBox checkedColor='#7D44FF' center title='Feminino' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.feminino}
                    containerStyle={{ backgroundColor: "transparent", borderColor: "transparent" }} textStyle={{ color: '#7D44FF' }} onPress={this.checkedFeminino}
                  />
                </View>
              </View>
              <TextInput
                value={this.state.password}
                onChangeText={(password) => { this.setState({ password }) }}
                secureTextEntry
                placeholder='Crie uma senha'
                style={styles.senha}
                placeholderTextColor='#ccc'

              />
              <TextInput
                value={this.state.passwordVerify}
                onChangeText={(passwordVerify) => { this.setState({ passwordVerify }) }}
                secureTextEntry
                placeholder='Confirme sua senha'
                style={styles.textInput}
                placeholderTextColor='#ccc'
              />

              <Text style={{ color: 'red', marginTop: 5 }}></Text>
              {this._renderButton()}

            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => (
  {
    nome: state.Register.nome,
    uri: state.Register.uri,
    email: state.Register.email,
    num: state.Register.number,
    date: state.Register.dataNascimento,
    sexo: state.Register.sexo,
    sexoMasculino: state.Register.sexoMasculino,
    sexoFeminino: state.Register.sexoFeminino,
    message_error: state.Register.message_error,
    isCadastrado: state.Register.isCadastrado,
    loading_cadastro: state.Register.loading_cadastro
  }
)

export default connect(mapStateToProps, {
  modificaFoto,
  deleteUriProfile,
  modificaNome,
  modificaEmail,
  modificaNumber,
  modificaDate,
  modificaSexo,
  cadastroUsuario,
  CadastroSucesso,
  AutenticarUser
})(Cadastro)


