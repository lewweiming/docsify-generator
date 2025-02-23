<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />


        <q-btn flat size="xl" to="/" class="text-bold text-white no-wrap" no-caps>
          <span class="q-ml-sm gt-xs">Docsify Generator (AI@Webconxept)</span>
        </q-btn>
        <q-space />
        <q-btn flat no-caps to="/create-project" label="Create Project" />
        <q-btn-dropdown flat no-caps label="Manage Project">
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
        <q-btn type="a" href="https://ai.webconxept.com/docsify-generator/output" target="blank" flat no-caps to="#"
          label="Preview Project" />
        
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
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
