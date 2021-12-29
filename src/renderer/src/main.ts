import { createApp } from 'vue'
import App from './App.vue'
import directive from './directive'

const app = createApp(App)
for(const key in directive){
  app.directive(key,directive[key].default)
  console.log(`directive`,directive[key].default);
}
app
  .mount('#app')
  .$nextTick(window.removeLoading)

console.log('fs', window.fs)
console.log('ipcRenderer', window.ipcRenderer)
