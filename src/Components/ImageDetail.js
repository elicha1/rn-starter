import React from 'react';
import{Text,StyleSheet,Image, View} from 'react-native';

const ImageDetail=({ImageSource,title,ImageScore})=>{
 return <View>
     <Image source={ImageSource}/>
     <Text>{title}</Text>
     <Text> Image score- {ImageScore}</Text>
 </View>
};

const styles = StyleSheet.create({});


export default ImageDetail;