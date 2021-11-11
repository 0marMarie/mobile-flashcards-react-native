import styled from 'styled-components/native'


// AddCard Styles
export const Center = styled.View`
  flex: 1;
	justify-content: flex-start;
	align-items: center;
	padding: 5px;
`;

export const Heading = styled.Text`
	font-size: 35px;
	text-align: center;
	margin-top: 20px;
	font-weight: 600;
	color: #333;
`

export const Input = styled.TextInput`

	background: white;
	align-self: stretch;
	margin: 20px;
	border-radius: 5px;
	elevation: 5;
	padding: 10px;
	border: 1px solid black;
`
export const Button = styled.TouchableOpacity`
	background: #333;
	padding: 18px;
	margin-top: 220px;
	border-radius: 5px;
	width: 220px;
`
export const DisabledButton = styled.TouchableOpacity`
	background: grey;
	padding: 18px;
	margin-top: 220px;
	border-radius: 5px;
	width: 220px;
`

// MainDeck Styles

export const MainDeckButton = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	margin-bottom: 10px;
	padding: 40px ;
`
export const MainDeckText = styled.Text`
	font-size: 28px;
	margin-bottom: 2px;
	color: #333;
`

// DeckData
export const SubHeading = styled.Text`
	font-size: 18px;
	text-align: center;
	color: grey;
`

export const AddCardButton = styled.TouchableOpacity`
	background: #ffffff;
	border: 1px solid black;
	border-radius: 5px;
	padding: 15px;
	width: 220px;
	margin-top: 100px;
`
export const AddCardText = styled.Text`
	text-align: center;
	color: black;
	font-size: 16px;
`
export const StartQuizButton = styled.TouchableOpacity`
	background: #333;
	border: 1px solid black;
	border-radius: 5px;
	padding: 15px;
	width: 220px;
	margin-top: 20px;
`

export const DeleteButton = styled.TouchableOpacity`
	padding: 15px;
	width: 220px;
	margin-top: 20px;
`

// Quiz

export const ShowAnswerContainer = styled.View`
	width: 85%;
	border: 1px solid black;
	border-radius: 5px;
	padding: 15px;
	background: #fff;
	margin: auto;
`

export const ToggleAnswerQuestion = styled.TouchableOpacity`
	padding: 15px;
	margin-top: 3px;
	margin-left: 15px;
`

export const CorrectButton = styled.TouchableOpacity`
	border: 1px solid green;
	background: #e8ffe8;
	border-radius: 5px;
	padding: 10px;
	margin-left: 25px;
	margin-right: 25px;
	margin-top: 80px;
`
export const IncorrectButton = styled.TouchableOpacity`
	border: 1px solid red;
	background: #fccde2;
	border-radius: 5px;
	padding: 10px;
	margin-left: 25px;
	margin-right: 25px;
	margin-top: 10px;
`

// Scorescreen
export const ResultsContainer = styled.View`
	padding: 20px;
	width: 85%;
	border: 1px solid grey;
	border-radius: 5px;
	align-self: stretch;
	margin: 10px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 30px;
	
`

export const ScoreText = styled.Text`
	color: #666;
	font-size: 18px;
`