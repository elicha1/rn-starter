import React ,{useState}from 'react';
import {View,Text,StyleSheet, TextInput} from 'react-native';

const TextScrean =()=>{

    const [name, setName]=useState('');

    return (<View>
        <Text>Enter your name / password:</Text>
        <TextInput style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={(newValue)=>setName(newValue)}/>
        <Text> My name is {name}</Text>
        { name.length <5? <Text>pasword must be longer then 5 characters</Text>: null}
    </View>);
};
const styles=StyleSheet.create({
    input:{
        margin: 15,
        borderColor: "black",
        borderWidth:1
    }
});
export default TextScrean;