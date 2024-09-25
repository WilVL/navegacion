import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


//Screens
import HomeScreens from "./screens/HomeScreen";
import SettingScreens from "./screens/SettingsScreens";
import StackScreens from "./screens/StackScreens";

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();

function MyStacks() {
    return(
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreens"
        >
           <HomeStackNavigator.Screen
                name="Calculadora"
                component={HomeScreens}
           
           />
           <HomeStackNavigator.Screen
                name="Stack"
                component={StackScreens}
                options={{
                    headerBackTitleVisible: false,
                }}

           /> 
        </HomeStackNavigator.Navigator>
    );
}

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
              tabBarActiveTintColor: 'blue'  
            }}
        >
            <Tab.Screen 
            name="Home" 
            component={MyStacks}
            options={{
                tabBarLabel: 'Calculadora',
                tabBarIcon: ({color, size}) => (
                    <AntDesign name="calculator" size={30} color="black" />
                ),
                tabBarBadge: 13,
               headerShown: false,
            }}
            />
            <Tab.Screen 
            name="Settings" 
            component={SettingScreens}
            options={{
                tabBarLabel: 'Chat',
                tabBarIcon: ({color, size}) => (
                    <AntDesign name="wechat" size={30} color="black" />
                ),
                tabBarBadge: 23,
                headerShown: false,
            }}
            />

        </Tab.Navigator>
    );
}

export default function Navigation() {
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>

    );
}