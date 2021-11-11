// Create Action Types
export const RECEIVE_DECKS = "RECEIVE_DECKS"
export const CREATE_DECK = "CREATE_DECK"
export const REMOVE_DECK = "REMOVE_DECK"
export const ADD_CARD = "ADD_CARD"

// Recive the decks action creator
export function receiveDecks(index)
{
	return {
		type: RECEIVE_DECKS,
		index
	}
}

// Create the decks action creator
export function createDecks(deck)
{
	return {
		type: CREATE_DECK,
		deck
	}
}

// Add the card action creator.. to a deck
export function addCard(question, answer, deckId) {
	return {
		type: ADD_CARD,
		question,
		deckId,
		answer
	}
}

// Remove the deck action creator
export function removeDeck(deckId)
{
	return {
		type: REMOVE_DECK,
		deckId
	}
}






