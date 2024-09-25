import * as React from "react";
import { useContext } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { ThemeContext } from "../context/ThemeContext";




export default function MyChat() {
  const theme = useContext(ThemeContext);
  const [messages, setMessages] = React.useState([
    { id: 1, sender: 'User 1', text: 'Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
    { id: 2, sender: 'User 2', text: 'Como estássssssssssssssssssssssssssss?' },
    { id: 3, sender: 'User 1', text: 'Todo bien.' },
    { id: 4, sender: 'User 2', text: 'Ah que buenooooooooooooooooooooooooooooooooooooo' },
    { id: 5, sender: 'User 1', text: 'Qué hora es alla?' },
    { id: 6, sender: 'User 1', text: 'Quiero ir el JUEVEEEEES' },
    { id: 7, sender: 'User 2', image: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900' }
  ]);

  
  return (
    <ScrollView style={theme === 'light' ? Styles.chatContainer : Styles.chatContainerDark}>
      {messages.map((message) => (
        <View
          key={message.id}
          style={message.sender === 'User 1'
            ? (theme === 'light' ? Styles.messageUser1 : Styles.messageUser1Dark)
            : (theme === 'light' ? Styles.messageUser2 : Styles.messageUser2Dark)
          }
        >
          {/* Renderizar texto si el mensaje tiene texto */}
          {message.text && (
            <Text style={theme === 'light' ? Styles.messageText : Styles.messageTextDark}>
              {message.text}
            </Text>
          )}

          {/* Renderizar imagen si el mensaje tiene una propiedad image */}
          {message.image && (
            <Image
              source={{ uri: message.image }}
              style={Styles.messageImage} 
              resizeMode="contain"
            />
          )}
        </View>
      ))}
    </ScrollView>
  );
}
