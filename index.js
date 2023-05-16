const distanceFunctions = require('./distance_calculation.js');
const usersFunctions = require('./users_operation.js');
const constantsFunctions = require('./constants.js')

const fs = require("fs");
const readline = require("readline");

const usersAndTheirDistanceFromOffice = [];
const usersFinalListForInvitation = [];


const readInterface = readline.createInterface({
  input: fs.createReadStream('partners.txt'),
  console: false,
});

readInterface.on("line", function (line) {
  let { latitude, longitude, name, partner_id } = JSON.parse(line);
  let distance = distanceFunctions.calculateGreatCircleDistanceFromHereToThere(
    constantsFunctions.officeCordsLat,
    constantsFunctions.officeCordsLon,
    parseFloat(latitude),
    parseFloat(longitude),
  );
  usersAndTheirDistanceFromOffice.push({ Name: name, id: partner_id, Distance: distance });
});


// pushing only people within the allowed radius for invitation to another list, then sorting the list by id (ascending) and finally printing the list
readInterface.on("close", function(){
  usersFunctions.usersDistanceListFilter(usersAndTheirDistanceFromOffice, usersFinalListForInvitation, constantsFunctions.distanceinKmRequiredForInvitation)
  .sort((a, b) => a.id - b.id)
  .forEach((user1) => {
    console.log(user1);
  })
});



