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
class Slice{
    constructor(radius){
        this.AC = Math.random()*((Math.PI*2*radius)/5);

        this.spring = this.AC*Ksp;
        this.mass = this.AC*density;
        this.sector = (radius*Math.PI*2)/5;
        this.divisions = 1;//Math.floor(Math.random()*maxDiv)+1;
        this.form = [];
        for(let i = 1; i<(this.divisions); i++){
            let start = (Math.random()/this.divisions)*i*this.sector;
            this.form[i] = new chunck(start,start+((Math.random())/this.divisions)*this.sector/2);
        }
        if(this.divisions === 1){
            let start = (Math.random()/this.divisions)*this.sector/2;
            this.form[0] = new chunck(start,start+((Math.random())/this.divisions)*this.sector/2);
        }        
    }
    mutateSmall(){
        for(let i = 0; i<this.form.length; i++){
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
        }
    }
}

let test = new Slice(50);