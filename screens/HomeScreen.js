import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native-web";
import { useNavigation } from "@react-navigation/native";

const HomeScreens = () => {

    const navigation = useNavigation();
    return (
        <View>
            <Text
            style = {{
                fontSize: 30,
                textAlign: "center",
                marginTop: "20%"
            }}
            >Home Screen</Text>

            <TouchableOpacity
            onPress={() => navigation.navigate("Stack")}
                style={{
                    backgroundColor: "blue",
                    padding: 20,
                    marginTop: "30%",
                    width: "50%",
                    alignSelf: "center",
                    borderRadius: 10

                }}
            >
                <Text
                    style={{
                        fontSize: 22,
                        textAlign: "center",
                        color: "white",
                        
                    }}
                >
                    Ir a los Stack Screens
                </Text>

            </TouchableOpacity>
        </View>
    );
}

export default HomeScreens;