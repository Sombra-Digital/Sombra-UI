<script setup lang="ts">
import XMark from "../icons/XMark.vue";

defineProps({
  title: {
    type: String,
    required: false
  },
  text: {
    type: String,
    required: false
  },
  style: {
    type: String,
    required: false,
    default: 'font-medium'
  },
  rounded: {
    type: String,
    required: false,
    default: 'xl'
  },
  color: {
    type: String,
    required: false,
    default: '#FF00FE'
  },
  isCloseable: {
    type: Boolean,
    required: false,
    default: false
  },
})
</script>

<template>
<div class="flex flex-row px-6 py-4 items-center justify-between sui__alert-bg" :class="rounded ? `rounded-${rounded}` : 'rounded'" >
  <div class="flex flex-row items-center gap-3">
    <slot name="icon" class="size-6" />
    <div class="text-md" :class="style">{{ text }}</div>
  </div>
  <div v-if="isCloseable" class="size-6 cursor-pointer" @click="$emit('close')">
    <XMark size="8" />
  </div>
</div>
</template>

<style scoped>
.sui__alert-bg {
  background-color: v-bind(color);
}
.rounded-3xl {
  border-radius: 1.5rem;
}
.rounded-2xl {
  border-radius: 1rem;
}
.rounded-xl {
  border-radius: 0.75rem;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.rounded-md {
  border-radius: 0.375rem;
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-sm {
  border-radius: 0.125rem;
}
.rounded-none {
  border-radius: 0;
}
</style>