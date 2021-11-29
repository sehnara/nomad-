import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../screen/Movies';
import Tv from '../screen/Tv';
import Search from '../screen/Search';

const Tabs = createBottomTabNavigator();

const Tab = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Movies" component={Movies}/>
            <Tabs.Screen name="Tv" component={Tv}/>
            <Tabs.Screen name="Search" component={Search}/>
        </Tabs.Navigator>
    )
}
export default Tab;