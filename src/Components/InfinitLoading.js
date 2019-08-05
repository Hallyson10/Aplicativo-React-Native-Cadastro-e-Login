import React, {Component} from 'react'
import {
  View,
  ActivityIndicator,
  StyleSheet,
  FlatList
} from "react-native";
import axios from 'axios'
import DisplayCard from './DisplayCard'

export default class InfinitLoading extends Component {
  state = {
    produtos: [],
    page: 1,
    limit: 10,
    loading: true,
    loadingMore: false,
    refreshing: false
  }
  // carrega mais itens
  _handleLoadMore = () => {
    this.setState(
      (prevState, nextProps) => ({
        page: prevState.page + 1,
        loadingMore: true
      }),
      () => {
        this.getProducts();
      }
    );
  };
  // carregando no radapé
  _renderFooter = () => {
    if (!this.state.loadingMore) return null;
    return (
      <ActivityIndicator size="large" color="pink" />
    );
  };
  // quando o usuário puxa para baixo 
  _handleRefresh = () => {
    this.setState(
      {
        page: 1,
        limit: 10,
        refreshing: true
      },
      () => {
        this.getProducts();
      }
    );
  };
  componentDidMount() {
    this.getProducts();
  }
  getProducts () {
    const {page, limit } = this.state
    let url = `https://demo.ghost.io/ghost/api/v2/content/posts/?key=22444f78447824223cefc48062&page=${page}&limit=${limit}`
    console.log(url)
    
    axios.get(url).then(response => {
      this.setState(() => ({
        produtos:
          page === 1
            ? Array.from(response.data.posts)
            : [...this.state.produtos, ...response.data.posts],
        loading: false,
        refreshing: false
      }));
    }).catch(e => {
    })
  }
  render() {
    return (
      <View style={styles.container}>
          {
            this.state.produtos.length > 0
            ? <FlatList
                ListFooterComponent={this._renderFooter}
                vertical={true}
                numColumns={2}
                contentContainerStyle={{
                  flexDirection: 'column'
                }}
                data={this.state.produtos}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                  <View
                    style={{width: '50%'}}>
                    <DisplayCard title={item.title} imgUrl={item.feature_image}/>
                  </View>
                )}
                onEndReached={this._handleLoadMore}
                onEndReachedThreshold={0.5}
                initialNumToRender={10}
                onRefresh={this._handleRefresh}
                refreshing={this.state.refreshing}
              />
            : <ActivityIndicator size="large" color="red" />
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});