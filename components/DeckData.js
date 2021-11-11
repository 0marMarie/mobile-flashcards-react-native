// External Modules
import React from "react";
import { Text} from "react-native";
//Internal Modules
import { connect } from "react-redux"
import { deleteDeck } from "../utils/api"
import { removeDeck } from "../actions/index"
//Styles
import {
  Center,
  Heading,
  SubHeading,
  AddCardButton,
  AddCardText,
  StartQuizButton,
  DeleteButton }
  from "../styles/styledComponents";


const DeckData = (props) => {
  // Props
  const { navigation, deck, dispatch, route } = props
  // Handling add new card 
  const handleAddCard = (e) => {
    navigation.navigate("AddCard", {
      deckId: route.params.deckId
    })
  }
  // Handling starting a new quiz
  const handleStartQuiz = () => {
    navigation.navigate("Quiz", {
      deck
    })
  }
  // Handling deleting a deck data
  let handleDeleteDeck = () => {
    deleteDeck(route.params.deckId)
      .then(() => {
        dispatch(removeDeck(route.params.deckId))
        navigation.pop(10)
      })
  }
  // To handle the navigation transform
  if (!deck)
    return <Text>Data is Not Availiable..</Text>
  
  return (
    <Center>
      <Heading style={{ marginTop: 90 }}>{deck.title}</Heading>
      <SubHeading>{deck.questions.length} cards</SubHeading>
      <AddCardButton onPress={handleAddCard} >
        <AddCardText > Add Card </AddCardText>
      </AddCardButton>
      <StartQuizButton
        onPress={handleStartQuiz} >
        <AddCardText
          style={{ color: "white" }}>
          Start Quiz
        </AddCardText>
      </StartQuizButton>
      <DeleteButton onPress={handleDeleteDeck} >
        <AddCardText style={{ color: "red" }}>
          Delete Deck
        </AddCardText>
      </DeleteButton>
    </Center>
  )
}

const mapStateToProps = ({ index }, props) => {
  const deckId = props.route.params.deckId
  return {
    deck: index[deckId]
  }
}

export default connect(mapStateToProps)(DeckData)