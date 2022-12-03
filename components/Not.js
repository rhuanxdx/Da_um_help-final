import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { vh, vw, vmax } from 'react-native-expo-viewport-units';

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
        marginBottom:vh(0.5),
        textAlign:'center',
        alignItems:'center',
    },

    nomeOrg:{
        fontSize:15,
        fontWeight:'bold',
    },

    fullpost:{
        backgroundColor:'#e7e9e8',
        padding:vh(1),
        width:vw(95),
        borderRadius:7,
        marginBottom:vh(1),
    },

  });