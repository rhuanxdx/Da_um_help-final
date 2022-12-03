import * as React from 'react';
import { useState,useEffect } from 'react'; 
import { Text, View, StyleSheet, TextInput, Pressable, Image, ScrollView,ActivityIndicator, } from 'react-native';
import axios from 'axios';
import { vh, vw, vmax } from 'react-native-expo-viewport-units';
import TopBar from '../components/TopBar'

export default function TelaCadastro({navigation,route}) {


  const [Perfil,setPerfil] = useState();
  const [carregando,setCarregando] = useState(true);

    useEffect(()=>{

      async function BuscaOng(){

        await axios.post("https://daumhelp.glitch.me/BuscarOngs",{idOrg: route.params.idOrg})
        .then(function (response) {

          setPerfil(response.data[0]);
          setCarregando(false);

        })
        .catch(function (error) {
          console.log(error);
        });
      } 

      BuscaOng();

    },[])


  return (
    <>
    {carregando ?
      (
        <View style = {styles.ViewLoading}>
          <ActivityIndicator size='large' color="#38C7A5" />
        </View>
      )
      :
      
      (
        <View style={styles.center}>
        <TopBar/>
        <ScrollView showsVerticalScrollIndicator={false}> 
          <Text style={styles.NomeOrg} >{Perfil.NomeOrg}</Text>
          <Text style={styles.endereço} >Cidade: {Perfil.Cidade} CEP:{Perfil.CEP}</Text>
          <Text style={styles.endereço} >{Perfil.Bairro}, {Perfil.Rua} {Perfil.Numero} {Perfil.Complemento}</Text>
          <Text style={styles.desc} >Mollit culpa do labore sunt. Velit qui ea laborum occaecat. Veniam deserunt voluptate veniam quis sit officia sint id id non eu nostrud. Cillum labore voluptate laboris proident sunt.</Text>
          <Text style={styles.info} >Contato</Text>
          <Text style={styles.endereço} >{Perfil.EmailOrg}</Text>
          <Text style={styles.endereço} >{Perfil.Telefone}</Text>
          <View style={styles.help}>
             <Text style={styles.helpTxt}>Nos ajude via PIX</Text>
             <Text style={styles.helpTxt}>{Perfil.ChavePix}</Text>
          </View>
       </ScrollView>
          </View>
      )}

   
    </>
  );
}


const styles = StyleSheet.create({
  center:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    textAlign:'center',
    backgroundColor:'E5E5E5',
    padding:10,
  },

  NomeOrg:{
    fontWeight:'bold',
    fontSize:30,
    color:'#181818',
    textAlign:'center',
  },

  ViewLoading: {
    height: vh(80),
    width: vw(100),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
   },

   endereço:{
    marginTop:vh(0.5),
    fontSize:17,
    textAlign:'center',
    color:'grey'
   },

   desc:{
    marginTop:vh(0.5),
    fontSize:17,
    textAlign:'center',
    color:'#181818',
    paddingVertical:vh(2)
   },

   info:{
    textAlign:'center',
    marginTop:vh(1),
    fontWeight:'bold',
    fontSize:15
  },

  help:{
    marginTop:vh(2),
    backgroundColor:'#38C7A5',
    padding:vh(1),
    borderRadius:15,
  },

  helpTxt:{
    textAlign:'center',
    fontSize:20,
    color:'white',
    fontWeight:'bold'
  },
  
  });