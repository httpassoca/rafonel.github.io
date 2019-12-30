class Triangle {
    constructor(){
        this.side = random(width/10, height/2);
        // this.side = 15;
        this.y1 = 0;
        this.y2 = 0;
        this.y3 = -this.side*1.7;
        this.x1 = -this.side;
        this.x2 = this.side;
        this.x3 = 0;

        this.age = 0;
        this.mature = false;

        this.rotation = random(0,360);
        this.time = 400;
        this.speed = 1/7;

        this.timeX = parseInt(random(1,this.time));
        this.timeY = parseInt(random(1,this.time));
        this.timeRotation = parseInt(random(1,this.time));
        this.locX = random(1,width);
        this.locY = random(1,height);
        // this.b=random(1,1.4);
    }

    update(){
        this.y1 += 1/100;
        this.y2 += 1/100;
        this.y3 -= 1/100;
        this.x1 -= 1/100;
        this.x2 += 1/100;
        // this.x3 -= 0/100;
        this.age += 1;
        if(this.mature == false){
            this.alfa = this.age/3;
        }else{
            this.alfa -= 20;
        }
        if(this.alfa >= 255){
            this.mature = true;
        }
        if(this.timeRotation == this.time/2){ this.timeRotation = parseInt(random(1,this.time)) }
        if(this.timeY == this.time/2){this.timeY = parseInt(random(1,this.time));}
        if(this.timeX == this.time/2){this.timeX = parseInt(random(1,this.time));}


        if(this.timeX > this.time/2){
            if(this.locX > this.side){
                this.timeX -= 1;
                this.locX -= this.speed;
            }else{
                this.timeX = parseInt(random(1,this.time/2));
            }
        }else{
            if(this.locX < height - this.side){
                this.timeX += 1;
                this.locX += this.speed;
            }else{
                this.timeX = parseInt(random(this.time/2,this.time));
            }
        }        
        
        if(this.timeY > this.time/2){
            if(this.locY > this.side){
                this.timeY -= 1;
                this.locY -= this.speed;
            }else{
                this.timeY = parseInt(random(1,this.time/2));
            }
        }else{
            if(this.locY < height - this.side){
                this.timeY += 1;
                this.locY += this.speed;
            }else{
                this.timeY = parseInt(random(this.time/2,this.time));
            }
        }
        if(this.timeRotation > this.time/2){
                this.timeRotation -= 1;
                this.rotation -= 1/10;
        }else{
                this.timeRotation += 1;
                this.rotation +=1/10;
        }

        // this.b +=1/1000;
    }
    
    show(){
        push();
        noFill();
        // fill(255,255,255);
        stroke(0,255,0,this.alfa);
        // noStroke();
        smooth();
        translate(this.locX,this.locY);

        rotate(this.rotation);
        // scale(this.b);
        triangle(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3);
        pop();
        // stroke(255);
        // line(0,this.max,width,this.max);
    }

    isAlive(){
        if(this.age > 1000){return false}
        else{return true}
    }
}
