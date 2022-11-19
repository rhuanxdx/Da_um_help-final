import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import * as React from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons";



export default function Post() {
    return (
        
      <View style={styles.fullpost}>

        

            <View style={styles.org}>
                <Image style={styles.fotoOrg} source={require('../assets/post5.png')}/>
                <Text style={styles.nomeOrg}>ONG Nossa Esperança</Text>
            </View>
            <Image style={styles.foto} source={require('../assets/post5.png')}/>
            <Image style={styles.like} source={require('../assets/heart.png')}/>
            <Text style={styles.texto} >Cuidem de nossas crianças pois elas são o futuro de tudo que temos</Text>

      </View>
    );
  }

  const styles = StyleSheet.create({

    foto:{
        height:400,
        width:380,
        borderRadius:10,
    },

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

    fotoOrg:{
        height:30,
        width:30,
        borderRadius:50,
        marginRight:5,
    },

    fullpost:{
        backgroundColor:'#e7e9e8',
        padding:5,
        maxWidth:400,
        borderRadius:7,
        marginBottom:30,
    },

    texto:{
        marginTop:2,
        fontSize:18,
    },

    like:{
        marginTop:3,
        padding:5,
        height:20,
        width:20,
    },

  });