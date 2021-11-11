import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { ToggleAnswerQuestion, ResultsContainer, ScoreText, Heading, SubHeading } from '../styles/styledComponents'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'


const Results = (props) => {

  const { navigation, route } = props

  const restartQuiz = () => {
    navigation.pop(2)
    navigation.navigate("Quiz", {
      deck: route.params.deck
    })
  }

  const backToDeck = () => {
    navigation.pop(2)
  }

  console.log("SCORE", route.params)

  if (!route.params)
    return <Text>SCORE FKN SCREEN</Text>
  const { deck, correct, incorrect } = route.params
  const diff = correct - incorrect

  return (
    <View >
      <Heading > {deck.title} </Heading>
      <SubHeading >Results for {deck.questions.length} cards </SubHeading>
      <ResultsContainer
        style={{ backgroundColor: (diff >= 0) ? "#e8ffe8" : "#fccde2" }}>
        <ScoreText
          style={{
            fontSize: 60,
            textAlign: "center",
            marginTop: 0
          }}>
          {(correct / (correct + incorrect) * 100).toFixed(1)} %
        </ScoreText>
        <View style={{ marginTop: 15 }}>
          <ScoreText >
            Correct answers   : {correct + "/" + (correct + incorrect) + " "}
            <Ionicons
              name="checkmark-outline"
              size={18} color="green"
            />
          </ScoreText>
          <ScoreText>
            Incorrect answers: {incorrect + "/" + (correct + incorrect) + " "}
            <Feather
              name="x"
              size={18}
              color="red" />
          </ScoreText>
        </View>
      </ResultsContainer>
      <ToggleAnswerQuestion onPress={restartQuiz} >
        <Text style={{ color: "grey", fontSize: 20 }}>Restart Quiz</Text>
      </ToggleAnswerQuestion>
      <TouchableOpacity
        onPress={backToDeck}
        style={{ paddingLeft: 10 }}>
        <Text style={{ color: "#3d5af1", fontSize: 20 }}>
          <Ionicons name="chevron-back-sharp" size={20} color="#3d5af1" />
          Back to Deck
        </Text>
      </TouchableOpacity>
    </View>
  )

}

export default Results