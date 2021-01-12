function collisionX(p1, p2){

  if(p1.XVELOCITY == 0 && p2.XVELOCITY == 0) return;

  if(p1.OLDX > p2.OLDX){
    collisionX(p2, p1);
    return;
  }

  let overlap = (p2.X - p1.X) - p1.WIDTH;

  if(overlap >= 0) return;
  
  
  let distribution1 = p1.XVELOCITY / (p1.XVELOCITY - p2.XVELOCITY);
  let distribution2 = 1-distribution1;
  
  //Swap the locations of the distrubution if you don't want push physics
  p1.X += overlap * distribution2;
  p2.X -= overlap * distribution1;

  p1.XVELOCITY += overlap * distribution2;
  p2.XVELOCITY -= -overlap * distribution1;

}

//For my game, I want players to be able to sit on top of each other, and be carried around
//This means that if a player collides with another player from the top, they will instead be pushed upwards instead of stopping the other player.

function collisionY(p1, p2){

  if(p1.OLDY > p2.OLDY){
    collisionY(p2, p1);
    return;
  }

  let overlap = (p2.Y - p1.Y) - p1.HEIGHT;

  if(overlap >= 0) return;

  p1.Y += overlap;
  p1.YVELOCITY = overlap;

}
