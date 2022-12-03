import * as React from 'react';
import { useState,useEffect } from 'react'; 
import { Text, View, StyleSheet, TextInput, Pressable, Image, ScrollView,ActivityIndicator, } from 'react-native';
import axios from 'axios';
import { vh, vw, vmax } from 'react-native-expo-viewport-units';


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
        <ScrollView showsVerticalScrollIndicator={false}> 
          <Image style={styles.logo} source={require('../assets/logo.png')}/>
        
          <View style={styles.inputbox}>
                <TextInput 
                    style={styles.txtInput}
                    placeholder = "Informe o Nome da Organização"
                    keyboardType="text"
                    value = {Perfil.NomeOrg}
                    >
                </TextInput>
          </View>
  
          <View style={styles.inputbox}>
                <TextInput 
                    style={styles.txtInput}
                    placeholder = "Informe o CNPJ da Organização"
                    keyboardType="text"
                    value = {Perfil.ChavePix}
                    >
                </TextInput>
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

  inputbox:{
    paddingHorizontal: vw(10),
    paddingVertical: vh(0.8),
    backgroundColor: '#F5F4F4',
    borderRadius: 25,
    marginBottom: vh(1)
  },

  logo:{
    marginLeft:vmax(5),
    height: 250,
    width: 250,
    marginBottom: 30
  },

  btnTxt:{
    fontSize:30,
    color:'#FFFFFF',
    textAlign:'center'
  },

  btnCadastro:{
    paddingHorizontal: vw(10),
    paddingVertical: vh(1),
    backgroundColor: '#38C7A5',
    borderRadius: 15,
    marginTop: vh(2)
  },

  txtInput:{
    marginVertical: 10,
    border: 0,
    borderBottomWidth: 1.5,
    borderColor: 'rgb(200,200,200)',
    width: 265,
    outlineStyle: 'none',
    outline: 'none',
    paddingVertical: 0,
  },

  txtInputgrande:{

    marginVertical:10,
    border:0,
    borderBottomWidth: 1.5,
    borderColor: 'rgb(200,200,200)',
    width:265,
    outlineStyle: 'none',
    outline: 'none',
    paddingVertical: 0,
    fontSize:12
  },

  ViewLoading: {
    height: vh(80),
    width: vw(100),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
   },


  
  });