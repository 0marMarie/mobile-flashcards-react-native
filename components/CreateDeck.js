// Import External Modules
import React, { useState } from "react"
import { Text } from "react-native"
import { connect } from "react-redux"
// Import Internal Modules
import { submitDeck } from "../utils/api"
import { formatDeck } from "../utils/_deck"
import { createDecks } from "../actions/index"
// Import Styles
import { Center, Heading, Input, Button, DisabledButton } from "../styles/styledComponents"

const CreateDeck = (props) => {
  // State
  const [Title, setTitle] = useState('')
  // Props
  const { dispatch, navigation } = props
  // Handle Pressing Submit to add new deck
  const handlePress = () => {
    const myDeck = formatDeck(Title)
    submitDeck(myDeck)
      .then(() => {
        dispatch(createDecks(myDeck))
        setTitle("")
        navigation.navigate("DeckList")
        navigation.navigate("DeckData", {
          deckId: Object.keys(myDeck)[0]
        })
      })
  }
  // Handle Changing the Deck Title text
  const handleChange = (evt) => {
    setTitle(evt)
  }
  return (
    <Center>
      <Heading
        style={{ marginTop: 100, padding: 10 }}
      > What is the title of your new deck ? </Heading>
      <Input
        placeholder="Create a new deck ...."
        value={Title}
        onChangeText={handleChange}>
      </Input>
      {
        Title ?
          (
            <Button
              onPress={handlePress}
            >
              <Text style={[{ color: "white" }, { textAlign: 'center' }]}>Create Deck</Text>
            </Button>
          ) :
          (
            <DisabledButton
              disabled
            >
              <Text style={[{ color: "white" }, { textAlign: 'center' }]}>Create Deck</Text>
            </DisabledButton>
          )
      }
    </Center>
  )
}

export default connect()(CreateDeck)