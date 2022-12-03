import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';



export default function OrgSearch(props) {
    return (
        <View style={styles.full}>
            <View style={styles.fotonome}>
                    <Image style={styles.foto} source={require('../assets/post.png')}/>
                    <Text style={styles.texto} >{props.NomeOrg}</Text>
            </View>
            <Text style={styles.texto2} >Cidade: {props.Cidade}</Text>
            <Text style={styles.texto2} >Telefone: {props.Telefone}</Text>
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
        marginLeft:110
    },

    fotonome:{
        display:'flex',
        flexDirection:'row',
    },

  });