var firstName = prompt("Hi there! What's your first name?") || "Visitor";
var lastName = prompt("What's your last name?") || "McDefaultson";
var output = document.querySelector('#greeting');

if(firstName && lastName){
  output.innerHTML = "<p>Thanks for visiting, " + firstName + " " + lastName +".</p>";
} else {
  output.innerHTML = "<p>Please tell us your first and last names!</p>";
}
