<script setup lang="ts">
import { nextTick, ref, watch } from "vue";
import Remove from "../icons/Remove.vue";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  isOpen: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const isOpen = ref(props.isOpen);
const content = ref<HTMLElement | null>(null);
const contentHeight = ref("0px");

watch(
    () => props.isOpen,
    async (value) => {
      if (value) {
        isOpen.value = true;
        await nextTick();
        contentHeight.value = `${content.value?.scrollHeight}px`;
      } else {
        contentHeight.value = `${content.value?.scrollHeight}px`;
        await nextTick();
        contentHeight.value = "0px";
        isOpen.value = false;
      }
    },
);

nextTick(() => {
  contentHeight.value = isOpen.value ? `${content.value?.scrollHeight}px` : "0px";
});
</script>

<template>
  <div
      class="w-full h-full flex flex-col rounded-xl border text-black transition-colors duration-300"
      :class="{
      'border-[#CCC] bg-[#F5F5F5]': !isOpen,
      'border-primary-500 bg-primary-500': isOpen,
    }"
  >
    <div
        class="w-full max-w-full flex flex-row items-center justify-between px-6 py-4 select-none cursor-pointer"
        :class="{
          'pointer-events-none cursor-none text-gray-500': disabled,
        }"
        @click="$emit('change', id)"
    >
      <div class="text-xl font-medium">{{ label }}</div>
      <div class="size-6 relative">
        <Remove size="6" />
        <Remove
            size="6"
            class="absolute inset-0 transition-transform duration-300"
            :class="{ 'rotate-0': isOpen, '-rotate-90': !isOpen }"
        />
      </div>
    </div>
    <div
        class="w-full px-6 transition-all duration-200 overflow-hidden"
        :style="{ maxHeight: contentHeight}"
        ref="content"
    >
      <div class="pb-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Другие стили */
</style>
