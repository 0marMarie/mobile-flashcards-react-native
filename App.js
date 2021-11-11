import React, { useEffect } from "react";
import { Provider } from "react-redux"
import { createStore } from 'redux'
import reducer from "./reducers"
import { fetchData } from "./utils/api"
import { setLocalNotification } from "./utils/helpers"
import { receiveDecks } from "./actions/index"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Dashboard from "./components/Dashboard"
import CreateDeck from "./components/CreateDeck"

const Tabs = createBottomTabNavigator()

const App = () => {
  const store = createStore(reducer)
  useEffect(() => {
    fetchData()
    .then((res) => {
      store.dispatch(receiveDecks(res))
    })
    setLocalNotification()
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer >
        <Tabs.Navigator screenOptions={{ headerShown: false }} >
          <Tabs.Screen
            name="DeckList"
            component={Dashboard}
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons
                  style={{}}
                  name="home"
                  size={34}
                  color="#371777"
                />
              )
            }}
          />
          <Tabs.Screen
            name="Add Deck"
            component={CreateDeck}
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons
                  style={{}}
                  name="plus"
                  size={34}
                  color="#371777"
                />
              )
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </Provider>
  )

}

export default App