import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, Image, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';

export default function TelaCadastro({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [idade, setIdade] = useState('');
  const [nomeDoador, setNomeDoador] = useState('');
  const [telefone, setTelefone] = useState('');


  const registro = () =>{
  axios.post('https://daumhelp.glitch.me/cadastrarDoador', {
    EmailDoador: email,
    NomeDoador: nomeDoador,
    idade: idade,
    CPF: cpf,
    Telefone: telefone,
    Senha: senha




  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
  


  return (
  

    <View style={styles.center}>
      <ScrollView showsVerticalScrollIndicator={false}> 
      <Image style={styles.logo} source={require('../assets/logo.png')} />

      <View style={styles.inputbox}>
        <TextInput style={styles.txtInput}
          id="emailDoador"
          name="emailDoador"
          placeholder="Informe seu E-mail"
          type="text"
          onChangeText={value => setEmail(value)}
        >
        </TextInput>
      </View>

      <View style={styles.inputbox}>
        <TextInput style={styles.txtInput}
          id="nomeDoador"
          name="nomeDoador"
          placeholder="Informe seu Nome"
          type="text"
          onChangeText={value => setNomeDoador(value)}
        >
        </TextInput>
      </View>
      
      <View style={styles.inputbox}>
        <TextInput
          style={styles.txtInput}
          placeholder="Informe sua idade"
          keyboardType="text"
          onChangeText={value => setIdade(value)}
        >
        </TextInput>
      </View>

      <View style={styles.inputbox}>
        <TextInput
          style={styles.txtInput}
          placeholder="Informe seu cpf"
          keyboardType="text"
          onChangeText={value => setCpf(value)}
        >
        </TextInput>
      </View>

      <View style={styles.inputbox}>
        <TextInput
          style={styles.txtInput}
          placeholder="Informe seu Telefone"
          keyboardType="text"
          onChangeText={value => setTelefone(value)}
        >
        </TextInput>
      </View>

      <View style={styles.inputbox}>
        <TextInput style={styles.txtInput}
          placeholder="Insira sua senha"
          id="senha"
          name="senha"
          type="password"
          onChangeText={value => setSenha(value)}
        >
        </TextInput>
      </View>    

      <TouchableOpacity style={styles.btnCadastro} onPress={() => {
        registro(); navigation.navigate("Tabs")
      }}>
        <Text style={styles.btnTxt}>Cadastra-se</Text>
      </TouchableOpacity>

      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    backgroundColor: 'E5E5E5',
    padding: 10,
  },

  inputbox: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#F5F4F4',
    borderRadius: 25,
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 10
  },

  logo: {

    height: 250,
    width: 250,
    marginBottom: 30
  },

  btnTxt: {
    fontSize: 30,
    whiteSpace: 'nowrap',
    color: '#FFFFFF',

  },

  btnCadastro: {
    paddingHorizontal: 65,
    paddingVertical: 13,
    backgroundColor: '#38C7A5',
    borderRadius: 15,
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop: 15

  },

  txtInput: {

    marginVertical: 10,
    border: 0,
    borderBottomWidth: 1.5,
    borderColor: 'rgb(200,200,200)',
    width: 265,
    outlineStyle: 'none',
    outline: 'none',
    paddingVertical: 0,
    placeholderTextColor: 'red'


  },



});