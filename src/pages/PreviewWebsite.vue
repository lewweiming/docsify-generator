<template>
    <q-page padding>
        <div class="text-h4 q-mb-lg">Preview Website</div>
<iframe 
:src="appStore.webpagePreviewSrc"
 class="full-width full-height"
      style="border: none;"
></iframe>
    </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { appStore } from "stores/app.js";
</script>


<style scoped>
.q-page {
  display: flex;
  flex-direction: column;
}

iframe {
  flex: 1;
}
</style>