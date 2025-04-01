<template>
  <q-layout view="hHh Lpr lFf">
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
          </q-list>
        </q-btn-dropdown>
        <q-btn icon="preview" type="a" href="https://ai.webconxept.com/docsify-generator/output" target="blank" flat no-caps to="#"
          label="Preview Project" />
        <q-btn icon="download" type="a" href="https://ai.webconxept.com/api/docsify-generator/download.php" target="blank" flat no-caps
          to="#" label="Download Project" />
          <q-btn flat label="News" to="/news" />
          <q-btn flat icon="img:assets/icons/github-mark-white.svg" type="a" round href="https://github.com/lewweiming/docsify-generator" />

      </q-toolbar>
    </q-header>

    <q-drawer :width="400" v-model="leftDrawerOpen" show-if-above bordered>
      <LeftSidebar />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import LeftSidebar from 'components/LeftSidebar.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
