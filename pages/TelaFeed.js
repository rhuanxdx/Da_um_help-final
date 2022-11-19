import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Topbar from '../components/TopBar';
import Post from '../components/Post';
import Post2 from '../components/Post2';
import Post3 from '../components/Post3';
import Post4 from '../components/Post4';
import Post5 from '../components/Post5';

export default function TelaFeed() {

    return(
      <View style={styles.center}>
        <Topbar/>
        
        <ScrollView showsVerticalScrollIndicator={false}> 

        <View style={{paddingTop:10}}></View>

          <Post/>

          <Post2/>

          <Post3/>

          <Post4/>

          <Post5/>

        <View style={{paddingTop:55}}></View>

        </ScrollView>
        
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