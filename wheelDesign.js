
//const slice = require("./slice");
const scalor = 2;
let massScale = 2;
let uniScale = 0.8;
let strengthScale = 120;
let completeAdv = 2;
let materialCost = 8;
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
        let canvas = createCanvas(1000,1000);
        canvas.parent('canvas_box');        
        background(50);

        noStroke();
        translate(500, 500);
        strokeWeight(10);
        for(let i = 0; i<this.sliceArr.length; i++){
            noFill();
            stroke(this.sliceArr[i].getColor());
            arc(0, 0, 10*i, 10*i, 0-(this.sliceArr[i].getAC()/(i*scalor)), 0+(this.sliceArr[i].getAC()/(i*scalor)));
        }
        rotate((2*PI) / 5.0);
        for(let i = 0; i<this.sliceArr.length; i++){
            noFill();
            stroke(this.sliceArr[i].getColor());
            arc(0, 0, 10*i, 10*i, 0-(this.sliceArr[i].getAC()/(i*scalor)), 0+(this.sliceArr[i].getAC()/(i*scalor)));
        }
        rotate((2*PI) / 5.0);
        for(let i = 0; i<this.sliceArr.length; i++){
            noFill();
            stroke(this.sliceArr[i].getColor());
            arc(0, 0, 10*i, 10*i, 0-(this.sliceArr[i].getAC()/(i*scalor)), 0+(this.sliceArr[i].getAC()/(i*scalor)));
        }rotate((2*PI) / 5.0);
        for(let i = 0; i<this.sliceArr.length; i++){
            noFill();
            stroke(this.sliceArr[i].getColor());
            arc(0, 0, 10*i, 10*i, 0-(this.sliceArr[i].getAC()/(i*scalor)), 0+(this.sliceArr[i].getAC()/(i*scalor)));
        }rotate((2*PI) / 5.0);
        for(let i = 0; i<this.sliceArr.length; i++){
            noFill();
            stroke(this.sliceArr[i].getColor());
            arc(0, 0, 10*i, 10*i, 0-(this.sliceArr[i].getAC()/(i*scalor)), 0+(this.sliceArr[i].getAC()/(i*scalor)));
        }



    }
    drawDes(){
        let canvas = createCanvas(1000,1000);
        canvas.parent('canvas_box');
        background(50);

        noStroke();
        translate(500, 500);
        strokeWeight(10);
        for(let i = 0; i<this.sliceArr.length; i++){
            noFill();
            stroke(255, 204, 0);
            arc(0, 0, 10*i, 10*i, 0-(this.sliceArr[i].getAC()/(i*scalor)), 0+(this.sliceArr[i].getAC()/(i*scalor)));
        }
        rotate((2*PI) / 5.0);
        for(let i = 0; i<this.sliceArr.length; i++){
            noFill();
            stroke(255, 4, 0);
            arc(0, 0, 10*i, 10*i, 0-(this.sliceArr[i].getAC()/(i*scalor)), 0+(this.sliceArr[i].getAC()/(i*scalor)));
        }
        rotate((2*PI) / 5.0);
        for(let i = 0; i<this.sliceArr.length; i++){
            noFill();
            stroke(255, 4, 0);
            arc(0, 0, 10*i, 10*i, 0-(this.sliceArr[i].getAC()/(i*scalor)), 0+(this.sliceArr[i].getAC()/(i*scalor)));
        }rotate((2*PI) / 5.0);
        for(let i = 0; i<this.sliceArr.length; i++){
            noFill();
            stroke(255, 4, 0);
            arc(0, 0, 10*i, 10*i, 0-(this.sliceArr[i].getAC()/(i*scalor)), 0+(this.sliceArr[i].getAC()/(i*scalor)));
        }rotate((2*PI) / 5.0);
        for(let i = 0; i<this.sliceArr.length; i++){
            noFill();
            stroke(255, 4, 0);
            arc(0, 0, 10*i, 10*i, 0-(this.sliceArr[i].getAC()/(i*scalor)), 0+(this.sliceArr[i].getAC()/(i*scalor)));
        }


    }
    showFEA(){
        let canvas = createCanvas(1000,1000);
        canvas.parent('canvas_box');        background(50);

        noStroke();
        translate(500, 500);
        strokeWeight(10);
        let movementNum = 0;
        for(let i = 0; i<this.sliceArr.length; i++){
            noFill();
            let color = 0;
            if(this.sliceArr[i].getAC()<this.sliceArr[i].getSector()){
                color = 3*this.sliceArr[i].getAC();
            }
            else{
                color = 255;
            }
            stroke(255-color, color*1.2,0);
            if(i>0){
            if(this.sliceArr[i].getAC()<this.sliceArr[i].getSector()){
                movementNum += (10/this.sliceArr[i].getAC());
            }
            }
           /* if(movementNum > 10*i){
                movementNum = 2000;
                console.log("asdasdsadsa");
            }*/
            arc(0-movementNum, 0, 10*i, 10*i, 0-(this.sliceArr[i].getAC()/(i*scalor)), 0+(this.sliceArr[i].getAC()/(i*scalor)));
            console.log(movementNum);
        }
        
        rotate((2*PI) / 5.0);
        for(let i = 0; i<this.sliceArr.length; i++){
            noFill();
            stroke(255, 204, 0);
            arc(0, 0, 10*i, 10*i, 0-(this.sliceArr[i].getAC()/(i*scalor)), 0+(this.sliceArr[i].getAC()/(i*scalor)));
        }
        rotate((2*PI) / 5.0);
        for(let i = 0; i<this.sliceArr.length; i++){
            noFill();
            stroke(255, 204, 0);
            arc(0, 0, 10*i, 10*i, 0-(this.sliceArr[i].getAC()/(i*scalor)), 0+(this.sliceArr[i].getAC()/(i*scalor)));
        }rotate((2*PI) / 5.0);
        for(let i = 0; i<this.sliceArr.length; i++){
            noFill();
            stroke(255, 204, 0);
            arc(0, 0, 10*i, 10*i, 0-(this.sliceArr[i].getAC()/(i*scalor)), 0+(this.sliceArr[i].getAC()/(i*scalor)));
        }rotate((2*PI) / 5.0);
        for(let i = 0; i<this.sliceArr.length; i++){
            noFill();
            stroke(255, 204, 0);
            arc(0, 0, 10*i, 10*i, 0-(this.sliceArr[i].getAC()/(i*scalor)), 0+(this.sliceArr[i].getAC()/(i*scalor)));
        }
    }
    evalFitness(){
            
            this.fitness = 0;
            let mass = 0;
            for(let i = 0; i<this.sliceArr.length; i++){
                this.fitness += this.sliceArr[i].getAC();
                mass += this.sliceArr[i].getAC()*i*i;
                if(this.sliceArr[i].getAC() < (0.2*this.sliceArr[i].getSector())){
                    this.fitness -= 120;
                }
               if(i>0){
                this.fitness -= uniScale*(Math.abs(this.sliceArr[i].getAC()-this.sliceArr[i-1].getAC()));
     
               }
               if(this.sliceArr[i].getAC()===this.sliceArr[i].getSector()){
                this.fitness += completeAdv;
                }
               /*if((this.sliceArr[i].getAC()>(0.9*this.sliceArr[i].getSector()))&&(this.sliceArr[i].getAC()!==this.sliceArr[i].getSector())){
                   this.fitness -= 20;
               }
               if(this.sliceArr[i].getAC()===this.sliceArr[i].getSector()){
                   this.fitness += 2;
               }*/
                /*if(i>0&&this.sliceArr[i].getAC()>(this.sliceArr[i-1].getAC()*1.6)){
                    this.fitness-=70;
                }
                else if(i>0&&this.sliceArr[i].getAC()<(this.sliceArr[i-1].getAC()*0.8)){
                    this.fitness-= (this.sliceArr[i].getAC()-);
                }*/
            }
            this.fitness = this.fitness / (Math.pow(mass,massScale));
        }
      

    }      

function newValues(){
    massScale = parseFloat(document.getElementById("mScale").value);
    uniScale = parseFloat(document.getElementById("uniScale").value);
    strengthScale = parseFloat(document.getElementById("strScale").value);
    completeAdv = parseFloat(document.getElementById("comScale").value);
  
}

window.onload = function() {

    var ex1 = document.getElementById('example1');
    var ex2 = document.getElementById('example2');
    var ex3 = document.getElementById('example3');

    ex1.onclick = handler;
    ex2.onclick = handler1;
    ex3.onclick = handler2;

}

function handler() {
    massScale = 1;
    uniScale = 1.1;
    strengthScale = 180;
    completeAdv = 20;
    document.getElementById("mScale").value = massScale;
    document.getElementById("uniScale").value = uniScale;
    document.getElementById("strScale").value = strengthScale;
    document.getElementById("comScale").value = completeAdv;
}
function handler1() {
    massScale = 3;
    uniScale = 2.8;
    strengthScale = 180;
    completeAdv = 20;
    document.getElementById("mScale").value = massScale;
    document.getElementById("uniScale").value = uniScale;
    document.getElementById("strScale").value = strengthScale;
    document.getElementById("comScale").value = completeAdv;


} function handler2() {
    massScale = 4;
    uniScale = 1.8;
    strengthScale = 100;
    completeAdv = 10;
    document.getElementById("mScale").value = massScale;
    document.getElementById("uniScale").value = uniScale;
    document.getElementById("strScale").value = strengthScale;
    document.getElementById("comScale").value = completeAdv;}
//module.exports = wheelDesign;