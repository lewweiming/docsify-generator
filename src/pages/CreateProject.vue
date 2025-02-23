<template>
  <q-page padding>
    <q-card class="q-pa-md shadow-2">
      <q-card-section v-if="!isCleanSlate">
        <div class="text-h5">You have an existing project</div>
        <p>Please reset the app first.</p>
        <q-btn @click="reset()" label="Reset and clear data" />
        <div class="q-my-lg text-h6">Or manage the project</div>
        <q-btn to="/edit-json" label="Edit JSON" />
        <q-btn to="/generate-pages" label="Generate Pages" />
      </q-card-section>

      <q-card-section v-if="isCleanSlate">
        <div class="text-h5">Create New Docsify Project</div>
        <p>This will clear the existing project.</p>
    
        <q-input
          v-model="project.description"
          label="Project Description"
          outlined
          type="textarea"
        />
        <q-btn
          @click="generateTopics()"
          :loading="isGenerating"
          size="lg"
          label="Create Project"
          color="primary"
          class="q-mt-md full-width"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>
  
<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { appStore } from "stores/app.js";

const $q = useQuasar();

const isCleanSlate = ref(true);
const isGenerating = ref(false);

// Check if appStore.topics is empty
const checkIfCleanSlate = () => {
  if (appStore.topics.length == 0) {
    isCleanSlate.value = true;
  } else {
    isCleanSlate.value = false;
  }
};

checkIfCleanSlate();

const project = ref({
  description: `I'm creating a docsify document on the host guide for an events hosting platform. I need a list of topics with regards to using the platform such as event hosting, tickets, payouts, etc`,
});

const reset = () => {
  
  appStore.reset();

  checkIfCleanSlate();

  $q.notify({
      message: 'Localstorage reset!',
    });
}

const generateTopics = async () => {
  isGenerating.value = true;

  let prompt = project.value.description;

  let r = await appStore.generateTopics(prompt);

  isGenerating.value = false;

  if (r.data.error) {
    $q.notify({
      type: "negative",
      message: r.data.message,
    });

    return false;
  }

  if (r.data.message == "success") {

    appStore.topics = r.data.topics;
    appStore.projectDescription = project.value.description;
    appStore.saveTopicsToLocalStorage();
    appStore.saveProjectDescriptionToLocalStorage();

    $q.notify({
      type: "positive",
      message: r.data.message,
    });

    return true;
  }
};
</script>