import React, { PureComponent } from 'react'
import { Text, StyleSheet, View, Picker, TextInput, KeyboardAvoidingView } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { TextInputMask } from 'react-native-masked-text'
import styles from '../styles'
import { connect } from 'react-redux'
export default class AboutTheVacancy extends PureComponent {
  state = {
    TipoQuarto: '',
    preferenciaVaga: '',
    valorAluguel: '',
    peopleMorando: '',
    valorIndividual: '0',
    nomeVaga: ''
  }
  render() {
    return (
      <View style={{
        marginBottom: 10,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
      }}>

        <View style={styles.picker}>
          <Picker
            style={{ flex: 1, width: '100%', color: '#555057' }}
            mode='dialog'
            selectedValue={this.state.TipoQuarto}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ TipoQuarto: itemValue })
            }>
            <Picker.Item label="Quarto" value="" />
            <Picker.Item label="Quarto Inteiro" value="Quarto Inteiro" />
            <Picker.Item label="Quarto Compartilhado" value="Quarto Compartilhado" />
            <Picker.Item label="Sala" value="Sala" />
          </Picker>
        </View>
        <View style={styles.picker}>
          <Picker
            style={{ flex: 1, width: '100%', color: '#555057' }}
            mode='dialog'
            itemStyle={{ color: '#555057' }}
            selectedValue={this.state.preferenciaVaga}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ preferenciaVaga: itemValue })
            }>
            <Picker.Item label="Preferência da vaga" value="" />
            <Picker.Item label="Universitários" value="Universitários" />
            <Picker.Item label="Homens" value="Homens" />
            <Picker.Item label="Mulheres" value="Mulheres" />
            <Picker.Item label="Todos" value="Todos" />
          </Picker>
        </View>
        <TextInput style={styles.input}
          placeholder='Nome da vaga (ex: casa das 3 Marias)'
          placeholderTextColor='#ccc'
          value={this.state.nomeVaga}
          onChangeText={(text) => { this.setState({ nomeVaga: text }) }}
          onEndEditing={this.Alter}
        />
        <TextInput style={[styles.input, { fontSize: 16 }]}
          keyboardType='numeric'
          placeholder='Quantas pessoas já moram na casa?'
          placeholderTextColor='#ccc'
          value={this.state.peopleMorando}
          onChangeText={(text) => { this.setState({ peopleMorando: text }) }}
          onEndEditing={this.Alter}
        />
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
      </View>
    )
  }
}
// const mapStateToProps = (state) => ({
  
// })
// export default connect(mapStateToProps, {
//   AddPropertieVaga
// })()
