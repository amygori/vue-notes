<template>
  <div class="note-form">
    <form @submit.prevent="addNote">
      <div>
        <label for="note-title">New note title</label>
        <input type="text" v-model.trim="newNoteTitle"  />
      </div>
      <div>
        <label for="note-body">New note body</label>
        <textarea v-model.trim="newNoteBody" ></textarea>
      </div>
      <div>
        <button type="submit" :disabled="!newNoteTitle">Add note</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { createNote } from '@/requests'
const newNoteTitle = ref('')
const newNoteBody = ref('')

const emit = defineEmits(['noteCreated'])

const addNote = () => {
  if (!newNoteTitle.value) return
  createNote({ title: newNoteTitle.value, body: newNoteBody.value }).then((createdNote) => {
    emit('noteCreated', createdNote)
    resetForm()
  })
}

const resetForm = () => {
  newNoteTitle.value = ''
  newNoteBody.value = ''
}

</script>

<style></style>
