import { AsyncStorage } from 'react-native';
import React from 'react'
import { createSwitchNavigator, createStackNavigator, createAppContainer, addNavigationHelpers, createBottomTabNavigator  } from "react-navigation";
import Cadastro from '../pages/TelaCadastroUsuario/Cadastro'
import Login from '../pages/TelaLogin/Login'
import Boas_vindas from '../pages/TelaBoasVindas/Boas_vindas'
import firebase from 'firebase'
import Principal from '../pages/TelaPrincipal/Principal'
import Perfil from '../pages/TelaPerfilUsuario/Perfil'
import ScrollviewAnimado from '../Components/ScrollviewAnimado'
import InitialPage from '../pages/TelaInicial/InitialPage'
import Image from '../pages/TelaCadastroUsuario/Image'
import CadastroImovel from '../pages/CadastroVaga/CadastroImovel'
import InfinitLoading from '../Components/InfinitLoading'
import ProfilePer from '../Components/ProfilePer'
import Icon from 'react-native-vector-icons/FontAwesome'



const tabBarNavigator = createBottomTabNavigator({
  Principal: {screen: Principal,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />
    }},
  Perfil: {
    screen: Perfil,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="user-circle" color={tintColor} />
    }
  }
}, {
  headerMode: 'screen'
})

const Routes = createStackNavigator({
  Perfil: Perfil,
  CadastroImovel: CadastroImovel,
  ProfilePer:ProfilePer,
  InfinitLoading:InfinitLoading,
  ScrollviewAnimado: ScrollviewAnimado,
}, {
    headerMode: 'screen'
  });

const AuthStack = createStackNavigator({Boas_vindas: Boas_vindas, Login: Login,  
  Cadastro: Cadastro,
  Image:Image
},{headerMode:'screen'});

export default createAppContainer(createSwitchNavigator(
  {
    InitialPage: InitialPage,
    App: Routes,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'InitialPage',
  }
));