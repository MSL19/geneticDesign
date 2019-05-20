//const slice = require("./slice");
class wheelDesign{
    constructor(numSlices){
        this.sliceArr = [];
        this.fitness = 0;
        for(let i =0; i<numSlices; i++){
            this.sliceArr[i] = new slice(i);
        }
    }

    getSlices(){
        return this.sliceArr.length;
    }
    overrideSlices(slices){
        this.sliceArr = slices;
    }
    
    mate(partnerDesign) {
        let splitNum = Math.floor(partnerDesign.getSlices()*Math.random());
        for(let i = 0; i<partnerDesign.getSlices(); i++){
            this.sliceArr[i].mutateSmall();
            partnerDesign.sliceArr[i].mutateSmall();
        }
        let temp = new wheelDesign(100);
        temp.overrideSlices(this.sliceArr.slice(0,splitNum).concat(partnerDesign.sliceArr.slice(splitNum, partnerDesign.sliceArr.length)));
        return temp;
    }
    getFitness(){
        return this.fitness;
    }
    drawDesC(){
        createCanvas(800,800);
        background(50);

        noStroke();
        
        for(let i = 0; i<this.sliceArr.length; i++){
            noFill();
            stroke(this.sliceArr[i].getColor());
            strokeWeight(10);
            arc(50+i*4, 400, 4*i, 4*i, 0-(this.sliceArr[i].getAC()/(i*Math.PI*0.4)), 0+(this.sliceArr[i].getAC()/(i*Math.PI*0.4)));
        }

    }
    drawDes(){
        createCanvas(800,800);
        background(50);

        noStroke();
        
        for(let i = 0; i<this.sliceArr.length; i++){
            noFill();
            stroke(255, 204, 0);
            strokeWeight(10);
            arc(50+i*4, 400, 4*i, 4*i, 0-(this.sliceArr[i].getAC()/(i*Math.PI*0.4)), 0+(this.sliceArr[i].getAC()/(i*Math.PI*0.4)));
        }

    }
    evalFitness(){
        this.fitness = 0;
        let mass = 0;
        for(let i = 0; i<this.sliceArr.length; i++){
            this.fitness += this.sliceArr[i].getAC();
            mass += this.sliceArr[i].getAC();
            if(this.sliceArr[i].getAC() < (2*i)){
                this.fitness -= 10;
            } 
            if(i>0&&this.sliceArr[i].getAC()>(this.sliceArr[i-1].getAC()*1.4)){
                this.fitness-=50;
            }
        }
        this.fitness = this.fitness / (mass*0.5);
    }
   
}
//module.exports = wheelDesign;