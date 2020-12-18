class drops{
    constructor(inputX,inputY){
        var options = {
            isStatic:false,
            //friction:0.1,
            restitution:0.3,
            density:1.2
        }
        //this.image = loadImage("paper.png");
		this.x=inputX;
        this.y=inputY;
        this.body=Bodies.circle(this.x, this.y, 20, options)
		World.add(world, this.body);
    }
    display(){
        var posDrop = this.body.position;

        push()
		translate(posDrop.x, posDrop.y);
		rectMode(CENTER)
		strokeWeight(3);
		fill("blue")
        ellipse(0,0,10,15);
        //imageMode(CENTER);
        //image(this.image, 0, 0, 50, 50);
		pop()
    }
}