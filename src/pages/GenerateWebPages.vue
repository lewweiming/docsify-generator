<template>
  <q-page padding>
    <div class="text-h5">Web Pages to Generate (Fomantic UI)</div>

    <!-- BANNER -->
    <q-banner class="bg-grey-1 q-my-md">
      <template v-slot:avatar>
        <q-icon name="info" color="primary" />
      </template>
      <ul>
      <li>This segment will be shown once the json topic structure is confirmed</li>
      <li>The following pages will be generated.</li>
      <li>
        The task list is created from the JSON Structure, through a JS function
        that appends a "status" field to each row.
      </li>
      <li>The task list is stored locally.</li>
      <li>After generating the pages, you can preview the docsify application.</li>
      <li>Review the topics and once ready click the "Start Generating"</li>
      <li>
        Start Generating will iteratively cycle through the tasks until the job is
        completed.
      </li>
      <li>If an error occurs, the queue will be paused.</li>
      </ul>
    </q-banner>

    <q-banner class="bg-grey-1 q-my-md">
      <template v-slot:avatar>
        <q-icon name="chat" color="primary" />
      </template>
      {{ appStore.projectDescription }}
    </q-banner>

    <div class="q-my-md">
      <q-btn :loading="hasStarted && !isPaused" @click="startGenerating()"
        :label="!hasStarted ? 'Start Generating' : 'Continue'" color="primary" />
      <q-btn v-if="!isPaused && hasStarted" @click="isPaused = true" label="Pause" color="primary" />
    </div>
    <!-- TABLE -->
    <div class="q-my-xl">
      <DisplayJsonAsTable :data="tableData" />
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import { appStore } from "stores/app.js";
import DisplayJsonAsTable from "components/DisplayJsonAsTable.vue";

const $q = useQuasar();

const hasStarted = ref(false);
const isPaused = ref(false);
const currentIndex = ref(0); //

const getTasks = () => {

  let tasks = appStore.getTasks();
  $q.notify(`${tasks.length} task(s) generated`);
  return tasks;
}

const tableData = getTasks();

const generatePage = async (index) => {
  let row = tableData[index];

  let r = await appStore.generateWebPage(row);

  if (r.data.error) {



    $q.notify({
      type: "negative",
      message: r.data.message,
    });

    return false;
  }

  if (r.data.message == "success") {
    tableData[index].status = "complete";

    $q.notify({
      type: "positive",
      message: r.data.message,
    });

    return true;
  }
};

// Also able to continue
const startGenerating = async () => {

  isPaused.value = false
  hasStarted.value = true;

  while (currentIndex.value < tableData.length && isPaused.value === false) {

    let r = await generatePage(currentIndex.value);

    // Error found, stop
    if (r == false) {
      isPaused = true;
      break;
    }

    if (r === true) {
      currentIndex.value++;
    }
  }

  if (currentIndex.value >= tableData.length) {

    hasStarted.value = false;
  }

};

</script>