import React, { PureComponent } from 'react'
import { Text, View, TextInput, Picker,TouchableOpacity } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

import styles from '../styles'
export default class FullProperty extends PureComponent {
  state = {
    valorAluguel: '',
    contrato: ''
  }
  render() {
    return (
      <View style={{
        marginBottom: 10,
        width: '100%',
        alignItems: 'flex-start',
        marginTop: 10,
        justifyContent: 'flex-start'
      }}>
        <View style={styles.input}>
          <View style={{ flexDirection: 'row', alignItems: 'center',alignContent:'center' }}>
            <View>
              <Text style={{ fontSize: 16,color:'#555057' }}>Valor total do aluguel</Text>
            </View>
            <View style={{marginBottom:-1,flex:1}}>
              <TextInputMask
                style={{ width:30, flex: 1, fontSize: 16}}
                type={'money'}
                style={{ color: '#555057', fontSize: 16, fontSize: 16 }}
                options={{
                  unit: 'R$ '
                }}
                value={this.state.valorAluguel}
                onChangeText={text => {
                  this.setState({
                    valorAluguel: text
                  })
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.picker}>
          <Picker
            style={{ flex: 1, width: '100%', color: '#555057' }}
            mode='dialog'
            selectedValue={this.state.contrato}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ contrato: itemValue })
            }>
            <Picker.Item label="Tem Contrato?" value="" />
            <Picker.Item label="Não tem contrato" value="Sem contrato" />
            <Picker.Item label="Sim, tem contrato" value="Com contrato" />
          </Picker>
        </View>
      </View>
    )
  }
}
