// Description

// You are given a number stored in a variable with the name N

// You have to print N lines such that on each line you find the sum of all even numbers in the range of[1,i], whereirepresents all the numbers in the range of[1,N]

// For example, consider the value stored in N = 3

// Then, first we find the sum of all even numbers, in the range of [1,1], which comes out to be zero, as there are no even numbers in the range

// Then, we find the sum of all even numbers, in the range of [1,2], which comes out to be 2, as there is only 1 even number (2). Hence, the sum becomes 2

// Finally, we find the sum of all even numbers in the range of [1,3], which comes out to be 2, as there is only 1 even number (2). Hence, the sum becomes 2

// Therefore, the final output becomes

// 0
// 2
// 2




//output

// 0
// 2
// 2
// 6

function evenSumAgain(num) {
    // Write code here
//    console.log(num)
var even = 0;
   for( var i = 1; i <= num; i++){
           if(i % 2 == 0){
                even=even+i;
            }
            console.log(even)     
   }
  
}

evenSumAgain(4)