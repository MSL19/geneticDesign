var vectors = [];
var num = 27;
for(var i = 0; i <num; i++){
 
    vectors[i] = "vertex "+Math.sin(2*Math.PI/num*i)+" "+Math.cos(2*Math.PI/num*i)+" 0";

}
console.log("solid dartt")
//console.log(vectors);
var j = 0;
while(j<num-2){
    console.log("facet normal 0.00000 0.00000 0.00000");
    console.log("outer loop");
    console.log(vectors[j]);
    j++;
    console.log(vectors[j]);
    j++;
    console.log(vectors[j]);
    console.log("endloop");
    console.log("endfacet");
    console.log("facet normal 0.00000 0.00000 0.00000");
    console.log("outer loop");
    console.log(vectors[j]);
   
    
    console.log(vectors[j-2]);
    console.log("vertex 0.00000 0.00000 0.00000");
    console.log("endloop");
    console.log("endfacet");

}
console.log("endsolid dartt");
const fs = require('fs');
fs.writeFile("/cyTest2.txt", "Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 