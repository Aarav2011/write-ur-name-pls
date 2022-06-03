var firebaseConfig = {
    apiKey: "AIzaSyArtfOK8NrK3MpQBIaPxlEZNID9kR1zrJs",
    authDomain: "practice-c94-529b0.firebaseapp.com",
    databaseURL: "https://practice-c94-529b0-default-rtdb.firebaseio.com",
    projectId: "practice-c94-529b0",
    storageBucket: "practice-c94-529b0.appspot.com",
    messagingSenderId: "696441058402",
    appId: "1:696441058402:web:5e4637e65d5ad4f151cd3b",
    measurementId: "G-84R5C87DGX"
  };

  firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name= document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}