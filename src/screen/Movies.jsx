import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Movies = ({navigation : {navigate}}) =>{
    return <TouchableOpacity 
        style={{flex:1, justifyContent: "center", alignItems:"center"}} 
        onPress={()=>navigate("Stacks", {screen : "One"})}
    >
        <Text>Movies</Text>
    </TouchableOpacity>
}
export default Movies