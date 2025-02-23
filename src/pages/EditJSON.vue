<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div class="q-mb-sm">
          <div class="text-h4">Edit JSON Structure for Project</div>
          <p>
            Make any changes to the document structure before page generation.
          </p>
          <p>Json wll be saved to vue store.</p>
        </div>

        <!-- EDITOR -->
        <q-input
          v-model="jsonStructure"
          outlined
          clearable
          type="textarea"
          label="JSON Structure"
          autogrow
        />

        <q-banner
          v-if="jsonStructureIsValid"
          class="bg-green text-white q-my-md"
        >
          <template v-slot:avatar>
            <q-icon name="check" color="white" />
          </template>
          The JSON Structure has been validated.
        </q-banner>

        <q-btn
          v-if="!jsonStructureIsValid"
          @click="validateJsonStructure"
          label="Validate"
          color="white"
          text-color="primary"
        />
        <q-btn
          v-if="jsonStructureIsValid"
          to="/generate-pages"
          label="Next: Generate Pages"
          color="white"
          text-color="primary"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, watch } from "vue";
import { useQuasar } from "quasar";
import { appStore } from "stores/app.js";

const $q = useQuasar();

const jsonStructure = ref(JSON.stringify(appStore.topics, null, 2));

const jsonStructureIsValid = ref(false);

const isValidJSON = (jsonString) => {
  try {
    JSON.parse(jsonString);
    return true;
  } catch (e) {
    return false;
  }
};

const validateJsonStructure = () => {
    
  if (isValidJSON(jsonStructure.value)) {

    jsonStructureIsValid.value = true;

    // TODO: Save and update the topic selection in appstore, update the rendered sidebar
    appStore.topics = JSON.parse(jsonStructure.value)

    $q.notify({
      type: "positive",
      message: "The JSON is valid",
    });
  } else {
    jsonStructureIsValid.value = false;
    $q.notify({
      type: "negative",
      message: "The JSON is invalid",
    });
  }
};

// Watch for changes in the prop
watch(
  () => jsonStructure.value,
  (newValue, oldValue) => {
    jsonStructureIsValid.value = false;
  }
);
</script>