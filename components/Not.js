import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default function Not(props) {
    return (
      <View style={styles.fullpost}>

            <View style={styles.org}>
                <Text style={styles.nomeOrg}>ONG Nossa Esperança</Text>
            </View>
            
            <Text style={styles.texto}>{props.msg}</Text>

      </View>
    );
  }

  const styles = StyleSheet.create({

    org:{
        display:'flex',
        flexDirection:'row',
        marginBottom:8,
        textAlign:'center',
        alignItems:'center',
    },

    nomeOrg:{
        fontSize:15,
        fontWeight:'bold',
    },

    fullpost:{
        backgroundColor:'#e7e9e8',
        padding:5,
        minWidth:380,
        borderRadius:7,
        marginBottom:5,
    },

  });