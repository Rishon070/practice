// ADD YOUR FIREBASE LINKS
function addUser()
{
 user_name = document.getElementById("user_name").value;
 firebase.database().ref("/").child(user_name).update({
     purpose : "adding_user"
 });
}





var firebaseConfig = {
    apiKey: "AIzaSyCTAQXO-GDAXSpp-nk-tUu_m1jjzFWbFFE",
    authDomain: "practice-eaa5c.firebaseapp.com",
    databaseURL: "https://practice-eaa5c-default-rtdb.firebaseio.com",
    projectId: "practice-eaa5c",
    storageBucket: "practice-eaa5c.appspot.com",
    messagingSenderId: "715266810578",
    appId: "1:715266810578:web:b534d02513e8d7079fc30b",
    measurementId: "G-YPD4QGTJF9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);