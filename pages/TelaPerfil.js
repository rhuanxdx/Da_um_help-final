import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import Topbar from '../components/TopBar';

export default function App(navigation) {

    return(
      <View>
        <View style={styles.center}>
          <Topbar/>
            <View style={styles.fundo} >
                <View style={styles.perfil} >
                  <Image style={styles.foto} source={require('../assets/branco.png')}/>
                  <Text style={styles.nomeOrg} >Pedro Freitas</Text>
                </View>
              </View>
        </View>

        <Text style={styles.info2} >Pesoal</Text>

        <View style={styles.prop} >
          <Text style={styles.info} >Nome</Text>
          <Text style={styles.txt2} >Pedro Barbosa de Freitas</Text>
        </View>

        <View style={styles.prop} >
          <Text style={styles.info} >Email</Text>
          <Text style={styles.txt2} >pedro06bf@gmail.com</Text>
        </View>

        <Text style={styles.info2} >Segurança</Text>

        <View style={styles.prop} >
          <Text style={styles.info} >Senha</Text>
          <Text style={styles.txt2} >******</Text>
        </View>

        <View style={styles.prop} >
          <Text style={styles.info} >Mudar Senha</Text>

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
    marginLeft:35,
  },

  fundo:{
    marginTop:-6,
    backgroundColor:'#38C7A5',
    width:420,
  },

  perfil:{
    maxWidth:420,
    marginLeft:126,

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