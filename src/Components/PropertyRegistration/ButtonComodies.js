import React, { PureComponent } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ButtonComody from './../Buttons/ButtonComody'
export default class ButtonComodies extends PureComponent {
    state = {
        aceitaAnimais: '',
        internet: '',
        garagem: '',
        fumantes: '',
        agua: '',
        energia: ''
    }
    render() {
        return (
            <View style={{ width: '100%', alignItems: 'center', flexWrap: 'wrap', marginBottom: 16 }}>
                <View style={{
                    paddingTop: 10,
                    height: 100,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around'
                }}>
                    <View>
                        <ButtonComody

                            size={120}
                            title='Aceito Animais'
                            component={this.state.aceitaAnimais}
                            Icon='paw' />
                    </View>
                    <View>
                        <ButtonComody

                            size={106}
                            title='Internet'
                            component={this.state.internet}
                            Icon='wifi' />
                    </View>
                    <ButtonComody

                        size={106}
                        title='Garagem'
                        component={this.state.garagem}
                        Icon='motorcycle' />
                    <ButtonComody

                        size={135}
                        title='Aceito Fumantes'
                        component={this.state.fumantes}
                        Icon='smoking' />
                    <ButtonComody

                        size={90}
                        title='Água'
                        component={this.state.agua}
                        Icon='water' />
                    <ButtonComody

                        size={90}
                        title='Energia'
                        component={this.state.energia}
                        Icon='lightbulb' />
                </View>
            </View>
        )
    }
}


