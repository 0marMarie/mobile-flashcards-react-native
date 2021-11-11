// Import External Modules
import React, { useState } from "react"
import { Text } from "react-native"
import { connect } from 'react-redux'
//Import Internal Modules
import { addNewCard } from "../utils/api"
import { addCard } from "../actions/index"
// Import Styles
import {Center, Input, Button, DisabledButton} from "../styles/styledComponents"


const AddCard = (props) => {
  // State
  const [quizQuestion, setQuizQuestion] = useState('')
  const [quizAnswer, setQuizAnswer] = useState('')
  // Props
  const { dispatch, navigation, route } = props
  // Handle Change Q Input
  const changeQuizQuestionText = (evt) => {
    setQuizQuestion(evt)
  }
  // Handle Change A Input
  const changeQuizAnswerText = (evt) => {
    setQuizAnswer(evt)
  }
  // Handle Submit Button
  const handleSubmit = () => {
    const id = route.params.deckId
    addNewCard(quizQuestion, quizAnswer,id)
      .then(() => {
        navigation.pop(1)
        dispatch(addCard(quizQuestion,quizAnswer,id))
      })
  }
  return (
    <Center>
      <Input
        style={{ marginTop: 70 }}
        value={quizQuestion}
        onChangeText={changeQuizQuestionText}
        placeholder="Enter Quiz Question ....">
      </Input>
      <Input
        style={{ marginTop: 10 }}
        value={quizAnswer}
        onChangeText={changeQuizAnswerText}
        placeholder="Enter Quiz Answer ....">
      </Input>
      {
        quizQuestion && quizAnswer ?
          (
            <Button
              onPress={handleSubmit}
            >
              <Text style={[{ color: "white" }, { textAlign: 'center' }]}>Submit</Text>
            </Button>
          ) :
          (
            <DisabledButton
              disabled
            >
              <Text style={[{ color: "white" }, { textAlign: 'center' }]}>Add Quiz</Text>
            </DisabledButton>
          )
      }
    </Center>)
}

export default connect()(AddCard)