import React from 'react';
import {View, Text,StyleSheet} from 'react-native';


const BoxScreen=()=>{

    return (<View style={styles.parentStyle}>
        
       
  <View style={styles.viewOneStyle}/>
     <View style={styles.viewParenttwo}><View style={styles.viewTwoStyle}/></View>
  <View style={styles.viewThreeStyle}/>
        </View>
    );
};
const styles=StyleSheet.create({
    parentStyle:{
        borderColor:'black',
        borderWidth:3,
       height:200,
       /*height:100,*/
        flexDirection:'row',
        justifyContent:'space-between',

    },

    viewOneStyle:{
        height:50,
        width:50,
        backgroundColor:'green'
        
    },
    viewTwoStyle:{
        height:50,
        width:50,
        backgroundColor:'blue',
        /*marginTop:50,*/
        /*alignSelf:'flex-end',*/
        /*top:50*/
    },
    viewParenttwo:{
        height:100,
        justifyContent:'flex-end'
    },
    viewThreeStyle:{
        height:50,
        width:50,
        backgroundColor:'red'
    }
});

export default BoxScreen;