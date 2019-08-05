import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Card, CardItem, Body, Button } from 'native-base';

export default class DisplayCard extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => { }}>
          <Card>
            <CardItem style={{ height: 280, borderRadius: 4 }}>
              <Body>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: this.props.imgUrl }}
                />
                <Text style={{marginBottom: 10}}>
                    {this.props.title}
                </Text>
                <View style={{position: 'absolute', bottom: 0}}>
                  <Button style={{borderRadius: 4, backgroundColor: '#ca0a12',  width: 145, flexDirection: "row", justifyContent: "center"}}
                    onPress={() => {
                  }}>
                    <Text style={{color: 'white'}}>COMPRAR</Text>
                  </Button>
                </View>
              </Body>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150
  }
});