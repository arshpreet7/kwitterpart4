const firebaseConfig = {
    apiKey: "AIzaSyAp8JKJ002aNIr9coAumygEecvkqJbj3ho",
    authDomain: "kwitter-5ccd4.firebaseapp.com",
    databaseURL: "https://kwitter-5ccd4-default-rtdb.firebaseio.com",
    projectId: "kwitter-5ccd4",
    storageBucket: "kwitter-5ccd4.appspot.com",
    messagingSenderId: "173010916991",
    appId: "1:173010916991:web:c6f5f71b2e48b424d1914a"
  };
  

  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}