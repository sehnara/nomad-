import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity, View } from 'react-native';

const Stacks = createNativeStackNavigator();

const ScreenOne = ({navigation : {navigate}}) =>{
    return <TouchableOpacity onPress={()=>navigate("Two")}><Text>One</Text></TouchableOpacity>
}
const ScreenTwo = ({navigation:{navigate}}) =>{
    return <TouchableOpacity onPress={()=>navigate("Three")}><Text>Two</Text></TouchableOpacity>
}
const ScreenThree = ({navigation:{goBack}}) =>{
    return <TouchableOpacity onPress={()=>goBack()}><Text>Three</Text></TouchableOpacity>
}


const Stack = () =>{
    return <Stacks.Navigator 
        screenOptions={{headerBackTitleVisible : false, presentation : "modal"}}
        
    >
        <Stacks.Screen name={"One"} component={ScreenOne}/>
        <Stacks.Screen name={"Two"} component={ScreenTwo}/>
        <Stacks.Screen name={"Three"} component={ScreenThree}/>
    </Stacks.Navigator>
}

export default Stack;