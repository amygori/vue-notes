<template>
  <div v-if="editing">
    <input type="text" v-model="newNoteTitle" />
    <textarea v-model="newNoteBody"></textarea>
    <button @click="() => saveNote(note.id)">Save</button>
    <button @click="() => editing=false">Cancel</button>
  </div>
  <li v-else>
    <div class="note-title">{{ note.title }}</div>
    <div class="note-body">{{ note.body }}</div>
    <FormattedDate :date="note.createdAt" />
    <button @click="() => editing=true">Edit note</button>
    <button @click="initiateDelete">Delete note</button>
    <div v-if="confirmDelete">
      <button @click="removeNote(note.id)">Confirm delete</button>
      <button @click="confirmDelete=false">Cancel</button>
    </div>
  </li>
</template>

<script setup>
import { ref } from 'vue'
import { updateNote, deleteNote } from '@/requests'
import FormattedDate from './BaseRelativeDate.vue'
const props = defineProps({
  note: Object
})

const emit = defineEmits(['noteUpdated', 'noteDeleted'])

const editing = ref(false)
const newNoteTitle = ref(props.note.title)
const newNoteBody = ref(props.note.body)
const confirmDelete = ref(false)

const saveNote = (noteId) => {
  if (!newNoteTitle.value) return
  updateNote({ id: noteId, title: newNoteTitle.value, body: newNoteBody.value }).then((updatedNote) => {
    emit('noteUpdated', updatedNote)
    editing.value = false
  })
}

const initiateDelete = () => {
  confirmDelete.value = true
}

const removeNote = (noteId) => {
  // TODO: add confirmation dialog
  deleteNote(noteId).then(() => {
    emit('noteDeleted', noteId)
  })
}
</script>

<style></style>
