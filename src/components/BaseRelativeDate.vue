<template>
  <div>
    <p>{{ formattedDate }}</p>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const props = defineProps({
  date: {
    type: String,
    required: true,
  },
})

const formattedDate = computed(() =>dayjs(props.date).fromNow())

</script>
