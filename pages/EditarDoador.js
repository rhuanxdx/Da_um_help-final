import * as React from 'react';
import { useState,useContext,useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, Image, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import { AuthContext } from '../context/Auth';


export default function EditarDoador({ navigation }) {

  

 

  const {userDoador,EditDoador} = useContext(AuthContext);

  const [Senha, setSenha] = useState(userDoador.data[0].Senha);
  const [Telefone, setTelefone] = useState(userDoador.data[0].Telefone);
  const handleEdit = () =>{
    EditDoador(Telefone,Senha,userDoador.data[0].idDoador)
  }

  return (
  

    <View style={styles.center}>
      <ScrollView showsVerticalScrollIndicator={false}> 
        <View style={{marginTop:90}}></View>

        <Text style={{color:'grey', fontWeight:'bold', textAlign:'center', fontSize:30 }}>Editar Dados</Text>

      <View style={styles.inputbox}>
        <TextInput
          style={styles.txtInput}
          placeholder="Informe seu Telefone"
          keyboardType="numeric"
          value = {Telefone}
          onChangeText={value => setTelefone(value)}
        >
        </TextInput>
      </View>

      <View style={styles.inputbox}>
        <TextInput style={styles.txtInput}
          placeholder="Insira sua senha"
          id="senha"
          name="senha"
          value = {Senha}
          type="password"
          onChangeText={value => setSenha(value)}
        >
        </TextInput>
      </View>    

      <TouchableOpacity style={styles.btnCadastro} onPress={ handleEdit}>
        <Text style={styles.btnTxt}>Salvar</Text>
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
    display:'flex',
    textAlign:'center'

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