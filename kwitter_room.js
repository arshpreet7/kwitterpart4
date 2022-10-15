const firebaseConfig = {
      apiKey: "AIzaSyAp8JKJ002aNIr9coAumygEecvkqJbj3ho",
      authDomain: "kwitter-5ccd4.firebaseapp.com",
      databaseURL: "https://kwitter-5ccd4-default-rtdb.firebaseio.com",
      projectId: "kwitter-5ccd4",
      storageBucket: "kwitter-5ccd4.appspot.com",
      messagingSenderId: "173010916991",
      appId: "1:173010916991:web:c6f5f71b2e48b424d1914a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function addRoom() 
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" = room_name);
      window.location = "kwitter_page.html"

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = ("<div class= 'room_name id="+Room_names+" onclick = 'redirectToRoom(this.id) ' ># " + Room_names + "</div><hr>" );
      document.getElementsById("output").innerHTML +=row; 
      //End code
      });});}
getData();

function redirectToRoomName(name) 
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
      
}
