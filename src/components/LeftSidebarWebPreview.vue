<template>
    <div class="q-pa-lg">
     <div class="text-h6 q-mb-sm">List of Web Pages Generated</div>
        <div v-if="rows.length == 0">
            No web pages to view :(
        </div>
        <q-list v-else dense separator>
            <q-item v-for="(i, index) in rows" :key="index">
                <q-item-section>
                    {{ i.replace('docsify-generator/output-webpages/', '') }}
                </q-item-section>
                <q-item-section side>
                    <q-btn flat no-caps label="View" @click="appStore.webpagePreviewSrc=`https://ai.webconxept.com/${i}`" />
                </q-item-section>
            </q-item>
        </q-list>
    </div>
</template>


<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { appStore } from "stores/app.js";

const API_PREVIEW_LIST_WEBPAGES = 'https://ai.webconxept.com/api/docsify-generator/webpages/list_webpages.php'

const rows = ref({})

const init = async () => {
    let r = await axios.get(API_PREVIEW_LIST_WEBPAGES)
    rows.value = r.data.rows

}

init();
</script>