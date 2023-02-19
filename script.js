






const firebaseConfig = {
    apiKey: "AIzaSyAPuu-FzoeoZplf-VbSlyUG3BekjF9ydVA",
    authDomain: "vocabconnectadictdraw.firebaseapp.com",
    projectId: "vocabconnectadictdraw",
    storageBucket: "vocabconnectadictdraw.appspot.com",
    messagingSenderId: "7206824672",
    appId: "1:7206824672:web:777a8dc4ca11c2427bbe85",
    measurementId: "G-8CZD4XMQJ4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
let definitions = document.querySelector("#definitions")
// rest of my code
auth.onAuthStateChanged(user => {
    if (user) {
        loginreg.remove();
    } else {
        definitions.remove()
    }
});
let loginreg = document.querySelector("#loginreg")
loginreg.addEventListener("click", function() {
    auth.onAuthStateChanged(user => {
        if (user) {
            loginreg.remove();
        } else {
            // this brings the user to the registration/login page
            window.location.replace("./auth.html");
        };
    })

})
let logout = document.querySelector("#logout")
logout.addEventListener("click", function() {
    auth.signOut().then(function() { location.reload() });
})
definitions.addEventListener("click", function() {
    window.location.replace("definition.html");
})