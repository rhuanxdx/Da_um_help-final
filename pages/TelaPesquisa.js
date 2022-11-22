import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Topbar from '../components/TopBar';
import SearchBar from '../components/SearchBar'
import OrgSearch from '../components/OrgSearch';
import OrgSearch2 from '../components/OrgSearch2';
import OrgSearch3 from '../components/OrgSearch2';

export default function App() {

    return(
      <View style={styles.center}>
        <Topbar/>       
        <SearchBar/>
        <Text  style={styles.txt} >Sugestões para você</Text>
        <Text  style={styles.txt2} >Animais</Text>
        <OrgSearch/>
        <Text  style={styles.txt2} >Reciclagem</Text>
        <OrgSearch2/>
        <Text  style={styles.txt2} >Causas Sociais</Text>
        <OrgSearch3/>
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