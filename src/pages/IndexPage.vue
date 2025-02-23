<template>
  <q-page class="q-pa-lg flex flex-center">
    
    <!-- Header Section -->
    <div class="column items-center">
      <div class="sacramento-regular text-h2 exo-bold text-primary">
        Docsify AI Generator
      </div>
      <div class="sacramento-regular text-h4 font-bold text-center text-accent q-my-md">
        Generate Smart Documents with AI
      </div>
      <p class="text-center text-h6 italic">
        Automate content creation. Save time. Publish effortlessly.
      </p>

      <!-- Action Buttons -->
      <div class="row q-gutter-md justify-center q-mt-md">
        <q-btn size="lg" color="primary" outline label="Create Project" to="/create-project" />
        <q-btn size="lg" color="primary" outline label="Manage Projects" to="/manage-projects" />
        <q-btn size="lg" color="primary" outline label="View Documents" to="/documents" />
        <q-btn size="lg" color="primary" outline label="Generate Sidebar" to="/generate-sidebar" />
        <q-btn size="lg" color="primary" outline label="Export to Docsify" to="/export" />
      </div>
    </div>

  </q-page>
</template>

<style scoped>
.bg-dark {
  background-color: #121212;
}
</style>
