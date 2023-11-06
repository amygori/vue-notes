<template>
    <div class="note-list">
      <p>hello I am the note list</p>
    </div>
    <ul class="note-list" v-if="notes.length > 0">
      <li v-for="note in notes" :key="note.id">{{ note.title }}</li>
    </ul>
    <div v-else>No notes to display</div>
    <NoteForm @noteCreated="addNoteToList" />
</template>

<script setup>
import { ref } from 'vue'
import { getNotes } from '@/requests'
import NoteForm from './NoteForm.vue'

const notes = ref([])
getNotes().then((data) => {
  notes.value = data
})

const addNoteToList = (note) => {
  notes.value = [...notes.value, note]
}
</script>

<style></style>
