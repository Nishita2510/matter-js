     class Stone{
  constructor(x,y,height,weight){
   var options={
     'restitution':0.8,
     'friction':1.3,
     'density':1.0
    }
     this.body=Bodies.rectangle(x,y,height,weight,options);
     this.weight=weight;
     this.height=height;
     World.add(world,this.body)
    }
   display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill(0)
        rect(0,0,this.width,this.height)
        pop()

    }
}