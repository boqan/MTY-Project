console.log("Hello World!");

const fs = require("fs");
const readline = require("readline");

let users = [];

const readInterface = readline.createInterface({
  input: fs.createReadStream("partners.txt"),
  output: process.stdout,
  console: false,
});

readInterface.on("line", function (line) {
  users.push(JSON.parse(line));
});

readInterface.on("close", function () {
  users.forEach((user) => {
    console.log(user);
  });
});
