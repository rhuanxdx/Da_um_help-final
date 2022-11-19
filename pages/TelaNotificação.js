import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Topbar from '../components/TopBar';
import Not from '../components/Not'

export default function App() {

    return(
      <View style={styles.center}>
        <Topbar/>
          <Not msg = "JoãoMarcio_Alves curtiu sua publicação"/>
          <Not msg = "Nena.Martins curtiu sua publicação"/>
          <Not msg = "CaioLIndo curtiu sua publicação"/>
          <Not msg = "DiegoCosta curtiu sua publicação"/>
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


  });