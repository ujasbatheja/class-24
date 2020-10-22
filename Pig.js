class Pig{

   constructor(x,y)
   {
    var object_options= {
        restitution: 0.8,
        friction: 0.3,
        density: 1.0

      }
      this.body=Bodies.rectangle(x,y,50,50,object_options);
      this.width = 50;
      this .height = 50;
      World.add(world,this.body);
   }

   display()
   { var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      angleMode(RADIANS);
      strokeWeight(4);
      stroke("yellow");
      rectMode(CENTER);
      fill("pink");
      rect(0,0,this.width,this.height);
      pop()
   }


}