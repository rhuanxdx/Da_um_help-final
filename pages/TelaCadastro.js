import * as React from 'react';
import { useState } from 'react';   
import { Text, View, StyleSheet, TextInput, Pressable, Image } from 'react-native';
import Axios from "axios";

export default function TelaCadastro({navigation}) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [verifSenha, setVerifSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [nomeDoador, setNomeDoador] = useState();
  const [telefone, setTelefone] = useState();


  const handleChangeValues = (value) => {
    setValues((prevValue) =>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClinckButton = () => {
    Axios.post("http://localhost:3001/register",{
      EmailDoador: values.email,
      NomeDoador: values.nomeDoador,
      idade: values.dataNascimento,
      CPF: values.cpf,
      Telefone:values.telefone,
      Senha: values.senha,
    }).then((responde) => {
      console.log(response);
    });
  };

  return (

    <View style={styles.center}>

        <Image style={styles.logo} source={require('../assets/logo.png')}/>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe seu Nome"
                  keyboardType="text"
                  onChangeText = {value => setNomeDoador(value)}
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Insira sua senha"
                  keyboardType="text"
                  onChangeText = {value => setSenha(value)}
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Repita sua senha"
                  keyboardType="text"
                  onChangeText = {value => setVerifSenha(value)}
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe seu cpf"
                  keyboardType="text"
                  onChangeText = {value => setCpf(value)}
                  >
              </TextInput>
      </View>

        <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe sua data de nascimento"
                  keyboardType="text"
                  onChangeText = {value => setDataNascimento(value)}
                  >
              </TextInput>
      </View>
      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe seu Telefone"
                  keyboardType="text"
                  onChangeText = {value => setTelefone(value)}
                  >
              </TextInput>
      </View>




        <Pressable style={styles.btnCadastro} onPress={()=>navigation.navigate("Tabs")}>
          <Text style={styles.btnTxt}>Cadastra-se</Text>
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

  inputbox:{
    paddingHorizontal:20,
    paddingVertical:8,
    backgroundColor:'##e7e9e8',
    borderRadius:25,
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom:10
  },

  logo:{

    height:250,
    width:250,
    marginBottom:30
  },

  btnTxt:{
    fontSize:30,
    whiteSpace:'nowrap',
    color:'#FFFFFF',
    
  },

  btnCadastro:{
    paddingHorizontal:65,
    paddingVertical:13,
    backgroundColor:'#38C7A5',
    borderRadius:15,
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 4,
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