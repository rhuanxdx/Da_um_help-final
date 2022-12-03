import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, Image } from 'react-native';
import { vh, vw, vmin, vmax } from 'react-native-expo-viewport-units';

export default function TelaLogin({navigation}) {



  return (

    <View style={styles.center}>

        <Image style={styles.logo} source={require('../assets/logo.png')}/>
        <Text style={styles.tit}> Bem vindo ao Da um Help </Text>
       
        <Text style={styles.txt}> Somos um portal para facilitar na comunicaçãoentre pessoas dispostas a fazer o bem assim como você, e organizações que precisam do nosso apoio para continuar com seus incríveis projetos! </Text>
      
        <Pressable style={styles.btnLogin} onPress={()=>navigation.navigate("Loginreal")}>
          <Text style={styles.btnTxtLogin}>Entrar</Text>
        </Pressable>
        
        <Pressable style={styles.btnCadastro} onPress={()=>navigation.navigate("Cadastro")}>
          <Text style={styles.btnTxt}>Cadastra-se</Text>
        </Pressable>

        <Pressable style={styles.btnCadastro} onPress={()=>navigation.navigate("CadastroOrg")}>
          <Text style={styles.btnTxtOng}>Cadastra-se como ONG</Text>
        </Pressable>


        

    </View>
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

  logo:{
    marginTop: vh(5),
    height:250,
    width:250,
    marginBottom:vh(5)
  },

  tit:{
      fontSize:20,
      color:'#2C2828',
      fontWeight:'bold',
  },

  txt:{
    marginTop:10,
    fontSize:14,
    color:'#454343',
    textAlign: 'center',
    marginBottom: 20,
    maxWidth: '80%'

  },

  btnTxt:{
    fontSize:20,
    color:'#2C2828',
    paddingHorizontal:50,
    textAlign:'center',
    
  },

  btnTxtOng:{
    fontSize:20,
    color:'#2C2828',
    textAlign:'center',
    
  },

  btnCadastro:{
    textAlign:'center',
    marginTop: vh(2),
    width: vmin(90),
    paddingVertical: vh(1.3),
    backgroundColor:'#e7e9e8',
    borderRadius:15,
  },

  btnLogin:{
    marginTop: vh(2),
    paddingVertical: vh(1.3),
    backgroundColor:'#38C7A5',
    borderRadius:15,
    width: vmin(90),

  },

  btnTxtLogin:{
    textAlign:'center',
    fontSize:20,
    color:'white',
    paddingHorizontal:78
  },

  
  });
