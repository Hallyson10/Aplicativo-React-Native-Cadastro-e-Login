
import React, { Component } from 'react'
import { Text, StyleSheet, View ,ImageBackground} from 'react-native'
import { connect } from 'react-redux'
class Image extends Component {
    render() {
        return (
            <View style={{flex:1}}>
        <ImageBackground style={{flex:1}} source={this.props.uri} resizeMode='contain' resizeMethod='scale'>

        </ImageBackground>
        </View>
        )
    }
}

const mapStateToProps = state => (
    {
      uri: state.Register.uri
    }
  )

export default connect(mapStateToProps, {})(Image)
const styles = StyleSheet.create({})

        
    