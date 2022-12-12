// Description

// You are given a number, stored in a variable with the nameN

// Print the pattern as shown below.

// If the value stored inN = 4, then the pattern required will be

// *
// **
// ***
// ****

//output
// *
// **

function patternPrinting(N) {
    // Write code here
    //console.log(N)
    for ( var i = 1; i <= N; i++)
    {
        var bag = "";
        for( var j = 1; j <= i; j++)
        {
            bag = bag + "*";
        }
        console.log(bag)
    }
    
}


patternPrinting(2)