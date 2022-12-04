import * as React from 'react';
import { useState } from 'react'; 
import { Text, View, StyleSheet, TextInput, Pressable, Image, ScrollView } from 'react-native';
import axios from 'axios';
import { vh, vw, vmax } from 'react-native-expo-viewport-units';


export default function TelaCadastro({navigation}) {


  const [NomeOrg, setNomeOrg] = useState('');
  const [CNPJ, setCNPJ] = useState('');
  const [CPFRepresentante, setCPFRepresentante] = useState('');
  const [EmailOrg, setEmailOrg] = useState('');
  const [UF, setUF] = useState('');
  const [CEP, setCEP] = useState('');
  const [Cidade, setCidade] = useState('');
  const [Bairro, setBairro] = useState('');
  const [Rua, setRua] = useState('');
  const [Numero, setNumero] = useState('');
  const [Complemento, setComplemento] = useState('');
  const [ChavePix, setChavePix] = useState('');
  const [Telefone, setTelefone] = useState('');
  const [Senha, setSenha] = useState('');
  const [DescricaoOrg, setDescricaoOrg] = useState('');




  const registroOrg = () =>{
    axios.post('https://daumhelp.glitch.me/cadastrarOrg', {
      NomeOrg: NomeOrg,
      CNPJ: CNPJ,
      CPFRepresentante: CPFRepresentante,
      EmailOrg: EmailOrg,
      UF: UF,
      CEP: CEP,
      Cidade: Cidade,
      Bairro: Bairro,
      Rua: Rua,
      Numero: Numero,
      Complemento: Complemento,
      ChavePix: ChavePix,
      Telefone: Telefone,
      Senha: Senha,  
      DescricaoOrg: DescricaoOrg
  
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
        <Image style={styles.logo} source={require('../assets/logo.png')}/>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe o Nome da Organização"
                  keyboardType="text"
                  onChangeText={value => setNomeOrg(value)}
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe o CNPJ da Organização"
                  keyboardType="text"
                  onChangeText={value => setCNPJ(value)}
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInputgrande}
                  placeholder = "Informe o CPF do responsável pela Organização"
                  keyboardType="text"
                  onChangeText={value => setCPFRepresentante(value)}
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe seu email"
                  keyboardType="text"
                  onChangeText={value => setEmailOrg(value)}
                  >
              </TextInput>
      </View>

        <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe sua UF"
                  keyboardType="text"
                  onChangeText={value => setUF(value)}
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe seu CEP"
                  keyboardType="text"
                  onChangeText={value => setCEP(value)}
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInputgrande}
                  placeholder = "Informe sua cidade"
                  keyboardType="text"
                  onChangeText={value => setCidade(value)}
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInputgrande}
                  placeholder = "Informe seu bairro"
                  keyboardType="text"
                  onChangeText={value => setBairro(value)}
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInputgrande}
                  placeholder = "Informe sua rua"
                  keyboardType="text"
                  onChangeText={value => setRua(value)}
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe seu número"
                  keyboardType="text"
                  onChangeText={value => setNumero(value)}
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe seu complemento (se houver)"
                  keyboardType="text"
                  onChangeText={value => setComplemento(value)}
                  >
              </TextInput>
      </View>
    
      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Insira sua chavepix"
                  keyboardType="text"
                  onChangeText={value => setChavePix(value)}
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Insira seu Telefone"
                  keyboardType="text"
                  onChangeText={value => setTelefone(value)}
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Insira uma breve descrição"
                  keyboardType="text"
                  onChangeText={value => setDescricaoOrg(value)}
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe sua senha"
                  keyboardType="text"
                  secureTextEntry={true}
                  onChangeText={value => setSenha(value)}
                  >
              </TextInput>
      </View>

        <Pressable style={styles.btnCadastro} onPress={() => {
        registroOrg(); navigation.navigate("Login")
        }}>
          <Text style={styles.btnTxt}>Cadastra-se</Text>
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


  
  });