

var sitePages = [
    {
        keyword: "home",
        link: '/home'
    },
    {
        keyword: "beginner",
        link: '/beginner'
    },
    {
        keyword: "basic",
        link: '/basic'
    },
    {
        keyword: "elliptical",
        link: '/elliptical'
    },
    {
        keyword: "bikes",
        link: '/bikes'
    },
    {
        keyword: "killer",
        link: '/killer'
    },
    {
        keyword: "calendar",
        link: '/calendar'
    },
    {
        keyword: "cardio",
        link: '/cardio'
    },
    {
        keyword: "profile",
        link: '/profile'
    },
    {
        keyword: "treadmill",
        link: '/treadmill'
    },
    {
        keyword: "weight",
        link: '/weightlift'
    },
    {
        keyword: "leg",
        link: '/leg'
    }
]

 //firebase config
var firebaseConfig = {
    apiKey: "AIzaSyCgyH2DoUf62eE5_4ynCs1sgDVbwNnjYKo",
    authDomain: "warmup-app.firebaseapp.com",
    databaseURL: "https://warmup-app.firebaseio.com",
    projectId: "warmup-app",
    storageBucket: "warmup-app.appspot.com",
    messagingSenderId: "579071689102",
    appId: "1:579071689102:web:592463cf43e9e533b764df",
    measurementId: "G-LTVSFPYGCC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


function searchWebsite(){
    var searchInput = document.getElementById("search").value;
    for (i = 0; i < sitePages.length; i++ ){
        if( 0 == searchInput.localeCompare(sitePages[i].keyword)){
            window.location = sitePages[i].link;
            return;
        }
    }
    alert("No webpages match. Try searching again.");
}

/*function writeUserData(userId, name, email, password) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      password : password
    });
  }
*/