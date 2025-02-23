<!-- Blank Page Markdown Template, Make sure quasar markdown extension is installed first! -->
<template>
    <!-- Dark style -->
    <q-chip class="q-ma-md" outline size="lg" icon="topic" color="primary" label="Topics Generated" />
    <div class="q-mb-lg">
          <!-- Content -->
          <q-markdown :src="markdown"></q-markdown>
    </div>
  
  </template>
  
  <script setup>
  import { ref, watch, onMounted } from 'vue';
  import { appStore } from 'stores/app.js'
  import { parseData } from 'src/js/parser.js'

  const data = appStore.topics;
  
  const markdown = ref('');
  
  onMounted(() => {
      markdown.value = parseData(data)
  })

  watch(() => appStore.topics,
  () => {
    markdown.value = parseData(appStore.topics)
  },
  { deep: true } // Ensure it watches for changes in nested objects or arrays
);
  
  
  </script>