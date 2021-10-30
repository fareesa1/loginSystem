
var x;
var y;
var db;
var userName=""


const firebaseConfig = {
    apiKey: "AIzaSyDyqYOnUsPMdmth2HQ3cOLvq1-VoBCO6aA",
  authDomain: "wireleib-e42d3.firebaseapp.com",
  databaseURL: "https://wireleib-e42d3-default-rtdb.firebaseio.com",
  projectId: "wireleib-e42d3",
  storageBucket: "wireleib-e42d3.appspot.com",
  messagingSenderId: "1049671850682",
  appId: "1:1049671850682:web:fcccbf9461465c113f4083"
};



firebase.initializeApp(firebaseConfig);
db = firebase.database()
var input_title;



function addUserData(){
    var rand = Math.round(Math.random() * 800) + Math.round(Math.random() * 800)
    console.log(rand)
    input_title = document.getElementById("input_title").value
    var input_title = document.getElementById("input_description").value
    db.ref("users/"+ rand).set({title:input_title, description:input_description})
    console.log(input_title)
    
    window.location.href = 'feed.html';
    document.getElementById('input_title').value = ''
    document.getElementById('input_description').value = ''

}


// window.onload = function() {
// //     //JavaScript goes here
// while(!input_title){
//     document.getElementById("title-text").innerHTML="LOading..."

// }
//         document.getElementById("title-text").innerHTML=input_title


// //     while(!input_title){

// // // setTimeout(function() {
// //     console.log("fetched")
// //     while(input_title===undefined){
// //         document.getElementById("title-text").innerText='Loading...'
// //     }
// //     document.getElementById("title-text").innerText=input_title
// // // },3000)
// //     }

//   }

function readUser(){
    db.ref("users/").on("value", (data)=>{
        userName = data.val()
        console.log(userName.user1)
        document.getElementById("name").innerText=userName.user1
    })
  
}

function login(){
    x= document.getElementById("input1").value 
    y= document.getElementById("input2").value
    console.log("hello " + y)
    loginUser(x,y)
}

function registerUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(cred => {
        console.log("User successfully created!");
}).catch(err => {
    console.log(err.message);
})
}

function loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            alert('Successfully authenticated!');
            window.location.href = 'createpost.html';
            // direct to logic success page
        }).catch(err => {
            console.log(err.message);
        })


}




