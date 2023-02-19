//Sets up firebase
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
// rest of my code
auth.onAuthStateChanged(user => {
    if(!user) {
       window.location.replace("index.html"); 
    } else {
        load(true, auth.currentUser.uid, null)
        look.addEventListener("click", function(){
            load(false, lookUsername.value, lookup.value)
        })
    }
});


let testing = document.querySelector("#testing")
let lookup = document.querySelector("#lookup")
// this is the part where we add the words
let look = document.querySelector("#look")
let lookUsername = document.querySelector("#username")
let parNode = document.querySelector("#def")

// so now I want to just check if the user has written the word before
function addToScreen(doc, uid){
    let li = document.createElement("li")
    let word = document.createElement("span");
    let definition = document.createElement("span");
    li.setAttribute("data-id", doc.id)
    word.textContent = doc.id[0].toUpperCase() + doc.id.substring(1,doc.id.length).toLowerCase() + ": "
    definition.textContent = doc.data()[uid]
    li.appendChild(word)
    li.appendChild(definition)
    testing.appendChild(li)
    console.log(doc.data()[uid])
}
async function load(preload, usr, word) {
    let uids
    if(preload) {
        uids = usr
    } else {
        uids = await findIDfromUsername(usr);
    }
    db.collection("definitions").get().then(snapshot => {
        snapshot.docs.forEach(docs => {
            if(preload) {
                if(uids in docs.data()) {
                    addToScreen(docs, uids)
                }
            } else {
                if(docs.id == word) {
                    if(uids in docs.data()) {
                        addToScreen(docs, uids)
                    }
                }
            }
        })
    })
}
async function findIDfromUsername(usr) {
    let x
    await db.collection("usernames").get().then(snapshot => {
        x = snapshot.docs[0].data()[usr]
    })
    return x
}