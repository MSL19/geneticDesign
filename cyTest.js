var vectors = [];
var vectorsRawX = [];
var vectorsRawY = [];

var num = 27;
var STLstring;
for(var i = 0; i <=num; i++){
 
    vectors[i] = "vertex "+Math.sin((Math.PI/2.5)/num*i)+" "+Math.cos((Math.PI/2.5)/num*i)+" 0";
    vectorsRawX[i] = Math.sin((Math.PI/2.5)/num*i);
    vectorsRawY[i] = Math.cos((Math.PI/2.5)/num*i);
}
STLstring = "solid dartt\n";
//STLstring += vectors);
var j = 0;
while(j<num-2){
    STLstring += "facet normal 0.00000 0.00000 0.00000\n";
    STLstring += "outer loop\n";
    STLstring += vectors[j]+"\n";
    j++;
    STLstring += vectors[j]+"\n";
    j++;
    STLstring += vectors[j]+"\n";
    STLstring += "endloop\n";
    STLstring += "endfacet\n";
    STLstring += "facet normal 0.00000 0.00000 0.00000\n";
    STLstring += "outer loop\n";
    STLstring += vectors[j]+"\n";
   
    
    STLstring += vectors[j-2]+"\n";
    STLstring += "vertex "+vectorsRawX[j]/2+" "+vectorsRawY[j]/2+" 0\n";
   // STLstring += "vertex 0.00000 0.00000 0.00000\n";
    STLstring += "endloop\n";
    STLstring += "endfacet\n";

}
STLstring += "endsolid dartt\n";
const fs = require('fs');
fs.writeFile("./cyTest2.STL", STLstring, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 