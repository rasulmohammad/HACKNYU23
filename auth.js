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

//Saving the users information as the highest priority
let reg = document.querySelector("#register")
let log = document.querySelector("#login")
let error = document.querySelector("#error")
reg.addEventListener("click",function(){
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    console.log(email)
    console.log(password)
    try {
        auth.createUserWithEmailAndPassword(email, password).then(c => {
            window.location.replace("index.html");
        })
    } catch {
        error.innerHTML = "Email already taken."
    }
})
log.addEventListener("click",function(){
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    console.log(email)
    console.log(password)
    try {
        auth.signInWithEmailAndPassword(email, password).then(c => {
        window.location.replace("index.html");
        })
    } catch {
        error.innerHTML = "Invalid email or password" 
    }
})
