import React, { PureComponent } from 'react';
import Modal from 'react-native-modalbox';
import { Thumbnail } from 'native-base';
import TopUserProperties from '../../Components/TopUserProperties'
import AddPostsToPost from '../../Components/PropertyRegistration/AddPostsToPost'
import AboutLocation from '../../Components/PropertyRegistration/AboutLocation'
import AboutProperty from '../../Components/PropertyRegistration/SharedProperty/AboutProperty'
import AboutTheVacancy from '../../Components/PropertyRegistration/SharedProperty/AboutTheVacancy'
import FullProperty from '../../Components/PropertyRegistration/CompleteProperty/FullProperty'
import ButtonsComodies from '../../Components/PropertyRegistration/ButtonComodies'
import ButtonProperty from '../../Components/Buttons/ButtonProperty'
import DescriptionProperty from '../../Components/PropertyRegistration/DescriptionProperty'
import styles from '../../Components/PropertyRegistration/styles'
import { AlterTypeImovel} from '../../store/Actions/PropertiesVagas'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import aboutTheVacancy from '../../Components/PropertyRegistration/SharedProperty/AboutTheVacancy';
import {
  Text,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  View,
  BackHandler,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 20

class CadastroImovel extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      vaga: '',
      completo: false,
      compartilhada: true,
      aceitaAnimais: '',
      internet: 'sim',
      garagem: '',
      fumantes:'sim'
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <View>
          {navigation.getParam('text')}
        </View>
      ),
      title: 'PUBLIQUE SUA VAGA',
      headerStyle: {
        backgroundColor: "#7D44FF"
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily:'BaiJamjuree-ExtraLight'
      },
    }
  };
  save = async () => {
    try {
      await firebase.database().ref('/PropertiesVagas/').push(this.state.hom)
        .then((snapshot) => { this.props.AddPropertieVaga(snapshot) })
        .then(() => firebase.database().ref('/MyPropertiesVagasPublication/').child(this.state.home.emailb64).push(this.state.home))
        .catch((error) => { alert('error cadastra vagas actions' + error) })

    } catch (error) {
      alert(error + ' error save component')
    }
  }

  checkedCompartilhada = async () => {
    if (this.state.compartilhada === true) {
      await this.setState({ compartilhada: false })
      await this.setState({ completo: true })
      await this.setState({ vaga: 'Imóvel Completo' })
      await this.props.AlterTypeImovel(this.state.vaga)
    } else if (this.state.compartilhada === false) {
      await this.setState({ compartilhada: true })
      this.setState({ completo: false })
      this.setState({ vaga: 'Vaga Compartilhada' })
      await this.props.AlterTypeImovel(this.state.vaga)
    }
  }
  checkedCompleto = async () => {
    if (this.state.completo === true) {
      await this.setState({ completo: false })
      await this.setState({ compartilhada: true })
      await this.setState({ vaga: 'Vaga Compartilhada' })
      await this.props.AlterTypeImovel(this.state.vaga)
    } else if (this.state.completo === false) {
      await this.setState({ completo: true })
      this.setState({ compartilhada: false })
      this.setState({ vaga: 'Imovel Completo' })
      await this.props.AlterTypeImovel(this.state.vaga)
    }
  }
  componentDidMount = () => {
    const {preferencia} = this.props
    this.props.navigation.setParams({
      text: <TouchableOpacity onPress={() => alert('ei')}>
        <View>
          <Text style={{ color: '#ccc', fontSize: 18, marginRight: 18 }}>{this.props.preferencia}</Text>
        </View>
      </TouchableOpacity>
    })
  }
  render() {
    const { compartilhada, completo, comp } = this.state
    const { open } = this.props
    return (
      <KeyboardAvoidingView behavior={Platform.OS ==='ios'? "padding" : null} style={styles.wrapper}>

        <StatusBar backgroundColor="#8F00FF" style={{ backgroundColor: 'white' }} />
        <ScrollView style={{ flex: 1 }} >
          <View style={{ flex: 1, alignItems: 'center' }}>
            <TopUserProperties
              nome={this.props.usuario? this.props.usuario.nome.split(' ').slice(0, 2).join(' ').substr(-50, 25):''}
              url={this.props.usuario.uri} />
            <View style={{
              marginBottom: 8,
              alignItems: 'flex-start',
              marginTop: 10,
              width: '100%',
              paddingStart: 18,
              justifyContent: 'flex-start'
            }}>
              <Text style={{ fontSize: 18, color: "#7D44FF", fontWeight: '600' }}>Tipo da vaga</Text>
            </View>
            <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 6, marginBottom: 4 }}>
              <ButtonProperty
                typeProperty={completo}
                title='Imóvel Completo'
                onPress={this.checkedCompleto} />
              <ButtonProperty
                typeProperty={compartilhada}
                title='Vaga Compartilhada'
                onPress={this.checkedCompartilhada} />
            </View>
          </View>
          <AddPostsToPost />
          <AboutLocation />
          <View style={{ flex: 1, alignItems: 'center', marginStart: 18, marginEnd: 18 }}>
            <View style={{
              marginBottom: 12,
              width: '100%',
              alignItems: 'flex-start',
              marginTop: 16,
              justifyContent: 'flex-start'
            }}>
              <Text style={styles.introduction}>Sobre o Imóvel</Text>
              <Text styles={styles.informacoes}>Informações sobre o imóvel aumentam a rapidez para encontrar o imóvel ideal!</Text>
            </View>
            <AboutProperty />
            <View style={{
              marginBottom: 12,
              width: '100%',
              alignItems: 'flex-start',
              marginTop: 14,
              justifyContent: 'flex-start'
            }}>
              <Text style={styles.introduction}>Sobre a Vaga</Text>
              <Text styles={styles.informacoes}>Informações sobre a vaga aumentam a rapidez para encontrar o imóvel ideal!</Text>
            </View>
            {this.state.compartilhada ? <AboutTheVacancy /> : <FullProperty />}
            
            <View style={{
              marginBottom: 12,
              width: '100%',
              alignItems: 'flex-start',
              marginTop: 10,
              justifyContent: 'flex-start'
            }}>
              <Text style={styles.introduction}>Comodidades e Informações Adicionais</Text>
            </View>
            <ButtonsComodies/>
            <DescriptionProperty />
            <View style={{ marginBottom: 20 }} />
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
const mapStateToProps = (state) => ({
  usuario: state.Profile.usuario,
  preferencia : state.Vagas.preferencia,
  images : state.Vagas.images
})
export default connect(mapStateToProps, {
  AlterTypeImovel
})(CadastroImovel)
