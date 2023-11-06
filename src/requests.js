const apiBaseURL = 'http://localhost:3000/notes'
export const getNotes = () => {
  return fetch(apiBaseURL).then((response) => response.json())
}

export const createNote = (note) => {
  const { title, body } = note
  return fetch(apiBaseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body, createdAt: new Date() })
  }).then((response) => response.json())
}
