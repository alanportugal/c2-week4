// Define the size of the game play area
var maxX = 3
var maxY = 3

// USer starts at x0, y0 (bottom left of board)
var userX = 0
var userY = 0

// Hide the treasure, also with x y values
var treasureX = 3
var treasureY = 3


function beginGame() {
  // Flag that controls loop
  var treasureFound = false

  // Get user's name
  var name = prompt("Welcome brave adventurer! What's your name?")

  // Tell user the size of the game area:
  alert("The game area size is an area that is " + maxX + " wide and " + maxY + " high.")

  while(!treasureFound){
    var direction = prompt("Which direction would you like to go in? (north, south, east, west)")

    console.log(direction)

    // tmp vars, only used for checking validy of new user location after move

    var newX
    var newY

    // see what new user location should be
    // check if new user location is valid
    // check if new user location is treasure

    if(direction == "north"){
      newX = userX
      newY = userY + 1
      // neither value < 0, neither is > max
      if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
        userX = newX
        userY = newY      
      } else {
        console.log("There is a forbidden mountain range in that direction, you cannot go!")
      }
    } else if(direction == "east"){
      newX = userX + 1
      newY = userY
      // neither value < 0, neither is > max
      if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
        userX = newX
        userY = newY
      } else {
        console.log("There is a forbidden mountain range in that direction, you cannot go!")
      }
    } else if(direction == "south"){
      newX = userX
      newY = userY - 1
      // neither value < 0, neither is > max
      if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
        userX = newX
        userY = newY
      } else {
        console.log("There is a forbidden mountain range in that direction, you cannot go!")
      }
    } else if(direction == "west"){
      newX = userX - 1
      newY = userY
      // neither value < 0, neither is > max
      if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
        userX = newX
        userY = newY
      } else {
        console.log("There is a forbidden mountain range in that direction, you cannot go!")
      }
    } else {
       console.log("Please enter a real direction")
       }

    //see if user location matches treasure
      if(userX == treasureX && userY == treasureY){
        treasureFound
      }
  }
  
  
}