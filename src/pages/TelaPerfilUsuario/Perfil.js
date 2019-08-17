import React, { PureComponent } from 'react'
import {
    Text,
    StyleSheet,
    StatusBar,
    Animated,
    Modal,
    ActivityIndicator,
    View,
    TouchableOpacity,
    FlatList,
    TextInput,
    ScrollView,
    Image
} from 'react-native'
import { connect } from 'react-redux'
import { BuscaUsuario } from '../../store/Actions/ProfileActions'
import { Logout } from '../../store/Actions/AuthActions'
import SendMessage from '../../Components/SendMessage'
import Moda from 'react-native-modalbox';
class Usuarios extends PureComponent {
    state = {
        isOpen: false,
        modall: false,
        opacity: new Animated.Value(0)
    }
    onLoad = event => {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 300,
        }).start();
    }
    profile = () => {
        this.setState({ isOpen: true })
    }
    render() {
        const { isOpen } = this.state
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <StatusBar backgroundColor="#7D44FF" />
                <TouchableOpacity onPress={this.profile}>
                    <Image source={this.props.usuario.uri} style={{ height: 100, width: 100 }} />
                </TouchableOpacity>
                <View>
                    <Text> foto </Text>
                    <Text>{this.props.usuario.nome} </Text>
                    <Text>{this.props.usuario.sexo} </Text>
                    <Text>{this.props.usuario.escolaridade}</Text>
                    <Text>{this.props.usuario.number}</Text>
                    <Text>contato do usuario(este deve ser visto apenas por usuários premmium)</Text>
                    <Text>qtd curtidas, mensagens, configurações de conta, publicacoes do usuario, </Text>
                    <TouchableOpacity onPress={() => { this.props.Logout() }}>
                        <Text>Sair</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:40,width:180,alignItems:'center',
                    borderWidth:0.6}} onPress={async () => {
                            await this.setState({modall:true})
                            await this.props.navigation.navigate('CadastroImovel')
                            await this.setState({modall:false})
                    }}>
                        <Text style={{fontFamily:'ChauPhilomeneOne-Regular',color:"#7D44FF",fontSize:20}}>Cadastrar imóvel</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    supportedOrientations='landscape'
                    animationType='slide'
                    visible={this.state.modall} transparent={false} >
                    
                </Modal>
                <Moda
                    style={{ alignContent: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}
                    backdropPressToClose={false}
                    entry={'bottom'}
                    swipeThreshold={120}
                    onClosingState={() => this.setState({ isOpen: false })}
                    position={"center"}
                    isOpen={isOpen}
                    animationDuration={400}
                >
                    <View style={{ height: 400, width: 400 }}>
                        <Image source={this.props.usuario.uri} style={{ height: 400, width: 400 }} />
                    </View>
                </Moda>
                <SendMessage texto='www.google.com' phone={this.props.usuario.number} />
            </View>
        )
    }
}
const mapStateToProps = (state) => ({
    usuario: state.Profile.usuario
})
export default connect(mapStateToProps, { BuscaUsuario, Logout })(Usuarios)

