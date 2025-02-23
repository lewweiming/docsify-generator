<template>
  <q-page padding>
    <div class="text-h5">Pages to Generate</div>
    <p>This segment will be shown once the json topic structure is confirmed</p>
    <p>The following pages will be generated.</p>
    <p>
      The task list is created from the JSON Structure, through a JS function
      that appends a "status" field to each row.
    </p>
    <p>The task list is stored locally.</p>
    <p>After generating the pages, you can preview the docsify application.</p>
    <p>Review the topics and once ready click the "Start Generating"</p>
    <p>
      Start Generating will iteratively cycle through the tasks until the job is
      completed.
    </p>
    <p>If an error occurs, the queue will be paused.</p>

    <div class="q-my-md">
      <q-btn
        :loading="hasStarted && !isPaused"
        @click="startGenerating()"
        :label="!hasStarted?'Start Generating':'Continue'"
        color="primary"
      />
      <q-btn
        v-if="!isPaused && hasStarted"
        @click="isPaused = true"
        label="Pause"
        color="primary"
      />
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
  let row = tableData.value[index];

  let r = await appStore.generatePage(row);

  if (r.data.error) {



    $q.notify({
      type: "negative",
      message: r.data.message,
    });

    return false;
  }

  if (r.data.message == "success") {
    tableData.value[index].status = "complete";

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

  while (currentIndex.value < tableData.value.length && isPaused.value === false) {

    let r = await generatePage(currentIndex.value);

    // Error found, stop
    if(r == false) {
      isPaused = true;
      break;
    }

    if (r === true) {
      currentIndex.value++;
    }
  }

  if(currentIndex.value >= tableData.value.length) {

    hasStarted.value = false;
  }
  
};

</script>