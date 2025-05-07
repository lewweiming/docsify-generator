<template>
     <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />


        <q-btn flat size="xl" to="/" class="text-bold text-white no-wrap" no-caps>
          <q-icon size="50px" name="img:assets/icons/documents_inverted.svg" />
          <span class="q-ml-sm gt-xs">Docsify AI Generator</span>
        </q-btn>
        <q-space />
        <q-btn icon="add" flat no-caps to="/create-project" label="Create Project" />
        <q-btn-dropdown icon="edit" flat no-caps label="Manage Project">
          <q-list>
            <q-item to="/edit-json" clickable v-close-popup>
              <q-item-section>
                <q-item-label>Edit JSON</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/generate-pages" clickable v-close-popup>
              <q-item-section>
                <q-item-label>Generate Pages</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/generate-web-pages" clickable v-close-popup>
              <q-item-section>
                <q-item-label>Generate Web Pages</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn-dropdown icon="preview" flat no-caps label="Preview">
          <q-list>
            <q-item href="https://ai.webconxept.com/docsify-generator/output" target=" blank" clickable v-close-popup>
              <q-item-section>
                <q-item-label>Preview Docsify</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/preview/website" clickable v-close-popup>
              <q-item-section>
                <q-item-label>Preview Website</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn-dropdown icon="download" flat no-caps label="Download">
          <q-list>
            <q-item href="https://ai.webconxept.com/api/docsify-generator/download.php" target="blank" clickable
              v-close-popup>
              <q-item-section>
                <q-item-label>Download Docsify</q-item-label>
              </q-item-section>
            </q-item>
            <q-item href="https://ai.webconxept.com/api/docsify-generator/download_webpages.php" target="blank"
              clickable v-close-popup>
              <q-item-section>
                <q-item-label>Download Webpages</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn flat label="News" to="/news" />
        <q-btn flat icon="img:assets/icons/github-mark-white.svg" type="a" round
          href="https://github.com/lewweiming/docsify-generator" />

      </q-toolbar>
    </q-header>
</template>

<script setup>
const model = defineModel()

function toggleLeftDrawer() {
    model.value = !model.value
}
</script>