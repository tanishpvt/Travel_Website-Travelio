const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// firebase setup

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDn0YLSUKggpOhhhnI5UBREb0QuEo1nyJs",
    authDomain: "fluffy-2ea00.firebaseapp.com",
    databaseURL: "https://fluffy-2ea00.firebaseio.com",
    projectId: "fluffy-2ea00",
    storageBucket: "fluffy-2ea00.appspot.com",
    messagingSenderId: "72613846505",
    appId: "1:72613846505:web:00e7d761ab4af2b4f13f78",
    measurementId: "G-G141S8YW41"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  const auth = firebase.auth();

  function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}


  function signIn(){
		
		var email = document.getElementById("mail");
		var password = document.getElementById("Password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));		
	}
	
	
	function signOut(){	
		auth.signOut();
		alert("Signed Out");	
	}
	
	
	auth.onAuthStateChanged(function(user){	
		if(user){	
			var email = user.email;
			alert("Active User " + email);

			//Take user to a different or home page
			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}
		
		
		
	});
	


  // login with google