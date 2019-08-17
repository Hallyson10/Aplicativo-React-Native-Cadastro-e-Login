import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    ActivityIndicator,
    TouchableOpacity,
    View
} from 'react-native';
import { connect } from 'react-redux'
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-picker'
import CameraRollPicker from 'react-native-camera-roll-picker';
import { SavePhotoCam, SavePhotos } from '../../store/Actions/PropertiesVagas'
const options = {
    quality: 1.0,
    maxWidth: 600,
    maxHeight: 600,
    allowsEditing:true,
    takePhotoButtonTitle:'Select',
    title: 'Escolha sua melhor foto',
    storageOptions:{
        skipBackup: true
    }
};


class SelectPhotos extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            selected: [],
            checked: false
        };
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: (
                <View>
                    {navigation.getParam('num') ? navigation.getParam('num') :
                        <View>
                            <TouchableOpacity
                                accessibilityComponentType='button'
                                onPress={navigation.getParam('foto')}>
                                <Icon name='camera' size={26} color="white" style={{ marginRight: 18 }} />
                            </TouchableOpacity>
                        </View>
                    }

                </View>
            ),
            title: 'Galeria',
            headerStyle: {
                backgroundColor: "#7D44FF"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    };
    Save = async () => {
        await this.props.navigation.goBack()
        await this.props.SavePhotos(this.state.selected)
    }

    _CameraPhoto = () => {
        try {
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

                    //this.props.modificaFoto(source)
                    //alert("passou pelo register")
                    this.props.navigation.goBack()
                    this.props.SavePhotoCam(source);
                }
            });

        } catch (error) {

        }

    }
    getIndex = () => {
        if (this.state.selected.length === 0) {
            this.props.navigation.setParams({
                num: false
            })
        } else if (this.state.selected.length >= 1) {
            this.props.navigation.setParams({
                num: <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ margin: 5, color: '#ccc' }}>{this.state.selected.length}</Text>
                    <TouchableOpacity onPress={this.Save}>
                        <Text style={{ color: 'white', fontSize: 16, marginRight: 18 }}>SALVAR</Text>
                    </TouchableOpacity>
                </View>
            })
        } else {
            this.props.navigation.setParams({
                num: <View>
                    <Text style={{ color: 'white', fontSize: 16, marginRight: 18 }}>{this.state.selected.length}/15</Text>
                </View>
            })
        }
        return true
    }

    getSelectedImages = (images, current) => {
        var num = images.length;
        this.getIndex()
        this.setState(() => {
            num = num,
                selected = images
        });
    }
    UNSAFE_componentWillMount = () => {
        if (this.state.selected.length === 0) {
            this.props.navigation.setParams({
                foto: this._CameraPhoto
            })
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <CameraRollPicker
                    maximum={15}
                    selected={this.state.selected}
                    groupTypes='Event'
                    initialNumToRender={6}
                    loader={<ActivityIndicator color="#7D44FF"/>}
                    imagesPerRow={3}
                    imageMargin={5}
                    callback={this.getSelectedImages} />
            </View>
        );
    }
}

const mapStateTopProps = (state) => ({
    images: state.Vagas.images
})
export default connect(mapStateTopProps, { SavePhotoCam, SavePhotos })(SelectPhotos)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6AE2D',
    },
    content: {
        marginTop: 15,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    text: {
        fontSize: 16,
        alignItems: 'center',
        color: '#fff',
    },
    bold: {
        fontWeight: 'bold',
    },
    info: {
        fontSize: 12,
    },
});
