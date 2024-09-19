import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


//Screens
import HomeScreens from "./screens/HomeScreen";
import SettingScreens from "./screens/SettingsScreens";
import StackScreens from "./screens/StackScreens";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();

function MyStacks() {
    return(
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreens"
        >
           <HomeStackNavigator.Screen
                name="HomeScreens"
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
                tabBarLabel: 'Para ti',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="home-variant" size={30} color={color} />
                ),
                tabBarBadge: 13,
               headerShown: false,
            }}
            />
            <Tab.Screen 
            name="Settings" 
            component={SettingScreens}
            options={{
                tabBarLabel: 'Perfil',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="account-tie" size={30} color={color} />
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