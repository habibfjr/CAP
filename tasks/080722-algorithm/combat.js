//Grasshopper - Terminal game combat function
function combat(health, damage) {

    if(health-damage >= 0){
    return health - damage
    } else{
      return health = 0
    }
  }