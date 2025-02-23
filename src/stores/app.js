// app.js
import { reactive } from 'vue'
import axios from 'axios'

const API_DOCSIFY_GENERATOR_GENERATE_PAGES = 'https://ai.webconxept.com/api/docsify-generator/generate_pages.php'
const API_DOCSIFY_GENERATOR_GENERATE_TOPICS = 'https://ai.webconxept.com/api/docsify-generator/generate_topics.php'

export const appStore = reactive({
  projectDescription: localStorage.getItem('projectDescription') || '',
  topics: JSON.parse(localStorage.getItem('topics')) || [], // Can be modified or loaded from localstorage
  tasks: [], // 
  saveProjectDescriptionToLocalStorage() {
    localStorage.setItem('projectDescription', this.projectDescription);
  },
  saveTopicsToLocalStorage() {
    localStorage.setItem('topics', JSON.stringify(this.topics));
  },
  reset() {
    this.topics = [];
    this.tasks = [];
    this.projectDescription = '';
    localStorage.removeItem("projectDescription");
    localStorage.removeItem("topics");
  },
  // Tasks are similar to topics but with status, run when generate pages.
  getTasks() {

    this.tasks = JSON.parse(JSON.stringify(this.topics))

    this.tasks.forEach(t => {
      t['status'] = 'pending';
    })

    return this.tasks;
  },
  async generateTopics(prompt) {

    let fd = new FormData();
    fd.append('prompt', prompt)
    let r = await axios.post(API_DOCSIFY_GENERATOR_GENERATE_TOPICS, fd)

    return r;
  },
  async generatePage(payload) {

    if (!('folder' in payload)) {
      payload['folder'] = ''
    }

    let fd = new FormData();
    fd.append('link', payload.link)
    fd.append('folder', payload.folder)
    let r = await axios.post(API_DOCSIFY_GENERATOR_GENERATE_PAGES, fd)

    return r;
  }
})