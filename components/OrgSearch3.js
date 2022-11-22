import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';


export default function OrgSearch3({}) {
    return (
        <View style={styles.full}>
            <View style={styles.fotonome}>
                    <Image style={styles.foto} source={require('../assets/post.png')}/>
                    <Text style={styles.texto} >Amigos da Esperança</Text>
            </View>
            <Text style={styles.texto2} >Somos uma ONG de Leopoldina Minas Gerais, e estamos a 15 anos ajudando pessoas em situação de rua</Text>
        </View>
    );
  }

  const styles = StyleSheet.create({

    foto:{
        height:100,
        width:100,
        borderRadius:10,
    },

    full:{
        backgroundColor:'#e7e9e8',
        padding:5,
        maxWidth:400,
        minHeight:110,
        maxHeight:110,
        borderRadius:7,
        marginBottom:30,
    },

    texto:{
        marginTop:2,
        fontSize:18,
        fontWeight:'bold',
        marginLeft:10
    },

    texto2:{
        marginTop:-76,
        marginLeft:110
    },

    fotonome:{
        display:'flex',
        flexDirection:'row',
    },

  });