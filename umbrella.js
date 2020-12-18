class umbrella{
    constructor(inputX,inputY){
        var options = {
            isStatic:true,
            friction:0.1,
            restitution:0.3,
            density:1.2
        }
        this.image = loadImage("walking_1.png");
		this.x=inputX;
        this.y=inputY;
        this.body=Bodies.circle(this.x, this.y, 20, options)
		World.add(world, this.body);
    }
    display(){
        var posUmbrella = this.body.position;

        push()
		translate(posUmbrella.x, posUmbrella.y);
		rectMode(CENTER)
		strokeWeight(3);
		fill(255,0,255)
        ellipse(0,0,20,20);
        imageMode(CENTER);
        scale(7);
        image(this.image, 0, 0, 50, 50);
		pop()
    }
}