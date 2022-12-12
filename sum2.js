// Your First Pattern Ended
// Description
// You are given a number stored in a variable with the namen
// You have to printnlines, and on each line you have to printnstars
// For example, consider the value stored inn = 4. Then, the required output will be
// * * * *
// * * * *
// * * * *
// * * * *


//output
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 

function yourFirstPattern(n) {
    // Write code here
    for(var row = 1; row <= n; row++){
        var bag = "";
        for(var cols = 1; cols <= n; cols++){
            bag = bag + "*\t"
        }
        console.log(bag);
    }

}

yourFirstPattern(5)