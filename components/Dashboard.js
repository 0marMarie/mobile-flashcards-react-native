import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { connect } from 'react-redux'
import DeckList from "./DeckList"
import DeckData from "./DeckData"
import AddCard from "./AddCard"
import Quiz from "./Quiz"
import Results from "./Results"

const Stack = createNativeStackNavigator()

const Dashboard = () => {
	return (
		<Stack.Navigator screenOptions={{ 
			headerStyle: { 
				backgroundColor: '#371777',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
			}}>
			<Stack.Screen name="Decks" component={DeckList} />
			<Stack.Screen name="DeckData" component={DeckData} />
			<Stack.Screen name="AddCard" component={AddCard} />
			<Stack.Screen name="Quiz" component={Quiz} />
			<Stack.Screen name="Results" component={Results} />
		</Stack.Navigator>
	)
}

export default connect()(Dashboard)