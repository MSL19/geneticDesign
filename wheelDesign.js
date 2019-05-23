//const slice = require("./slice");
const scalor = 2;
class wheelDesign{
    constructor(numSlices){
        this.sliceArr = [];
        this.fitness = 0;
        for(let i =0; i<numSlices; i++){
            this.sliceArr[i] = new slice(i);
        }
    }
    getSlice(num){
        return this.sliceArr[num];
    }
    getSlices(){
        return this.sliceArr.length;
    }
    overrideSlices(slices){
        this.sliceArr = slices;
    }
    
    mate(partnerDesign) {
      let tempArr = [];
        for(let i = 0; i<partnerDesign.getSlices(); i++){
           if(Math.random()>0.5){
                this.sliceArr[i].clone().mutateSmall();
                tempArr[i] = (this.sliceArr[i].clone());
           }
           else{
                partnerDesign.sliceArr[i].mutateSmall();
                tempArr[i] = (partnerDesign.sliceArr[i].clone());
           }
        }
        let temp = new wheelDesign(100);
        temp.overrideSlices(tempArr);
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
        createCanvas(2000,2000);
        background(50);

        noStroke();
        translate(1000, 1000);
        strokeWeight(15);
        for(let i = 0; i<this.sliceArr.length; i++){
            noFill();
            stroke(255, 204, 0);
            arc(0, 0, 20*i, 20*i, 0-(this.sliceArr[i].getAC()/(i*scalor)), 0+(this.sliceArr[i].getAC()/(i*scalor)));
        }
        rotate((2*PI) / 5.0);
        for(let i = 0; i<this.sliceArr.length; i++){
            noFill();
            stroke(255, 4, 0);
            arc(0, 0, 20*i, 20*i, 0-(this.sliceArr[i].getAC()/(i*scalor)), 0+(this.sliceArr[i].getAC()/(i*scalor)));
        }
        rotate((2*PI) / 5.0);
        for(let i = 0; i<this.sliceArr.length; i++){
            noFill();
            stroke(255, 4, 0);
            arc(0, 0, 20*i, 20*i, 0-(this.sliceArr[i].getAC()/(i*scalor)), 0+(this.sliceArr[i].getAC()/(i*scalor)));
        }rotate((2*PI) / 5.0);
        for(let i = 0; i<this.sliceArr.length; i++){
            noFill();
            stroke(255, 4, 0);
            arc(0, 0, 20*i, 20*i, 0-(this.sliceArr[i].getAC()/(i*scalor)), 0+(this.sliceArr[i].getAC()/(i*scalor)));
        }rotate((2*PI) / 5.0);
        for(let i = 0; i<this.sliceArr.length; i++){
            noFill();
            stroke(255, 4, 0);
            arc(0, 0, 20*i, 20*i, 0-(this.sliceArr[i].getAC()/(i*scalor)), 0+(this.sliceArr[i].getAC()/(i*scalor)));
        }


    }
    evalFitness(){
        this.fitness = 0;
        let mass = 0;
        for(let i = 0; i<this.sliceArr.length; i++){
            this.fitness += this.sliceArr[i].getAC();
            mass += this.sliceArr[i].getAC()*i*i;
            if(this.sliceArr[i].getAC() < (0.2*this.sliceArr[i].getSector())){ 
                this.fitness -= 160;
            } 
           if(i>0){
            this.fitness -= 0.8*(Math.abs(this.sliceArr[i].getAC()-this.sliceArr[i-1].getAC()));

           }
            /*if(i>0&&this.sliceArr[i].getAC()>(this.sliceArr[i-1].getAC()*1.6)){
                this.fitness-=70;
            }
            else if(i>0&&this.sliceArr[i].getAC()<(this.sliceArr[i-1].getAC()*0.8)){
                this.fitness-= (this.sliceArr[i].getAC()-);
            }*/
        }
        this.fitness = this.fitness / (8*mass);
    }
   
}
//module.exports = wheelDesign;