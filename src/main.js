import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAT7gsXLYYhaXy9MwMUGUqa4A7qyjOQS-E",
    authDomain: "todo-app-b8c9a.firebaseapp.com",
    projectId: "todo-app-b8c9a",
    storageBucket: "todo-app-b8c9a.appspot.com",
    messagingSenderId: "1003095189486",
    appId: "1:1003095189486:web:fa0c466db51158920b10ff",
    measurementId: "G-CD8R7DTMF7",
};

initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
