const Ksp = 0.44;
const density = 3.02;
const maxDiv = 4;
class chunck{
    constructor(start, end){
        this.startPoint = start;
        this.endPoint = end;
    }
    getStart(){
        return this.startPoint;
    }
    getEnd(){
        return this.endPoint;
    }
}
class slice{
    constructor(radius){
        
        this.color = color(Math.random()*255, Math.random()*255, Math.random()*255);
        this.spring = this.AC*Ksp;
        this.mass = this.AC*density;
        this.sector = (radius*Math.PI*2)/5;
        this.AC = this.sector*Math.random();
        this.divisions = 1;//Math.floor(Math.random()*maxDiv)+1;
      /*  this.form = [];
        let start = (this.sector/this.divisions)*Math.random();
        let end = start + (this.sector/this.divisions)*Math.random();
        for(let i = 0; i<(this.divisions); i++){
           
            this.form[i] = new chunck(start,end);
            
            this.AC += form[i].getEnd()-form[i].getStart();
        }
        if(this.divisions === 1){
            let start = (Math.random()/this.divisions)*this.sector/2;
            this.form[0] = new chunck(start,start+((Math.random())/this.divisions)*this.sector/2);
            this.AC += form[0].getEnd()-form[0].getStart();
        }  */
             
    }
    mutateSmall(){
        if(Math.random()>0.97){
        this.AC += (Math.random()-0.48)*this.sector/13;
        this.color = color(Math.random()*255, Math.random()*255, Math.random()*255);
        if(this.AC > this.sector){
            this.AC = this.sector;
        }
        if(this.AC < 0){
            this.AC += 1;
            
        }
    }
    }
    getColor(){
        return this.color;
    }
    getSector(){
        return this.sector;
    }
    getAC(){
        if(this.AC < 0){
            this.AC = 1;
            
        }
        return this.AC;
    } 
    clone() { //this is needed to stop shallow copying
        let newSlice = new slice(this.radius);
        newSlice.color = this.color;
        newSlice.spring = this.spring;
        newSlice.mass = this.mass;
        newSlice.sector = this.sector;
        newSlice.AC = this.AC;
        newSlice.divisions = this.divisions;
        return newSlice;
    }   
        /* for(let i = 0; i<this.form.length; i++){
            let newStart = this.form[i].getStart + (Math.random()-0.5)/5;
            let newEnd = this.form[i].getEnd + (Math.random()-0.5)/5;
            if(newStart>this.sector){
                newStart = sector - (Math.random()-0.5)/5;
            }
            if(newStart < 0){
                newStart = 0 + + (Math.random()-0.5)/5;
            }
            if(newEnd>this.sector){
                newEnd = sector - (Math.random()-0.5)/5;
            }
            if(newEnd < 0){
                newEnd = 0 + + (Math.random()-0.5)/5;
            }
            if(newEnd<newStart){
                let temp = newStart;
                newStart = newEnd;
                newEnd = temp;
            }
            this.form[i] = new chunck(newStart, newEnd);
        }*/
    }


//module.exports = silce;