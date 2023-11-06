<template>
  <li>{{ note.title }}</li>
</template>

<script>
import { defineProps } from 'vue'
const props = defineProps({
  note: {
    type: Object,
    required: true
  }}
)
</script>

<style>

</style>
