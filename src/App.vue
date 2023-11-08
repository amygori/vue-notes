<script setup>
import NoteList from './components/NoteList.vue'
import BaseLayout from './layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <template #header>
        <h1 class="text-2xl font-bold m-2">Vue Notes 🔭</h1>
    </template>
    <template #default>
      <NoteList />
    </template>
    <template #footer>
      <p>Made with ❤️ at Momentum 👩‍💻</p>
    </template>
  </BaseLayout>
</template>

<style scoped></style>
