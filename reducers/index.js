import { combineReducers } from 'redux'
import { RECEIVE_DECKS, CREATE_DECK, ADD_CARD, REMOVE_DECK } from "../actions"

export function index(state = {}, action) {
	switch (action.type) {
		case RECEIVE_DECKS:
			const {index} = action
			return {
				...(index)
			}
		case CREATE_DECK:
			const {deck} = action
			return {
				...state,
				...deck
			}
		case ADD_CARD:
			const { deckId, question, answer} = action
			return {
				...state,
				[action.deckId]: {
					...state[deckId],
					questions: state[deckId].questions
					.concat({
						question,
						answer
					})
				}
			}
		case REMOVE_DECK:
			const newState = { ...state }
			delete newState[action.deckId]
			return newState
		default:
			return state
	}
}

export default combineReducers({
	index
})