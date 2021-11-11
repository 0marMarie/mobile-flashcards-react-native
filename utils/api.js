// Note: used here some helper functions and code
import { AsyncStorage } from "react-native"

const DECKS_ID = "decks"

// Get all the data stored on Async Storage
export function fetchData() {
	return AsyncStorage.getItem(DECKS_ID)
	.then((res) => {
		return JSON.parse(res)
	})
}

// Add the new deck to the Async Storage
export function submitDeck(deck) {
	return AsyncStorage
	.mergeItem(DECKS_ID, JSON.stringify({ ...deck }))
}

// Remove Deck : fetch then remove
export function deleteDeck(deckId) {
	return fetchData()
	.then((res) => {
		delete res[deckId]
		AsyncStorage.setItem(DECKS_ID, JSON.stringify({ ...res }))
	})
}

// Add New Card to a Specific Deck
export function addNewCard(q, a, id) {
	return fetchData().then((res) => {
		AsyncStorage.mergeItem(DECKS_ID, JSON.stringify({
			[id]: {
				...res[id],
				questions: res[id].questions
					.concat({q,a})
			}
		}))
	})
}


