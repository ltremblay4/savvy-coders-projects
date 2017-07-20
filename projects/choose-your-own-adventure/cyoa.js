var response = prompt("You walk into the Atlanta Airport and head to the ticket counter. Type 'CA' to purchase a ticket to the West Coast, type 'NY' to purchase a ticket to the Northeast");

if(response === "CA"){
  response = prompt("You buy a ticket to Los Angeles and board the plane. Type 'sleep' to rest on your flight, type 'chat' to meet your seatmate");
} else if (response === "NY"){
  response = prompt("You buy a ticket to New York City and board the plane. Type 'baby' to sit in front of a crying baby, type 'cute' to sit next to an attractive person");
} else {
  alert ("Please type in a valid input! Refresh the page to try again.");
}
