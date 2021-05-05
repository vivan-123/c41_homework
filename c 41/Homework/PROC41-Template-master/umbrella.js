class Umbrella
{
    constructor(x,y,radius)
    {   
        var options =
        {
            isStatic: true
        }

        this.body = Bodies.circle(x,y-100,radius,options)
        this.body.position.x = x;
        this.body.position.y = y;
        this.radius = radius;
        this.boy = loadImage("images/walk/walking_1.png", "boyAnimation");
        World.add(world, this.body);

    }

    display()
    {
        imageMode (CENTER);
        image(this.boy,this.body.position.x,this.body.position.y,400,400);
    }

}
