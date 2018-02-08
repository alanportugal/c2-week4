// Define the size of the game play area
var maxX = 2
var maxY = 2
var minX = 0
var minY = 0

// User starts at x0, y0 (bottom left of board)
var userX = 0
var userY = 0

// Hide the treasure, also with x y values
var treasureX = 2
var treasureY = 2

//Based on current position determine available directions
//Store text of each possible direction
var strN = ""
var strS = ""
var strE = ""
var strW = ""

//Store as a boolean each possible direction
var intN = 0
var intS = 0
var intE = 0
var intW = 0
var intTotal = 4

function funcx() {
   setTimeout(funcx, 3000);
}

funcx();

function beginGame() {
  // Flag that controls loop
  var treasureFound = false

  // Get user's name
  var name = prompt("Welcome brave adventurer! What's your name?")

  // Tell user the size of the game area:
  alert("The game area size is " + (maxX+1) + " squares wide and " + (maxY+1) + " squares high.")

  while(!treasureFound){

    // Check if North is available
    if ((userY + 1) <= maxY) {
      strN = "north"
      intN = 1
    }
      
    // Check if South is available
    if ((userY - 1) >= minY) {
      strY = "south"
      intY = 1
    }
    
    // Check if East is available
    if ((userX + 1) <= maxX) {
      strE = "east"
      intE = 1
    }

    // Check if West is available
    if ((userX - 1) >= minX) {
      strW = "west"
      intW = 1
    }

    //***********************************************
    //Dynamically build available directions
    //***********************************************
    var strDirectionsList
    
    //Check if 'north' is available
    if (userY < maxY) {
      if ((userY + 1) < maxY) {
        //strN = "north"
      } else {
        strN = ""
      }
    }

    //Check if 'south' is available
    if (userY > minY) {
      if ((userY - 1) > minY) {
        //strS = "south"
      } else {
        strS = ""
      }
    }

    //Check if 'east' is available
    if (userX < maxX) {
     if ((userX + 1) < maxX) {
        //strE = "east"
      } else {
        strE = ""
      }
    }

    //Check if 'west' is available
    if (userX > minX) {
      if ((userX - 1) > minX) {
        //strW = "west"
      } else {
        strW = ""
      }
    }

    strDirectionsList = strN + ", " + strS + ", " + strE + ", " + strW
    //***********************************************

    //Prompt user for direction
    var direction = prompt("You are currently located at (" + userX + ", " + userY + ") - within the boundary, which direction would you like to go? (north, south, east, west)")
    console.log(direction)
    
    if (direction == "north") {
      //User enters 'north'
      //Check if direction is available
      if ((userY + 1) <= maxY){
          //Increase user's Y location by one.
          userY = userY + 1
          //Check to see if new location contains the treasure.
          if(userX == treasureX && userY == treasureY){
            treasureFound = true
          }
      } else {
        console.log("Sorry, you have reached the outer North boundary please select a different direction.")
      }
    } else if (direction == "south") {
      //User enters 'south'
      //Check if direction is available
      if ((userY - 1) >= minY){
          //Decrease user's Y location by one.
          userY = userY - 1
          //Check to see if new location contains the treasure.
          if(userX == treasureX && userY == treasureY){
            treasureFound = true
          }
      } else{
        console.log("Sorry, you have reached the outer South boundary please select a different direction.")
      }
    } else if (direction == "east") {
      //User enters 'east'
      //Check if direction is available
      if ((userX) + 1 <= maxX){
          //Increase user's X location by one.
          userX = userX + 1
          //Check to see if new location contains the treasure.
          if(userX == treasureX && userY == treasureY){
            treasureFound = true
          }
      } else{
        console.log("Sorry, you have reached the outer East boundary please select a different direction.")
      }
    } else if (direction == "west") {
      //User enters 'west'
      //Check if direction is available
      if ((userX - 1) >= minX){
          //Decrease user's X location by one.
          userX = userX - 1
          //Check to see if new location contains the treasure.
          if(userX == treasureX && userY == treasureY){
            treasureFound = true
          }
      } else{
        console.log("Sorry, you have reached the outer West boundary please select a different direction.")
      }
    }
  }
  /*treasureFound = true*/
  alert("Congratulations " + name + "! You have discovered the treasure! After you press 'Ok', the game will reset.")
  console.log("Congratulations " + name + "! You have discovered the treasure!")
  location.reload()
}