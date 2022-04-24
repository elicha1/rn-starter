import React ,{ useReducer } from 'react';
import {Text,StyleSheet,Button,View} from 'react-native';


const reducer=(state,action)=>{
    switch(action.type){
  case 'increment':
        return {...state,count:state.count+action.payload};
case 'decrement':
    return {...state,count:state.count-action.payload};
    default : 
    return state;}
};

const ConterScreen =()=>{
    const [state,dispatch]=useReducer(reducer, {count:0});
    const count=state;
    return <View>
      <Button onPress={()=>dispatch({type:'increment',payload:1})}
  title='Increase Counter'/>
      <Button onPress={()=>dispatch({type:'decrement',payload:1})}
  title='Decrease Counter'/>
  <Text> Counter value is : {state.count}</Text>
    
    </View>;
    /*
    const [counter, setCounter]=useState(0);
    return <View>
      <Button onPress={()=>setCounter(counter+1)}
  title='Increase Counter'/>
      <Button onPress={()=>setCounter(counter-1)}
  title='Decrease Counter'/>
  <Text> Counter value is : {counter}</Text>
    </View>*/
};
const styles =StyleSheet.create({});
export default ConterScreen;