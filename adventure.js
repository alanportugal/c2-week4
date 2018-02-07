// Define the size of the game play area
var maxX = 3
var maxY = 3
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

    //Determine the number of commas to list based on integer count of available directions
    var intCommasNeeded = 0
    intTotal = intN + intS + intE + intW

    if (intTotal >= 2) {
      intCommasNeeded = intTotal - 1
    }

    //***********************************************
    //Dynamically build available directions
    //***********************************************
    var strDirectionsList = ""
    
    //Check if 'north' is available
    if (intN == 1) {
      strDirectionsList = strDirectionsList + strN
      if (intCommasNeeded >= 1) {
        strDirectionsList = strDirectionsList + ", "
        intCommasNeeded = intCommasNeeded - 1
      }      
      else {
        strDirectionsList = strDirectionsList
      }
    }

    //Check if 'south' is available
    if (intS == 1) {
      strDirectionsList = strDirectionsList + strS
      if (intCommasNeeded >= 1) {
        strDirectionsList = strDirectionsList + ", "
        intCommasNeeded = intCommasNeeded - 1
      }      
      else {
        strDirectionsList = strDirectionsList
      }
    }

    //Check if 'east' is available
    if (intE == 1) {
      strDirectionsList = strDirectionsList + strE
      if (intCommasNeeded >= 1) {
        strDirectionsList = strDirectionsList + ", "
        intCommasNeeded = intCommasNeeded - 1
      }      
      else {
        strDirectionsList = strDirectionsList
      }
    }

    //Check if 'west' is available
    if (intW == 1) {
      strDirectionsList = strDirectionsList + strW
      if (intCommasNeeded >= 1) {
        strDirectionsList = strDirectionsList + ", "
        intCommasNeeded = intCommasNeeded - 1
      }      
      else {
        strDirectionsList = strDirectionsList
      }
    }
    //***********************************************

    //var direction = prompt("Which available directions would you like to go? (north, south, east, west)")

    //Dynamic list of available directions
    var direction = prompt("You are currently located at (" + userX + ", " + userY + ") - which available directions would you like to go? (" + strDirectionsList + ")")

    console.log(direction)

    //User enters 'north'
    if (direction == "north") {
      //Check if direction is available
      if (intN == 1){
          //Increase user's Y location by one.
          userY = userY + 1
          //Allow south direction
          //intS = 1
          //Check to see if new location contains the treasure.
          if(userX == treasureX && userY == treasureY){
            treasureFound = true
          }
      } 
      else{
        console.log("Sorry, you have reached the outer boundary please select a different direction.")
      }
    }

    //User enters 'south'
    if (direction == "south") {
      //Check if direction is available
      if (intS == 1){
          //Decrease user's Y location by one.
          userY = userY - 1
          //Allow north direction
          //intN = 1
          //Check to see if new location contains the treasure.
          if(userX == treasureX && userY == treasureY){
            treasureFound = true
          }
      } 
      else{
        console.log("Sorry, you have reached the outer boundary please select a different direction.")
      }
    }

    //User enters 'east'
    if (direction == "east") {
      //Check if direction is available
      if (intE == 1){
          //Increase user's X location by one.
          userX = userX + 1
          //Allow west direction
          //intW = 1
          //Check to see if new location contains the treasure.
          if(userX == treasureX && userY == treasureY){
            treasureFound = true
          }
      } 
      else{
        console.log("Sorry, you have reached the outer boundary please select a different direction.")
      }
    }

    //User enters 'west'
    if (direction == "west") {
      //Check if direction is available
      if (intW == 1){
          //Decrease user's X location by one.
          userX = userX - 1
          //Allow east direction
          //intE = 1
          //Check to see if new location contains the treasure.
          if(userX == treasureX && userY == treasureY){
            treasureFound = true
          }
      } 
      else{
        console.log("Sorry, you have reached the outer boundary please select a different direction.")
      }
    }

  }
  /*treasureFound = true*/
  alert("Congratulations " + name + "! You have discovered the treasure!")
  console.log("Congratulations " + name + "! You have discovered the treasure!")
}