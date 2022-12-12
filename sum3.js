// Description
// You are given a number stored in a variable with the name num
// Print num lines such that there are numbers from1 to i, such that on each line you print only one number. Also,irepresents all the numbers from 1 tonum
// For example, consider the value stored innum = 5
// Therefore, the required output will be
// 1
// 1 
// 2
// 1 
// 2 
// 3
// 1 
// 2 
// 3 
// 4
// 1 
// 2 
// 3 
// 4
// 5


//output

// 1
// 1
// 2
// 1
// 2
// 3
// 1
// 2
// 3
// 4

function anotherNested(num) {
    // Write code here
    for(var i = 1; i <= num; i++){
        for(var j = 1; j <= i; j++){
            console.log(j);
        }
    }

}

anotherNested(4)