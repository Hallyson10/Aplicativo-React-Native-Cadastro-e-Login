import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView,TouchableOpacity } from 'react-native'
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import { Header } from 'react-navigation';
const MIN_HEIGHT = Header.HEIGHT;
const MAX_HEIGHT = 250;
export default class ProfilePer extends Component {
    render() {
        return (
          <HeaderImageScrollView
            maxHeight={300}
            minHeight={0}
            headerImage={require("../images/drawable/casa.jpg")}
          >
            <View style={{ height: 1000,borderTopStartRadius:20,backgroundColor:'transparent' }}>
              <TriggeringView 
              style={{ height: 1000,borderTopStartRadius:20,borderTopEndRadius:20 }}
              onHide={() => console.log("text hidden")}>
                <Text>Scroll Me!</Text>
              </TriggeringView>
            </View>
          </HeaderImageScrollView>
        );
      }
}

const styles = StyleSheet.create({})
