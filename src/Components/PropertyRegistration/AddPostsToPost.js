import React, { PureComponent } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native'
import ImagePicker from 'react-native-image-picker'
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
export default class AddPostsToPost extends PureComponent {
    state = {
        fotos: [],
        quarto: null,
        cozinha: null,
        banheiro: null,
        sala: null,
        frente: null,
        outra: null
    }

    SelecionarImagem = async (nome) => {
        try {
            ImagePicker.showImagePicker(options, (response) => {
                if (response.didCancel) {
                    console.log('User cancelled photo picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else if (nome === 'sala') {
                    // You can also display the image using data:
                    const source = { uri: 'data:image/jpeg;base64,' + response.data };
                    this.setState({ sala: source })
                    //alert("passou pelo register")
                    // this.props.modificaFoto(source);
                } else if (nome === 'quarto') {
                    const source = { uri: 'data:image/jpeg;base64,' + response.data };
                    this.setState({ quarto: source })
                } else if (nome === 'cozinha') {
                    const source = { uri: 'data:image/jpeg;base64,' + response.data };
                    this.setState({ cozinha: source })
                } else if (nome === 'banheiro') {
                    const source = { uri: 'data:image/jpeg;base64,' + response.data };
                    this.setState({ banheiro: source })
                } else if (nome === 'frente') {
                    const source = { uri: 'data:image/jpeg;base64,' + response.data };
                    this.setState({ frente: source })
                } else if (nome === 'outra') {
                    const source = { uri: 'data:image/jpeg;base64,' + response.data };
                    this.setState({ outra: source })
                }
            });
            
        } catch (error) {
            alert(error)
        }
        
    }
    
    render() {
        const { quarto, cozinha, banheiro, sala, frente, outra } = this.state;
        return (
            <View style={{
                marginTop: 20,
                marginBottom: 10
            }}>
                <View style={{ marginBottom: 10 }}>
                    <View style={{ marginStart: 18 }}>
                        <Text style={styles.introduction}>Adicione fotos à sua publicação</Text>
                        <Text style={styles.informacoes}>* Adicione fotos chamativas para seu imóvel</Text>
                    </View>
                </View>
                <View style={{
                    marginBottom: 10,
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    marginStart: 3
                }}>
                    <TouchableOpacity onPress={()=> this.SelecionarImagem('quarto')}>
                        <View style={styles.Photo}>
                            <ImageBackground style={styles.images} source={quarto} >
                                {quarto != null ? <Text style={{ color: 'white', fontWeight: '200' }}>Quarto</Text> :
                                    <Text style={{ color: '#555057', fontWeight: '200' }}>Quarto</Text>}
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.SelecionarImagem('cozinha')}>
                        <View style={styles.Photo}>
                            <ImageBackground style={styles.images} source={cozinha} >
                                {cozinha != null ? <Text style={{ color: 'white', fontWeight: '200' }}>Cozinha</Text> :
                                    <Text style={{ color: '#555057', fontWeight: '200' }}>Cozinha</Text>}
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.SelecionarImagem('banheiro')}>
                        <View style={styles.Photo}>
                            <ImageBackground style={styles.images} source={banheiro}>
                                {banheiro != null ? <Text style={{ color: 'white', fontWeight: '200' }}>Banheiro</Text> :
                                    <Text style={{ color: '#555057', fontWeight: '200' }}>Banheiro</Text>}
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.SelecionarImagem('sala')} >
                        <View style={styles.Photo}>
                            <ImageBackground style={styles.images} source={sala} >
                                {sala != null ? <Text style={{ color: 'white', fontWeight: '200' }}>Sala</Text> :
                                    <Text style={{ color: '#555057', fontWeight: '200' }}>Sala</Text>}
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.SelecionarImagem('frente')} >
                        <View style={styles.Photo}>
                            <ImageBackground style={styles.images} source={frente}>
                                {frente != null ? <Text style={{ color: 'white', fontWeight: '200' }}>Frente</Text> :
                                    <Text style={{ color: '#555057', fontWeight: '200' }}>Frente</Text>}
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.SelecionarImagem('outra')} >
                        <View style={styles.Photo}>
                            <ImageBackground style={styles.images} source={outra} >
                                {outra != null ? <Text style={{ color: 'white', fontWeight: '200' }}>Outra...</Text> :
                                    <Text style={{ color: '#555057', fontWeight: '200' }}>Outra...</Text>}
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    introduction: {
        fontSize: 18,
        color: "#7D44FF",
        elevation: 0.2,
        fontWeight: '500',
        shadowColor: "#7D44FF"
    },
    informacoes: {
        fontSize: 13
    },
    Photo: {
        height: 110,
        borderColor: "#7D44FF",
        marginEnd: 2,
        borderRadius: 4,
        elevation: 0.2,
        shadowColor: "#7D44FF",
        marginBottom: 6,
        marginTop: 10,
        width: 110,
        borderWidth: 0.6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    images: {
        flex: 1, height: 110, width: 110, alignItems: 'center', justifyContent: 'center'
    },
})
