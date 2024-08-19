<script setup lang="ts">
import AccordionItem from './AccordionItem.vue';
import { ref } from "vue";
interface AccordionItem {
  label: string;
  defaultOpen?: boolean;
  disabled?: boolean;
  content: string;
}

const props = defineProps({
  items: {
    type: Array<AccordionItem>,
    required: true
  },
  defaultOpen: {
    type: Boolean,
    required: false,
    default: false
  },
  multiple: {
    type: Boolean,
    required: false,
    default: false
  }
});

const accordionItems = ref(props.items);

const change = (index: number) => {
  if (!props.multiple) {
    accordionItems.value = accordionItems.value.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          defaultOpen: !item.defaultOpen
        }
      } else {
        return {
          ...item,
          defaultOpen: false
        }
      }
    });
  } else {
    accordionItems.value = accordionItems.value.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          defaultOpen: !item.defaultOpen
        }
      } else {
        return item;
      }
    });
  }
}
</script>

<template>
  <div class="w-full flex flex-col gap-2">
    <AccordionItem v-for="(item, index) in accordionItems" :id="index" :label="item.label" :is-open="defaultOpen ? true : item.defaultOpen" :disabled="item.disabled" @change="change">
      {{ item.content}}
    </AccordionItem>
  </div>
</template>

<style scoped>

</style>