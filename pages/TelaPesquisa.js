import * as React from 'react';
import { Text, View, StyleSheet,FlatList, Pressable } from 'react-native';
import Topbar from '../components/TopBar';
import SearchBar from '../components/SearchBar'
import OrgSearch from '../components/OrgSearch';
import OrgSearch2 from '../components/OrgSearch2';
import OrgSearch3 from '../components/OrgSearch2';

import axios from 'axios';
import {useState,useEffect} from 'react';

export default function TelaPesquisa({navigation}) {

  const [entradas, setEntradas] = useState({});

  useEffect(()=> {

    async function buscarOngs(){

      await axios.get('https://daumhelp.glitch.me/MostrarOngs')
      .then((response) => {

        console.log(response.data);

        if(response.data.message == 'Nao encontrado'){
            alert('Sem dados encontrados');
        }
        else{
            setEntradas(response);
        }
  });
    }
    buscarOngs();
  },[])

  const renderItem = ({ item }) => (
    <Pressable onPress = {() => {navigation.navigate('PerfilOng',{
      idOrg: item.idOrg})}}>

    < OrgSearch NomeOrg = {item.NomeOrg} Cidade = {item.Cidade} Telefone = {item.Telefone}/>
    </Pressable>
  );

    return(
      <View style={styles.center}>
        <Topbar/>       
        <FlatList

      data = {entradas.data}
      keyExtractor={item => item.idOrg}
      renderItem = {renderItem}

      />
      </View>
      
    );


}

const styles = StyleSheet.create({

  
  center:{
    display:'flex',
    flexDirection:'column',
    backgroundColor:'E5E5E5',
    padding:10,
  },

  txt:{
    marginTop:20,
    fontWeight:'bold',
    textAlign:'left',
    fontSize:15
  },

  txt2:{
    marginTop:8,
    marginBottom:5,
    fontWeight:'bold',
    textAlign:'left',
    fontSize:15
  },

  });