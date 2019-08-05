import React, { Component } from 'react';
import { Platform, StatusBar, Text, View, Image,ScrollView,ImageBackground } from 'react-native';
import CollapsibleToolbar from 'react-native-collapsible-toolbar';
var NativeAppEventEmitter = require('RCTNativeAppEventEmitter')
import NavBackButton from './NavBackButton'
export default class ScrollViewAnimado extends Component {

state={
    data : [{image:'https://lorempixel.com/400/300/'}]
}


    componentWillMount() {

        if (Platform.OS === 'android') {
            StatusBar.setTranslucent(true);
            StatusBar.setBackgroundColor('white', true);
        }
    }

    renderContent = () => (
        <View>
            {new Array(20).fill().map((_, i) => (
                <View
                    // eslint-disable-next-line
                    key={i}
                    style={{
                        backgroundColor: '#F5F5F5',
                        padding: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#E5E5E5'
                    }}
                >
                    <Text>{`Item ${i + 1}`}</Text>
                </View>
            ))}
        </View>
    );
    func = ()=>{
        return(
            <View style={{height:400,width:'100%'}}>
                <ScrollView horizontal showsHorizontalScrollIndicator style={{flex:1}}>
                   <Image style={{height:400,width:'100%',flex:1}} resizeMode='cover'  source={{uri:'https://lorempixel.com/400/300/'}} />
                
                   <Image style={{height:400,width:'100%',flex:1}}  source={{uri:'https://lorempixel.com/400/300/'}} />
                </ScrollView>
            </View>
        )
    }

    renderNavBar = () => (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1
            }}
        >
            <StatusBar backgroundColor='white' />
            <NavBackButton title='' />
            <Text style={{ color: '#FFF' }}>Apartamento R$ 500</Text>
        </View>
    );

    render() {
        const {data } = this.state
        return (
            <CollapsibleToolbar
                renderContent={this.renderContent}
                renderNavBar={this.renderNavBar}
                collapsedNavBarBackgroundColor='#009688'
                translucentStatusBar
                renderToolBar={this.func}
                showsVerticalScrollIndicator={true}
            // toolBarHeight={300}
            />
        );
    }
}