import { initializeApp } from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyAkZBEEIYWHdTfSd1a5oKVl5Res3SywYec",
    authDomain: "vue-webstore.firebaseapp.com",
    databaseURL: "https://vue-webstore.firebaseio.com",
    projectId: "vue-webstore",
    storageBucket: "vue-webstore.appspot.com",
    messagingSenderId: "58350327758",
    appId: "1:58350327758:web:1b4b52c32279e85e1cfd9f"
});

export const db = app.database();

export const productsRef = db.ref('products');