import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { vh, vw, vmax } from 'react-native-expo-viewport-units';


export default function OrgSearch(props) {
    return (
        <View style={styles.center} >
            <View style={styles.full}>
                <View style={styles.fotonome}>
                        <Image style={styles.foto} source={require('../assets/branco.png')}/>
                        <Text style={styles.NomeOrg} >{props.NomeOrg}</Text>
                </View>
                <Text style={styles.texto2} >Telefone: {props.Telefone}</Text>
                <Text style={styles.texto2} >Cidade: {props.Cidade}</Text>
                <Text style={styles.texto2} >Pix: {props.ChavePix}</Text>
                
            </View>
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
      },

    foto:{
        height:100,
        width:100,
        borderRadius:10,
    },

    full:{
        backgroundColor:'#e7e9e8',
        padding:vw(1),
        width:vmax(45),
        height: vmax(13.5),
        borderRadius:7,
        marginBottom:vh(2),
    },

    NomeOrg:{
        marginLeft:vw(2),
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        paddingTop:vh(0.9),
    },

    texto2:{
        marginLeft:vw(27),
        marginTop:vh(-4.4)
    },

    fotonome:{
        display:'flex',
        flexDirection:'row',
        textAlign:'center'
    },

  });