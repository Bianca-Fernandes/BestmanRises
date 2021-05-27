class Drop{
    constructor(x,y){
        var options = {
            restitution: 0.001,
            friction:0.1
        }
    this.drop = Bodies.circle(x,y,5,options);
    this.radius = 6
    World.add(world, this.drop);
    }   
    
    update(){
        if(this.drop.position.y > height){
            Matter.Body.setPosition(this.drop, {x:random(0,400), y:random(0,400)})   
    }}
    
    createDrop(){
        fill("lightblue");
        ellipseMode(CENTER);
        ellipse(this.drop.position.x, this.drop.position.y, this.radius, this.radius);
    }
}