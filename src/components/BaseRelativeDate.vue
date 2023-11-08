<template>
  <div>
    <p :class="styleClasses">{{ formattedDate }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const props = defineProps({
  date: {
    type: String,
    required: true,
  },
  styleClasses: {
    type: String,
    default: 'text-gray-400 text-xs'
  }
})

const formattedDate = computed(() =>dayjs(props.date).fromNow())

</script>
