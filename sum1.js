// Description
// You are given a number, stored in a variable with the namenum
// You have to printnumlines, and on each line print all the numbers from 1 to the value stored innum
// For example, if the value stored innum = 5, then the required output is
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5


//output 
// 1 2 3 4
// 1 2 3 5
// 1 2 3 4
// 1 2 3 4

function yourFirstNested(num) {
    // Write code here
    console.log(num);
    
    for(var row = 1; row <= num; row++){
        var bag = "";
        for(var cols = 1; cols <= num; cols++){
            bag = bag +"\t"+cols;           
        }
        console.log(bag);        
    }
}
yourFirstNested(4)