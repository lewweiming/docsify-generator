<!-- Blank Page Markdown Template, Make sure quasar markdown extension is installed first! -->
<template>
    <!-- Dark style -->
    <q-page class="wrapper q-pa-lg bg-grey-1">
    <div class="q-mb-lg">
          <!-- Content -->
          <q-markdown :src="markdown"></q-markdown>
    </div>
  </q-page>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  // import markdown from 'src/markdown/TERMS_AND_CONDITIONS.md'
  
  const markdown = ref('');
  
  onMounted(async() => {
      let r = await axios.get('documents/NEWS.md')
      markdown.value = r.data
  })
  
  
  </script>