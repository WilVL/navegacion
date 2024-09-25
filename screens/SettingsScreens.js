import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native-web";
import MyChat from "../src/components/MyChat";
import { ThemeContext } from "../src/context/ThemeContext";
import { myColors } from "../src/styles/Colors";
import { useState } from 'react';


const SettingScreens = () => {
    const [theme, setTheme] = useState('light');
    return (
        <ThemeContext.Provider value={theme}>
        <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
          <Switch
            value={theme === 'dark'}
            onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
          <MyChat />
        </SafeAreaView>
      </ThemeContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: myColors.light,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    messageImage: {
        width: 200,   // Ajusta el tamaño según sea necesario
        height: 200,
        borderRadius: 10,
        marginTop: 5,
      },

  });


export default SettingScreens;