import React, { Component } from 'react'
import { Text, StyleSheet,Picker,TextInput, View } from 'react-native'
import styles from '../styles'
import {connect } from 'react-redux'
class AboutSharedProperty extends Component {
    state={
       compartilhada : true,
       completo:true,
       valorIndividual:0,
       tipoDeQuarto : '',
       qtdQuartos:0,
       QtdBanheiros:0,
       quartoSuite: '',
       ceramica:'',
       forrado : '',
       preferenciaVaga : '',
       valorTotalAluguel : 0,
       valorIndividualAluguel : 0,
       qtdPessoasMorando : 0,
       contrato : 'Não'
    }
    render() {
        return (
            <View style={{
                marginBottom: 6,
                width: '100%',
                alignItems: 'flex-start',
                marginTop: 10,
                justifyContent: 'flex-start'
              }}>
              {this.props.tipomoradia === 'Vaga Compartilhada' ? 
              null : 
              <View style={styles.picker}>
                    <Picker
                      style={{ flex: 1, width: '100%', color: '#555057' }}
                      mode='dialog'
                      selectedValue={this.state.QtdQuartos}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({ QtdQuartos: itemValue })
                      }>
                      <Picker.Item label="Quantos quartos?" value="" enabled />
                      <Picker.Item label="1 Quarto" value="1" />
                      <Picker.Item label="2 Quartos" value="2" />
                      <Picker.Item label="3 Quartos" value="3" />
                      <Picker.Item label="4 Quartos" value="4" />
                      <Picker.Item label="5 Quartos" value="5" />
                      <Picker.Item label="6 Quartos" value="6" />
                      <Picker.Item label="7 Quartos" value="7" />
                      <Picker.Item label="8 Quartos" value="8" />
                      <Picker.Item label="9 Quartos" value="9" />
                      <Picker.Item label="10 Quartos" value="10" />
                    </Picker>
                  </View>
              }
                <View style={styles.picker}>
                  <Picker
                    style={{ flex: 1, width: '100%', color: '#555057' }}
                    mode='dialog'
                    selectedValue={this.state.QtdBanheiros}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ QtdBanheiros: itemValue })
                    }>
                    <Picker.Item label="Quantos banheiros?" value="" />
                    <Picker.Item label="1 Banheiro" value="1" />
                    <Picker.Item label="2 Banheiros" value="2" />
                    <Picker.Item label="3 Banheiros" value="3" />
                    <Picker.Item label="4 Banheiros" value="4" />
                    <Picker.Item label="5 Banheiros" value="5" />
                  </Picker>
                </View>
                {this.props.tipomoradia === 'Vaga Compartilhada' ? 
                null :
                <View style={styles.picker}>
                  <Picker
                    style={{ flex: 1, width: '100%', color: '#555057' }}
                    mode='dialog'
                    selectedValue={this.state.quartoSuite}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ quartoSuite: itemValue })
                    }>
                    <Picker.Item label="Quantos quartos suítes?" value="" />
                    <Picker.Item label="0 Quarto suíte" value="0" />
                    <Picker.Item label="1 Quarto suíte" value="1" />
                    <Picker.Item label="2 Quartos suítes" value="2" />
                    <Picker.Item label="3 Quartos suítes" value="3" />
                    <Picker.Item label="4 Quartos suítes" value="4" />
                    <Picker.Item label="5 Quartos suítes" value="5" />
                  </Picker>
                </View>
                }
                <View style={styles.picker}>
                  <Picker
                    style={{ flex: 1, width: '100%', color: '#555057' }}
                    mode='dialog'
                    selectedValue={this.state.ceramica}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ ceramica: itemValue })
                    }>
                    <Picker.Item label="Tem cerâmica?" value="" />
                    <Picker.Item label="Sim,tem cerâmica" value="sim" />
                    <Picker.Item label="Não tem cerâmica" value="nao" />
                  </Picker>
                </View>
                <View style={styles.picker}>
                  <Picker
                    style={{ flex: 1, width: '100%', color: '#555057' }}
                    mode='dialog'
                    selectedValue={this.state.forrado}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ forrado: itemValue })
                    }>
                    <Picker.Item label="O imóvel é forrado?" value="" />
                    <Picker.Item label="Sim, é forrado" value="Sim" />
                    <Picker.Item label="Não é forrado" value="Não" />
                  </Picker>
                </View>
              </View>
        )
    }
}
const mapStateToProps = (state)=>({
  tipomoradia : state.Vagas.tipomoradia
})
export default connect(mapStateToProps,{
  
})(AboutSharedProperty) 


