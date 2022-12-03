import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, Image, ScrollView } from 'react-native';
import {useState,useContext,useEffect} from 'react';
import { AuthContext } from '../context/Auth';
import { vh, vw, vmin, vmax } from 'react-native-expo-viewport-units';


export default function Loginreal({navigation}) {

  const [EmailDoador, setEmailDoador] = useState('');
  const [Senha, setSenha] = useState('');


  const [loginStatus,setLoginStatus] = useState('');

  const {Login} = useContext(AuthContext);

  const handleLogin = () => {
    Login(EmailDoador,Senha);
  }

  return (

    <View style={styles.center}>
      <ScrollView showsVerticalScrollIndicator={false}> 
        <Image style={styles.logo} source={require('../assets/logo.png')}/>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe seu email"
                  keyboardType="email-address"
                  onChangeText={value => setEmailDoador(value)}
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe sua senha"
                  secureTextEntry={true}
                  keyboardType="text"
                  onChangeText={value => setSenha(value)}
                  >
              </TextInput>
      </View>


        <Pressable style={styles.btnCadastro} onPress={handleLogin}>
          <Text style={styles.btnTxt}>Entrar</Text>
        </Pressable>


 </ScrollView>
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

  inputbox:{
    paddingHorizontal:20,
    paddingVertical:8,
    backgroundColor:'#F5F4F4',
    marginBottom:10
  },


  logo:{
    marginTop: vh(5),
    height:250,
    width:250,
    marginLeft:vmax(3),
    marginBottom:vh(5)
  },

  btnTxt:{
    height: vmin(11),
    fontSize:30,
    color:'#FFFFFF',
    textAlign:'center',
    
  },

  btnCadastro:{
    backgroundColor:'#38C7A5',
    borderRadius:15,
    marginTop:15
  
  },

  txtInput:{

    marginVertical:10,
    border:0,
    borderBottomWidth: 1.5,
    borderColor: 'rgb(200,200,200)',
    width:265,
    outlineStyle: 'none',
    outline: 'none',
    paddingVertical: 0,
    placeholderTextColor:'red' 
  },


  
  });