const firebaseConfig = {
      apiKey: "AIzaSyC4pmr4_RlsYDA2OSCF7TTaw_0-aHpwSBU",
      authDomain: "testing-project-3a3c9.firebaseapp.com",
      databaseURL: "https://testing-project-3a3c9-default-rtdb.firebaseio.com",
      projectId: "testing-project-3a3c9",
      storageBucket: "testing-project-3a3c9.appspot.com",
      messagingSenderId: "1023663938907",
      appId: "1:1023663938907:web:a3be39d9cd2f1163e0ce7e",
      measurementId: "G-WM1GEW0Y71"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("Username");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + " ! 👍";

function Room() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child("room_name").update({
            purpose: "adding room name "
      });

      localStorage.setItem("room_name", room_name);
      window.location = "Just_Chat_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room name" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Just_Chat_page.html";
}

function Logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}