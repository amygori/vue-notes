<template>
  <li>
    <div class="note-title">{{ note.title }}</div>
    <div class="note-body">{{ note.body }}</div>
  </li>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  note: Object
})

</script>

<style></style>
