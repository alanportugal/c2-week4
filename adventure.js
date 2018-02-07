// Define the size of the game play area
var maxX = 2
var maxY = 2

// USer starts at x0, y0 (bottom left of board)
var userX = 0
var userY = 0

// Hide the treasure, also with x y values
var treasureX = 2
var treasureY = 1

// Flag that controls loop
var treasureFound = false

// Get user's name
var name = prompt("Welcome brave adventurer! What's your name?")

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