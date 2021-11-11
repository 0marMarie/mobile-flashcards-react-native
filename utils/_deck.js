// Generate New Id
function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

// Formate the deck Function
export function formatDeck(title) {
  const key = generateUID()
  return {
    [key]: {
      key,
      title,
      questions: []
    }
  }
}