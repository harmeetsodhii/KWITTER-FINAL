var firebaseConfig = {
  apiKey: "AIzaSyCrMusnxPboDpL_sWD4AvQuKb1w348iOJ0",
  authDomain: "trying-6a25a.firebaseapp.com",
  databaseURL: "https://trying-6a25a-default-rtdb.firebaseio.com",
  projectId: "trying-6a25a",
  storageBucket: "trying-6a25a.appspot.com",
  messagingSenderId: "40396416068",
  appId: "1:40396416068:web:29a8a33180715d50f64811"
};






// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}