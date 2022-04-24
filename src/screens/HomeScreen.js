import React from 'react';
import { Text, StyleSheet,View,Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return <View> 
    <Text style={styles.text}>Hello It's me !</Text>
  <Button title='Go to Components Demo'
  onPress={()=>navigation.navigate('Component')}/>
  <Button onPress={()=>navigation.navigate('List')}
  title='Go to list demo'/>
    <Button onPress={()=>navigation.navigate('Image')}
  title='Go to image  demo'/>
  <Button onPress={()=>navigation.navigate('Counter')}
  title='Go to counter demo'/>
  <Button onPress={()=>navigation.navigate('Color')}
  title='Go to color demo'/>
   <Button onPress={()=>navigation.navigate('Square')}
  title='Go to square demo'/>
    <Button onPress={()=>navigation.navigate('Text')}
  title='Go to text demo'/>
  <Button onPress={()=>navigation.navigate('Box')}
  title='Go to Box demo'/>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
