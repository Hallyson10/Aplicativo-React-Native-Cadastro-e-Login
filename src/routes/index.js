import { AsyncStorage } from 'react-native';
import React from 'react'
import { createSwitchNavigator, createStackNavigator, createAppContainer, addNavigationHelpers, createBottomTabNavigator  } from "react-navigation";
import Cadastro from '../pages/TelaCadastroUsuario/Cadastro'
import Login from '../pages/TelaLogin/Login'
import Boas_vindas from '../pages/TelaBoasVindas/Boas_vindas'
import firebase from 'firebase'
import Principal from '../pages/TelaPrincipal/Principal'
import Perfil from '../pages/TelaPerfilUsuario/Perfil'
import InitialPage from '../pages/TelaInicial/InitialPage'
import Image from '../pages/TelaCadastroUsuario/Image'
import CadastroImovel from '../pages/CadastroVaga/CadastroImovel'
import InfinitLoading from '../Components/InfinitLoading'
import Icon from 'react-native-vector-icons/FontAwesome'
import SelectPhotos from '../Components/PropertyRegistration/SelectPhotos'
import Steps from '../Components/Steps'
import { fromLeft, zoomIn, zoomOut } from 'react-navigation-transitions'
 const handleCustomTransition = ({ scenes }) => {
   const prevScene = scenes[scenes.length - 2];
   const nextScene = scenes[scenes.length - 1];

   // Custom transitions go there
  //  if (prevScene
  //   && prevScene.route.routeName === 'CadastroImovel'
  //   && nextScene.route.routeName === 'SelectPhotos') {
  //   return zoomIn();
  // } else 
   if (prevScene
     && nextScene.route.routeName === 'Perfil'
     && prevScene.route.routeName === 'CadastroImovel'
     && nextScene.route.routeName === 'SelectPhotos'  ) {
     return zoomOut();
   }
   return fromLeft();
 }


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
  SelectPhotos: SelectPhotos,
  InfinitLoading:InfinitLoading
}, {
    headerMode: 'screen',
    transitionConfig: (nav) => handleCustomTransition(nav) 
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