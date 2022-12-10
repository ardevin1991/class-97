
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCKeB7gUi_LKaa2t6acELweqYcifjGr-iw",
      authDomain: "kwitter-f0502.firebaseapp.com",
      databaseURL: "https://kwitter-f0502-default-rtdb.firebaseio.com",
      projectId: "kwitter-f0502",
      storageBucket: "kwitter-f0502.appspot.com",
      messagingSenderId: "635568695620",
      appId: "1:635568695620:web:f9bd9b950c08cf77d88f11"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row="<div class='room_name' id=" +Room_names+"onclick='redirectToRoomName(this.id)'> #" +Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+" !";

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html"
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}