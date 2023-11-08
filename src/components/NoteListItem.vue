<template>
  <li class="mb-4">
    <div
      class="note-list-item-card flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl bg-gray-50 text-gray-800 divide-gray-300"
    >
      <div class="note-text flex flex-1 flex-col p-2 border-l-8 border-cyan-600">
        <div v-if="editing">
          <input
            type="text"
            v-model="newNoteTitle"
            class="w-full text-xl p-2 border rounded-md focus:outline-none focus:border-orange-300 focus:ring-1 focus:ring-orange-300 border-gray-300 text-gray-900"
          />
          <textarea
            v-model="newNoteBody"
            class="w-full text-small p-2 mt-2 border rounded-md focus:outline-none focus:border-orange-300 focus:ring-1 focus:ring-orange-300 border-gray-300 text-gray-900"
          ></textarea>
          <div
            class="button-group px-4 flex items-center text-xs uppercase text-gray-600 border-gray-300"
          ></div>
        </div>
        <div v-else>
          <div class="note-title text-2xl">{{ note.title }}</div>
          <div class="note-body text-xs text-gray-600">{{ note.body }}</div>
          <FormattedDate :date="note.createdAt" class="mt-2"/>
        </div>

      </div>
      <div
        v-if="confirmDelete"
        class="button-group px-4 flex items-center text-xs uppercase text-gray-600 border-gray-300"
      >
        <button @click="removeNote(note.id)" class="px-4 uppercase font-semibold text-rose-600">
          Confirm delete
        </button>
        <button @click="confirmDelete = false" class="px-4 uppercase text-zinc-600">Cancel</button>
      </div>
      <div
        v-else-if="editing"
        class="button-group px-4 flex items-center text-xs uppercase text-gray-600 border-gray-300"
      >
        <button
          @click="() => saveNote(note.id)"
          class="px-4 uppercase font-semibold text-emerald-500"
        >
          Save
        </button>
        <button @click="() => (editing = false)" class="px-4 uppercase text-zinc-600">
          Cancel
        </button>
      </div>
      <div v-else class="button-group px-4 flex items-center text-xs border-gray-300">
        <button @click="() => (editing = true)" class="px-4 uppercase text-gray-600">Edit</button>
        <button @click="initiateDelete" class="px-4 uppercase text-rose-600">Delete</button>
      </div>
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
  updateNote({ id: noteId, title: newNoteTitle.value, body: newNoteBody.value }).then(
    (updatedNote) => {
      emit('noteUpdated', updatedNote)
      editing.value = false
    }
  )
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
