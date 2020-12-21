class rope{
    constructor(body1,body2,offsetX, offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var option={
            bodyA:body1,
             bodyB:body2,
             pointB:{x:this.offsetX, y:this.offsetY}
        }
        //console.log(options);
        this.rope=Constraint.create(option);
        World.add(world,this.rope);
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        strokeWeight(4);
        // line(pointA.x,pointA.y,pointB.x,pointB.y);

    
}
}