import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/TelaLogin';
import Cadastro from './pages/TelaCadastro';
import Feed from './pages/TelaFeed';
import Pesquisa from './pages/TelaPesquisa';
import Notificaçao from './pages/TelaNotificação'
import PerfilDoador from './pages/TelaPerfil';
import Tabs from './pages/tabs';
import CadastroOrg from './pages/TelaCadastroOrg'
import Loginreal from './pages/Loginreal';
import AuthProvider from './context/Auth';
import EditarDoador from './pages/EditarDoador'

const Stack = createNativeStackNavigator();



export default function App() {
  return (
      <>

    <NavigationContainer>

      <AuthProvider>

      <Stack.Navigator screenOptions= { {headerShown: false}}
        initialRouteName = "Login">
        <Stack.Screen name = "Login" component = {Login}/>
        <Stack.Screen name = "Cadastro" component = {Cadastro}/>
        <Stack.Screen name = "CadastroOrg" component = {CadastroOrg}/>
        <Stack.Screen name = "Tabs" component = {Tabs}/>
        <Stack.Screen name = "Loginreal" component = {Loginreal}/>
        <Stack.Screen name = "PerfilDoador" component = {PerfilDoador}/>
        <Stack.Screen name = "EditarDoador" component = {EditarDoador}/>

      </Stack.Navigator>

      </AuthProvider>


    </NavigationContainer>
    </>
  );
}