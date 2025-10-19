/*
Stair Case Problem Description 
Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
Patrren like below
       #
      ##
     ###
    ####
*/  

// Solution 1

function printSpace (n) {
    let space = '';
     for(let i =0 ; i < n ; i ++){
        space +=  ` `
     }
     return space
}

function printHash (n) {
    let hash = '';
     for(let i =0 ; i < n ; i ++){
        hash += `#`
     }
     return hash
}

function staircase_way_1(n) {
    // Write your code here
    let lineNumber = 1;
    for (let i=n; i >0; i--){
        console.log(printSpace(n -lineNumber) + printHash(lineNumber));
        lineNumber++;
    }
}
staircase_way_1(4)
// Time Complexity: O(N^2) 

/*
 More Better solution 
*/

// Solution 2  
// Time Complexity: O(N^2) 
function staircase_way_2(n) {
  for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '#'.repeat(i));
  }
}

staircase_way_2(10);


// Solution 3 Most fit soltuion 
// Time Complexity: O(N * m) -> O(N);  
function staircase_way_3(n) {
  let line = ' '.repeat(n - 1) + '#';
  console.log(line);
  for (let i = 1; i < n; i++) {
    line = line.substring(1) + '#';
    console.log(line);
  }
}

staircase_way_3(5)