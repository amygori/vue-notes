<template>
  <div v-if="editing">
    <input type="text" v-model="newNoteTitle" />
    <textarea v-model="newNoteBody"></textarea>
    <button @click="() => saveNote(note.id)">Save</button>
    <button @click="() => editing= false">Cancel</button>
  </div>
  <li v-else>
    <div class="note-title">{{ note.title }}</div>
    <div class="note-body">{{ note.body }}</div>
    <button @click="() => editNote(note.id)">Edit note</button>
  </li>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { updateNote } from '@/requests'
const props = defineProps({
  note: Object
})

const emit = defineEmits(['noteUpdated'])

const editing = ref(false)
const newNoteTitle = ref(props.note.title)
const newNoteBody = ref(props.note.body)

const editNote = (noteId) => {
  editing.value = true
}

const saveNote = (noteId) => {
  if (!newNoteTitle.value) return
  updateNote({ id: noteId, title: newNoteTitle.value, body: newNoteBody.value }).then((updatedNote) => {
    emit('noteUpdated', updatedNote)
    editing.value = false
  })
}
</script>

<style></style>
