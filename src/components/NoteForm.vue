<template>
  <section class="new-note my-8">
    <form @submit.prevent="addNote" class="container flex flex-col">
      <fieldset class="grid grid-cols-4 gap-6 rounded-md shadow-sm bg-gray-50">
        <div class="grid grid-cols-2 gap-2 col-span-full lg:col-span-3">
          <div class="col-span-full sm:col-span-3">
            <label for="note-title" class="text-sm text-gray-400">New note title</label>
            <input
              type="text"
              v-model.trim="newNoteTitle"
              class="w-full p-1 border rounded-md focus:outline-none focus:border-orange-300 focus:ring-1 focus:ring-orange-300 border-gray-300 text-gray-900"
            />
          </div>
          <div class="col-span-full sm:col-span-3">
            <label for="note-body" class="text-sm text-gray-400">New note body</label>
            <textarea
              v-model.trim="newNoteBody"
              class="w-full p-1 border rounded-md focus:outline-none focus:border-orange-300 focus:ring-1 focus:ring-orange-300 border-gray-300 text-gray-900"
            ></textarea>
          </div>
          <div class="col-span-full sm:col-span-3">
            <button
              type="submit"
              :disabled="!newNoteTitle"
              class="px-8 py-3 font-semibold rounded border border-cyan-600 text-cyan-600"
            >
              Add note
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  </section>
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
