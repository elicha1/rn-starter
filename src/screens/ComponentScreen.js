import React from 'react';
import {Text,StyleSheet,View} from 'react-native';



/* create compo*/
const ComponentScreen=()=>{
    const name= "aicha";
    return <View>
        <Text style={styles.textStyle}>Getting started with react native!</Text>
        <Text style={{fontSize:20}}>My name is {name}.</Text>
        </View>
}
/* styling*/
const styles=StyleSheet.create({
    textStyle:{
        fontSize:45
    }
});
/*/export compo*/
export default ComponentScreen;