import React, { PureComponent } from 'react'
import { Text, StyleSheet,KeyboardAvoidingView, View, TextInput,Platform } from 'react-native'
import styles from './styles'
import Geocoder from 'react-native-geocoding'
import { connect } from 'react-redux'
import { LocationCity, LocationRua, LocationBairro, LocationCep, LocationMap } from '../../store/Actions/PropertiesVagas'
//AIzaSyDxDgoVgEgGD-GoheR8YYguquuhx16fsJY
const GOOGLE_MAPS_APIKEY = 'AIzaSyDxDgoVgEgGD-GoheR8YYguquuhxl6fsJY'
class AboutLocation extends PureComponent {
  state = {
    erroCity : false,
    erroRua : false,
    op:''
  }
  find = (city) => {
    if(city === 'rua'){
      if(this.props.rua === ''){
        this.setState({erroRua:false})
      }
      if (this.props.rua != '' ) {
        Geocoder.init(GOOGLE_MAPS_APIKEY)
        Geocoder.from(this.props.rua).then(json => {
          var location = json.results[0].geometry.location
          var long = location.lng
          var lat = location.lat
          var address = json.results[0].formatted_address
          this.props.LocationMap({long,lat})
          this.setState({erroRua:false})
        }).catch((error) => {
          //alert(JSON.stringify(error))
          if(city === 'rua'){
            this.setState({erroRua:true})
            this.setState({op:'Rua'})
          }
        })
      }
    }else if(city === 'city'){
      if(this.props.cidade === '' ){
        this.setState({erroCity:false})
      }
      if (this.props.cidade != '' ) {
        Geocoder.init(GOOGLE_MAPS_APIKEY)
        Geocoder.from(this.props.cidade).then(json => {
          var location = json.results[0].geometry.location
          var long = location.lng
          var lat = location.lat
          var address = json.results[0].formatted_address
          this.props.LocationMap({long,lat})
          this.setState({erroCity:false})
        }).catch((error) => {
          if(city === 'city'){
            this.setState({erroCity:true})
            this.setState({op:'Cidade'})
          }
        })
      }
    }
    
  }
  render() {
    return (
      <KeyboardAvoidingView behavior={Platform.OS ==='ios'? "padding" : null} enabled style={{
         alignItems: 'center', 
         marginStart: 18, 
         marginTop:10,
         marginEnd: 18,
          marginBottom: 12 }}>
        <View style={{
          marginBottom: 12,
          width: '100%',
          alignItems: 'flex-start',
          justifyContent: 'flex-start'
        }}>
          <Text style={styles.introduction}>Sobre a localização</Text>
          <Text style={styles.informacoes}>Informações sobre a localização facilita a busca por uma moradia!</Text>
        </View>
       
        <TextInput style={this.state.erroCity ? styles.inputErro : styles.input}
          placeholder='Cidade da sua vaga'
          value={this.props.cidade}
          onChangeText={(city) => {
            this.props.LocationCity(city)
          }}
          onEndEditing={()=>this.find('city')}
        />
        <TextInput style={this.state.erroRua ? styles.inputErro : styles.input}
          placeholder='Ex:Rua Jose Bastos 234'
          value={this.props.rua}
          onChangeText ={(rua)=>{this.props.LocationRua(rua)}}
          onEndEditing={()=>this.find('rua')}
        />
        <TextInput style={styles.input}
          placeholder='Bairro'
          value={this.props.bairro}
          onChangeText = {(bairro)=>{this.props.LocationBairro(bairro)}}
        />
        <View style={{marginTop:-8}}>
        {this.state.erroCity || this.state.erroRua ? <Text style={{color:'red',fontSize:12}}>{this.state.op} Não encontrada  </Text>
        : null}
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = (state) => ({
    cidade : state.Vagas.cidade,
    bairro : state.Vagas.bairro,
    rua : state.Vagas.rua,
    latitude: state.Vagas.latitude,
    longitude : state.Vagas.longitude
})
export default connect(mapStateToProps, {
  LocationCity,
  LocationRua,
  LocationBairro,
  LocationCep,
  LocationMap
})(AboutLocation)
