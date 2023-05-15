const distanceFunctions = require('./distance_calculation.js');
const officeCordsLat = 42.6665921;
const officeCordsLon = 23.351723;
const distanceinKmRequiredForInvitation = 100.0;

const fs = require("fs");
const readline = require("readline");

let usersAndTheirDistanceFromOffice = [];
let usersFinalListForInvitation = [];


const readInterface = readline.createInterface({
  input: fs.createReadStream("partners.txt"),
  output: process.stdout,
  console: false,
});

// calling the distance calculating function and pushing the user, id and his distance to a new list
readInterface.on("line", function (line) {
  let user = JSON.parse(line);
  let distance = distanceFunctions.calculateGreatCircleDistance(officeCordsLat, officeCordsLon, parseFloat(user.latitude), parseFloat(user.longitude));
  usersAndTheirDistanceFromOffice.push({Name: user.name, id: user.partner_id , Distance: distance});
});

// pushing only people within the allowed radius for invitation to another list, then sorting the list by id (ascending) and finally printing the list
readInterface.on("close", function () {
  usersAndTheirDistanceFromOffice.forEach((user) => {
    if(user.Distance < distanceinKmRequired){
      usersFinalListForInvitation.push({Name: user.Name, id: user.id, Distance: user.Distance})
    }
  });

  // Sorting should be outside the forEach loop
  usersFinalListForInvitation.sort((a, b) => a.id - b.id);

  usersFinalListForInvitation.forEach((user) => {
    console.log(user);
  });
});


