import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tab from './Tab';
import Stack from './Stack';
const RootNav = createNativeStackNavigator();

const Root =() => {
    return <RootNav.Navigator initialRouteName={"Tabs"} screenOptions={{headerShown : false, presentation : "modal", animation : "flip"}} >
        <RootNav.Screen name={"Tabs"} component={Tab}/>
        <RootNav.Screen name={"Stacks"} component={Stack}/>
    </RootNav.Navigator>
}

export default Root;