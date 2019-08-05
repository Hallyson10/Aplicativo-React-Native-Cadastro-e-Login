import React, { Component } from 'react'
import _ from 'lodash'
import {
    Text,
    StyleSheet,
    View,
    Modal,
    CheckBox,
    TouchableOpacity,
    AsyncStorage,
    Alert,
    ActivityIndicator
} from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'

class Principal extends Component {

    state = {

    }
    render() {

        return (
            <View style={styles.container}>

                <View>

                </View>

            </View>
        )
    }
}
const mapStateToProps = state => ({})

export default connect(mapStateToProps, {

})(Principal)


