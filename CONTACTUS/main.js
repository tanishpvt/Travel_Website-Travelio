// Initialize Firebase (ADD YOUR OWN DATA)
// var config = {
//   apiKey: "xxxxx",
//   authDomain: "xxxxx",
//   databaseURL: "xxxxx",
//   projectId: "xxxxx",
//   storageBucket: "xxxxx",
//   messagingSenderId: "xxxxx"
// };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyDn0YLSUKggpOhhhnI5UBREb0QuEo1nyJs",
  authDomain: "fluffy-2ea00.firebaseapp.com",
  databaseURL: "https://fluffy-2ea00.firebaseio.com",
  projectId: "fluffy-2ea00",
  storageBucket: "fluffy-2ea00.appspot.com",
  messagingSenderId: "72613846505",
  appId: "1:72613846505:web:00e7d761ab4af2b4f13f78",
  measurementId: "G-G141S8YW41"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('ContactUs');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}