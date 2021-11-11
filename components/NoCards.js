import React from "react";
import { View, Text} from "react-native";
import { Center } from "../styles/styledComponents";
import { EvilIcons } from '@expo/vector-icons';

export default NoCards = () => {
  return (
    <Center>
      <View style={{ padding: 10, textAlign: 'center', marginTop: 'auto' }}>
        <EvilIcons name="question" size={90} color="#371777"
          style={{ textAlign: 'center' }}
        />
        <Text style={{ fontSize: 70, color: '#333' }}>
          Empty!
        </Text>
      </View>
      <View style={{
        padding: 10,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 'auto'
      }}>
        <Text style={{ color: 'grey', fontSize: 18 }}>
          Sorry, There are no cards on the deck !!
        </Text>
      </View>
    </Center>
  )
}