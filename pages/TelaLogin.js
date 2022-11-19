import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, Image } from 'react-native';


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
    marginTop:35,
    height:250,
    width:250,
    marginBottom:35
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
    paddingHorizontal:50
    
  },

  btnTxtOng:{
    fontSize:20,
    color:'#2C2828',
    
  },

  btnCadastro:{
    marginTop:20,
    paddingHorizontal:90,
    paddingVertical:9,
    backgroundColor:'#e7e9e8',
    borderRadius:15,
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    maxWidth:400,

  },

  btnLogin:{
    marginTop:20,
    paddingHorizontal:90,
    paddingVertical:9,
    backgroundColor:'#38C7A5',
    borderRadius:15,
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    maxWidth:400,

  },

  btnTxtLogin:{
    fontSize:20,
    color:'white',
    paddingHorizontal:78
  },

  
  });
