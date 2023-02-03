var firebaseConfig = {
    apiKey: "AIzaSyAoB8DAnPvKh08eEU8ognQzhWsm1-bib3o",
    authDomain: "lets-chat-bed67.firebaseapp.com",
    databaseURL: "https://lets-chat-bed67-default-rtdb.firebaseio.com",
    projectId: "lets-chat-bed67",
    storageBucket: "lets-chat-bed67.appspot.com",
    messagingSenderId: "233266194452",
    appId: "1:233266194452:web:cb0fcb37136691082f1f01"
  };
  
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});

document.getElementById("msg").value = "";
}


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    }