import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../screen/Movies';
import Tv from '../screen/Tv';
import Search from '../screen/Search';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import { FontAwesome5 } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

const Tab = () => {
    const isDark = useColorScheme() == "dark"
    return (
        <Tabs.Navigator 
            initialRouteName= {"Tv"}
            screenOptions={{
                tabBarActiveTintColor : isDark ? "#ffc130":"#8425f8",
                tabBarInactiveTintColor : isDark ?"#9e9e9e" : "#9e9e9e",
                headerTintColor: isDark ? "#ffc130":"#8425f8",
                headerStyle: {
                    backgroundColor: isDark ? "#292929":"#ffffff",
                  },
                tabBarStyle :{
                    backgroundColor: isDark ? "#292929":"#ffffff",
                }
            }} 
        >
            <Tabs.Screen 
                name="Movies" 
                component={Movies} 
                options={{tabBarIcon : ({focused, color, size})=> {return (<FontAwesome5 name ={"film"} color={color} size={size}/>)}}}
            />
            <Tabs.Screen 
                name="Tv" 
                component={Tv} 
                options={{tabBarIcon : ({focused, color, size})=> <FontAwesome5 name ={"tv"} color={color} size={size}/>}}
            />
            <Tabs.Screen 
                name="Search" 
                component={Search} 
                options={{tabBarIcon : ({focused, color, size})=> <FontAwesome5 name ={"search"} color={color} size={size}/>}}
            />
        </Tabs.Navigator>
    )
}
export default Tab;