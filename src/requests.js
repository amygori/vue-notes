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

export const updateNote = (note) => {
  const { id, title, body } = note
  return fetch(`${apiBaseURL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  }).then((response) => response.json())
}

export const deleteNote = (id) => {
  return fetch(`${apiBaseURL}/${id}`, {
    method: 'DELETE'
  }).then((response) => response.json())
}
