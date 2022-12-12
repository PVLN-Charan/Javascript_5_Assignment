// Description

// You are given a number stored in a variable with the nameN

// You have to print all the numbers in the range from1 to N*N, such that there are exactlyNnumbers on each line

// For example, if the value stored inN = 3, then all the numbers in the range, from [1,9] need to be printed, such that there are 3 numbers on each line. Therefore, the required output is

// 1 2 3
// 4 5 6
// 7 8 9

//output

// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16

function patternOfN(N) {
    // Write code here
    var k = 1
    for(var row =1; row <=N; row++){
        var bag = "";
        for(var cols = 1 ; cols <= N ; cols++){

           bag= bag +"\t"+ k;
           k++

       }
       console.log(bag)
       
    }
    
}

patternOfN(4)