import React from "react";
import { FlatList, Text} from "react-native";
import { connect } from 'react-redux'
import HomeCards from "./HomeCards"


const DeckList = (props) => {
  // Props
  const { navigation, index } = props

  const handleHomeCards = ({ data }) => {
    console.log("KEY", data)
    return (<HomeCards key={data} deckId={data} navigation={navigation} />)
  }
  // if the decks data is still loading .. to handle navigation
  if (!index)
    return (<Text>The Page is Loading....</Text>)

  return (
    <FlatList
      data={Object.keys(index)}
      handleHomeCards={handleHomeCards}
      keyExtractor={(data) => data}
    />
  )
}

const mapStateToProps = ({ index }) => {
  return {
    index
  }
}

export default connect(mapStateToProps)(DeckList)