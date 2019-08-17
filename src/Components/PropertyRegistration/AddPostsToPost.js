import React, { PureComponent } from 'react'
import { Text, ScrollView, StyleSheet, View, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
//import ImagePicker from 'react-native-image-picker'
import CameraRollPicker from 'react-native-camera-roll-picker';
import { connect } from 'react-redux'
import { RemovePhotos } from '../../store/Actions/PropertiesVagas'
import ImagePicker from 'react-native-customized-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { withNavigation } from 'react-navigation';
import styles from './styles'
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
class AddPostsToPost extends PureComponent {
    state = {
        fotos: [],
        quarto: null,
        cozinha: null,
        banheiro: null,
        sala: null,
        frente: null,
        outra: null
    }

    addImage = () => {

        if (this.props.img.length === 0) {
            return (
                <View style={{
                    width: '100%',
                    marginTop: 2,
                    height: 180,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 18
                }}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SelectPhotos')}
                        style={{
                            width: '100%',
                            borderRadius: 6,
                            borderWidth: 0.6,
                            borderColor: "#7D44FF",
                            height: 180,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Icon name='images' size={20} style={{ margin: 5 }} />
                            <Text style={{ color: '#555057' }}>Galeria</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }

    }

    mapi = () => {
        return this.props.img.map((imge) => {
            return (
                <View style={{ padding: 2}}>

                    <ImageBackground resizeMode='cover' imageStyle={{ zIndex: 2, borderRadius: 4 }} style={styles.images} source={imge} >
                        <TouchableOpacity style={{ margin: 6 }} onPress={() => this.props.RemovePhotos(imge)}>
                            <View style={{
                                height: 22,
                                width: 22,
                                alignItems: 'center',
                                justifyContent: 'center',
                                shadowColor: 'white',
                                borderRadius: 90,
                                backgroundColor: "#7D44FF",
                                alignSelf: 'flex-end'
                            }}>
                                <Text style={{ color: 'white' }}>X</Text>
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
            )
        })
    }

    render() {

        return (
            <View style={{ height: 260, width: '100%', marginTop: 8}}>
                <View style={{
                    height: 60,
                    justifyContent: 'center',
                    paddingLeft: 16,
                    width: '100%'
                }}>
                    <Text style={styles.introduction}>Adicione Fotos à sua publicação</Text>
                    <Text style={styles.informacoes}>Fotos ajudam na hora de escolher a moradia ideal</Text>
                </View>
                <View>

                    {this.props.img.length > 0 ?
                        <ScrollView
                            style={{ paddingLeft: 14,
                                marginBottom:16}}
                            horizontal
                            showsHorizontalScrollIndicator={false} >
                            <View style={{
                                paddingRight: 18,
                                flexDirection: 'row',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{ flexDirection: 'row'}}>
                                    {this.mapi()}
                                </View>
                                {this.props.img.length <= 20 ?
                                    <View style={{
                                        height: 180,
                                        width: 140,
                                        marginBottom: -4,
                                        alignItems: 'center',
                                        borderColor: "#7D44FF",
                                        borderWidth: 0.6,
                                        justifyContent: 'center',
                                        marginRight: 14,
                                        borderRadius: 6
                                    }}>
                                        <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.navigation.navigate('SelectPhotos')} >
                                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                                <Icon name='images' size={20} style={{ margin: 5 }} />
                                                <Text style={{ color: '#555057' }}>Galeria</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View> : null
                                }
                            </View>
                        </ScrollView> : null}
                    {this.props.img.length === 0 ? <View style={{ justifyContent: 'center' }}>
                        {this.addImage()}
                    </View> : null}

                </View>
            </View>
        )
    }
}
const mapStateToProps = (state) => ({
    img: state.Vagas.images
})
const AddPost = withNavigation(AddPostsToPost)
export default connect(mapStateToProps, { RemovePhotos })(AddPost)
