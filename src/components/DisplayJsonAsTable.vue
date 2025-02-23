<template>
   

    <q-table title="Job Queue" :rows="data" :columns="columns" row-key="title" :rows-per-page-options="[0]" />
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps(['data']);

const columns = [
    { name: 'folder', label: 'Folder', align: 'left', field: row => row.folder || '-' },
    { name: 'title', label: 'Title', align: 'left', field: 'title' },
    { name: 'link', label: 'Link', align: 'left', field: 'link' },
    { name: 'status', label: 'Status', align: 'left', field: 'status' },
]
</script>