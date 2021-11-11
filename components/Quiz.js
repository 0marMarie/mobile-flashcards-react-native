import React from "react";
import { useState, useEffect } from 'react';
import { View, Text} from "react-native";
import { connect } from 'react-redux'
import { clearLocalNotification, setLocalNotification } from "../utils/helpers"
import NoCards from './NoCards'
import { 
  ShowAnswerContainer,
  ToggleAnswerQuestion,
  CorrectButton,
  IncorrectButton
} from "../styles/styledComponents";

const Quiz = (props) => {

  const [questions, setQuestions] = useState(null)
  const [correct, setCorrect] = useState(0)
  const [incorrect, setIncorrect] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const { route, navigation } = props

  // Make use effect run only on the first run
  useEffect(() => {
    const questions = route.params.deck.questions
    setQuestions(questions)
    clearLocalNotification().then(setLocalNotification())
  }, [])

  const handleShowAnswer = (e) => {
    setShowAnswer(!showAnswer)
  }

  const removeQuestion = (inc1, inc2) => {
    let popQuestions = questions
    popQuestions = popQuestions.slice(1)
    console.log(popQuestions)
    setQuestions(popQuestions)
    if (popQuestions.length <= 0) {
      navigation.navigate("Results", {
        deck: route.params.deck,
        correct: (correct + inc1),
        incorrect: (incorrect + inc2)
      })
    }
  }

  const hanldeCorrect = () => {
    setCorrect(correct + 1)
    removeQuestion(1, 0)
    setShowAnswer(false)
    console.log(correct)
    console.log(questions)
  }

  const handelIncorrect = () => {
    setIncorrect(incorrect + 1)
    removeQuestion(0, 1)
    setShowAnswer(false)
  }

  const { deck } = props.route.params

  if (!questions || questions.length <= 0)
    return (<NoCards />)

  const { question, answer } = questions[0]

  return (
    <View>
      <Text style={{ fontSize: 36, textAlign: "center", marginTop: 20 }}>{deck.title}</Text>
      <Text style={{ fontSize: 16, textAlign: "center", color: 'grey' }}>{questions.length} cards remaining</Text>
      <ShowAnswerContainer style={{ marginTop: 58 }}>
        <Text style={{ fontSize: 20 }}>
          {!showAnswer
            ? <Text style={{ color: 'black' }}>{question}</Text>
            : <Text style={{ color: 'green' }}>{answer}</Text>
          }
        </Text>
      </ShowAnswerContainer>
      <ToggleAnswerQuestion onPress={handleShowAnswer}>
        <Text style={{ color: "grey" }}>{!showAnswer ? "Click to View Answer.." : "Show Question"}</Text>
      </ToggleAnswerQuestion>
      <CorrectButton onPress={hanldeCorrect}>
        <Text style={{ color: "green", fontSize: 28 }}>A. Correct</Text>
      </CorrectButton>
      <IncorrectButton onPress={handelIncorrect}>
        <Text style={{ color: "red", fontSize: 28 }}>B. Incorrect</Text>
      </IncorrectButton>
    </View>
  )
}

export default connect()(Quiz)