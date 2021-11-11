// External Imports
import React from "react"
import { Text} from "react-native"
import { connect } from "react-redux"
// Styles
import { MainDeckButton, MainDeckText } from "../styles/styledComponents"

const HomeCards = (props) => {

  const { navigation, deck } = props

  const handleSubmit = () => {
    navigation.navigate("DeckData", { deckId: deck.key })
  }

  return (
    <MainDeckButton onPress={handleSubmit}>
      <MainDeckText >{deck.title}</MainDeckText>
      {console.log('IIIIiiiiiiiiiiiIIIII')}
      <Text style={{ color: 'grey' }} >{deck.questions.length} cards</Text>
    </MainDeckButton>
  )
}

const mapStateToProps = ({ index }, { deckId }) => {
  return {
    deck: index[deckId],
  }
}

export default connect(mapStateToProps)(HomeCards)