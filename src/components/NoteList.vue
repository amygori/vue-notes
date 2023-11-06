<template>
  <div class="note-list">
    <p>hello I am the note list</p>
  </div>
  <ul class="note-list" v-if="notes.length > 0">
    <li v-for="note in notes" :key="note.id">{{ note.title }}</li>
  </ul>
  <div v-else>No notes to display</div>
</template>

<script setup>
import { ref } from 'vue'
const notes = ref([])
const getNotes = () => {
  fetch('http://localhost:3000/notes')
    .then((response) => response.json())
    .then((data) => {
      notes.value = data
    })
}
getNotes()
</script>

<style></style>
