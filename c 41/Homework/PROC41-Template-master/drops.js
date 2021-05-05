class Drop
{
    constructor(x,y)
    {   
        var options =
        {
            isStatic: false,
            restitution:0.1
        }

        this.body = Bodies.circle(x,y,5,options)
        this.body.position.x = x;
        this.body.position.y = y;
        //this.body.radius = 5;
        World.add(world, this.body);

       
    }

    update()
    {
        if (this.body.position.y > 800)
        {
            Matter.Body.setPosition(this.body,{x:random(0,1400),y:random(-10,-1000)});
        }
    }

    display()
    {
        fill ("blue")
        circle(this.body.position.x,this.body.position.y,5);
    }
}
