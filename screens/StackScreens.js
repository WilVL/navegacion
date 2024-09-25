import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native-web";
import MyChat from "../src/components/MyChat";
import { ThemeContext } from "../src/context/ThemeContext";
import { myColors } from "../src/styles/Colors";
import { useState } from 'react';

const StackScreens = () => {
    const [theme, setTheme] = useState('light');

    return (
        <View>
            <Text
            style = {{
                fontSize: 30,
                textAlign: "center",
                marginTop: "20%"
            }}
            >Stack Screen</Text>
        </View>
    );
}

export default StackScreens;