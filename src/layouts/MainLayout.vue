<template>
  <q-layout view="hHh Lpr lFf">
    <Navbar v-model="leftDrawerOpen" />

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
import Navbar from 'components/Navbar.vue'
import LeftSidebar from 'components/LeftSidebar.vue'

const leftDrawerOpen = ref(false)
</script>
