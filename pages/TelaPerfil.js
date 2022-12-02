import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable, Alert } from 'react-native';
import Topbar from '../components/TopBar';
import axios from 'axios';
//chamar dados importa isso 
import {useState,useContext,useEffect} from 'react';
import { AuthContext } from '../context/Auth';

export default function TelaPerfil({navigation}) {

  //e isso aqui
  const {userDoador} = useContext(AuthContext);


  const DeletarConta = () => {
    axios.post("https://daumhelp.glitch.me/deleteDoador", {idDoador: userDoador.data[0].idDoador}).then((response)=>{
      if(response.data.message == 'Erro encontrado'){
        alert('Não foi possível excluir a conta');
      }
      else{
        alert('Conta excluída com sucesso');
        navigation.navigate('Login');
      }
    });
}

const MostrarPopUp = ()=>{
  return Alert.alert (
    "Deletar Conta",
    "Tem certeza que deseja deletar a sua conta ?",
    [
      {
        text: 'Sim',
        onPress: () => {DeletarConta}
      },
      {text: 'Não'}
    ]

  );
};

    return(
      <View>
        <View style={styles.center}>
          <Topbar/>
            <View style={styles.fundo} >
                <View style={styles.perfil} >
                  <Image style={styles.foto} source={require('../assets/branco.png')}/>
                  <Text style={styles.nomeOrg} >{userDoador.data[0].NomeDoador}</Text>
                </View>
              </View>
        </View>

        <Text style={styles.info2}>Pesoal</Text>

        <View style={styles.prop} >
          <Text style={styles.info} >Nome</Text>
          <Text style={styles.txt2} >{userDoador.data[0].NomeDoador}</Text>
        </View>

        <View style={styles.prop} >
          <Text style={styles.info} >Email</Text>
          <Text style={styles.txt2} >{userDoador.data[0].EmailDoador}</Text>
        </View>

        
        <View style={styles.prop} >
          <Text style={styles.info} >Telefone</Text>
          <Text style={styles.txt2} >{userDoador.data[0].Telefone}</Text>
        </View>

        <Text style={styles.info2} >Segurança</Text>

        <View style={styles.prop} >
          <Pressable onPress={() => {navigation.navigate("EditarDoador")}}>
            <Text>Editar Perfil</Text>
          </Pressable>

          <Pressable onPress={DeletarConta}>
            <Text>Exlcuir Perfil</Text>
          </Pressable>

        </View>


      </View>
    );


}

const styles = StyleSheet.create({
  center:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    backgroundColor:'E5E5E5',
    padding:10,
  },

  nomeOrg:{
    textAlign:'center',
    color:'white',
    marginTop:10,
    fontSize:30,
    paddingBottom:20
  },

  foto:{
    marginTop:20,
    height:100,
    width:100,
    borderRadius:50,
    justifyContent:'center'
  },

  fundo:{
    marginTop:-6,
    backgroundColor:'#38C7A5',
    width:420,
  },

  perfil:{
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    maxWidth:420,
  },

  info:{
    marginTop:10,
    fontWeight:'bold',
    fontSize:15
  },

  info2:{
    paddingLeft:10,
    marginTop:10,
    fontWeight:'bold',
    fontSize:15
  },


  txt2:{
    marginTop:8,
    color:'grey',
    marginBottom:5,
    fontWeight:'bold',
    fontSize:15
  },

  prop:{
    textAlign:'left',
    paddingLeft:10,
    backgroundColor:'#e7e9e8',
    marginTop:5,
    paddingBottom:10
  },
  
  });