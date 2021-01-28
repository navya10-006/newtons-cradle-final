class Bob{
    constructor(x,y,r){
        var options={
            'restitution':0.3,
            'friction':0.5,
            'density':1.6,
            isStatic:false
        }
        this.body =Bodies.circle(x,y,r/2,options);
        this.r=r;
        World.add(world, this.body);
    }
    display(){
        ellipseMode(CENTER);
        fill("white");
        ellipse(this.body.position.x,this.body.position.y,this.r);
    }
}