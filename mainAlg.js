
//const wheelDesign = require("./wheelDesign");
const numDes = 100;
let generation = 0;
let designArr = [];
let bestArrI = 0;
let bestDesArr = [];
let materialCst = 8;
let colorM = true;
function createPop(){
    for(let i = 0; i<numDes; i++){
        designArr[i] = new wheelDesign(100);
    }
}
async function setup(){
    createPop();

}
function colorMo(){
    colorM = true;
    designArr[0].drawDesC();
}
function monoChr(){
    colorM = false;
    designArr[0].drawDes();
}
function runNextGen100(){
    for(let j = generation; j<generation+100; j++){
    for(let i = 0; i<numDes; i++){
        designArr[i].evalFitness();
    }
    designArr.sort(function(a,b){return b.getFitness() - a.getFitness()});
    if(j%100===0){
        bestDesArr.push(designArr[0]);
    }
    let tempArr = [];
    for(let i = 0; i<numDes/2; i++){
        tempArr[i] = designArr[i].mate(designArr[i+1]);
    }
    for(let i = (numDes/2); i>0; i--){
        tempArr.push(designArr[i].mate(designArr[i-1]));
    }
    designArr = tempArr;
}
for(let i = 0; i<numDes; i++){
    designArr[i].evalFitness();
}
designArr.sort(function(a,b){return b.getFitness() - a.getFitness()});
console.log(designArr);
    if(colorM){
        designArr[0].drawDesC();
    }
    else{
        designArr[0].drawDes();
    }
generation+=100;
document.getElementById("genDisp").innerHTML = "Generation: "+generation;

}
function runNextGen1000(){
    for(let j = generation; j<generation+1000; j++){
    for(let i = 0; i<numDes; i++){
        designArr[i].evalFitness();
    }
    designArr.sort(function(a,b){return b.getFitness() - a.getFitness()});
    if(j%100===0){
        bestDesArr.push(designArr[0]);
    }
    let tempArr = [];
    for(let i = 0; i<numDes/2; i++){
        tempArr[i] = designArr[i].mate(designArr[i+1]);
    }
    for(let i = (numDes/2); i>0; i--){
        tempArr.push(designArr[i].mate(designArr[i-1]));
    }
    designArr = tempArr;
}
for(let i = 0; i<numDes; i++){
    designArr[i].evalFitness();
}
designArr.sort(function(a,b){return b.getFitness() - a.getFitness()});
console.log(designArr);
    if(colorM){
        designArr[0].drawDesC();
    }
    else{
        designArr[0].drawDes();
    }
    generation+=1000;
    document.getElementById("genDisp").innerHTML = "Generation: "+generation;

}
function runNextGen(){
    for(let j = 0; j<100; j++){
    for(let i = 0; i<numDes; i++){
        designArr[i].evalFitness();
    }
    designArr.sort(function(a,b){return b.getFitness() - a.getFitness()});
    
    let tempArr = [];
    for(let i = 0; i<numDes/2; i++){
        tempArr[i] = designArr[i].mate(designArr[i+1]);
    }
    for(let i = (numDes/2); i>0; i--){
        tempArr.push(designArr[i].mate(designArr[i-1]));
    }
    designArr = tempArr;
}
for(let i = 0; i<numDes; i++){
    designArr[i].evalFitness();
}
designArr.sort(function(a,b){return b.getFitness() - a.getFitness()});
console.log(designArr);
    if(colorM){
        designArr[0].drawDesC();
    }
    else{
        designArr[0].drawDes();
    }
generation++;
document.getElementById("genDisp").innerHTML = "Generation: "+generation;

if(generation%100===0){
    bestDesArr.push(designArr[0]);

}
}
function showAnalysis(){
    bestDesArr[bestArrI].showFEA();
}
function scrollForward(){
    bestArrI--;
    if(bestArrI <= 0){
        bestArrI = bestDesArr.length;
    }
    bestDesArr[bestArrI].drawDes();
}
function scrollBack(){
    
    bestArrI++;
    if(bestArrI >= bestDesArr.length){
        bestArrI = 0;
    }
    bestDesArr[bestArrI].drawDes();
}


