/*
*	ICS 314 - Functional Programming Part 1
*	author: Vanessa Gerber
*	date: 2/12/2019
*	first try : 30+ DNF
*	second try: 
*/

const myNums = [2,6,9,2,0]; // sum = 19

function sumFor(nums){
  let sum = 0;
  for(num of nums) {
    sum += num;
  }
  return sum;
}
console.log("sumFor:", sumFor(myNums));

function sumWhile(nums){
  let sum = 0;
  let i = 0;
  while(i<nums.length){
    sum += nums[i];
    i++;
  }
  return sum;
}
console.log("sumWhile:", sumWhile(myNums));

function sumRecursion(nums){
  if(nums.length == 0){
    return 0;
  }
  return nums.shift() + sumRecursion(nums);
}
console.log("sumRecursion:", sumFor(myNums));

function sumTheSimpleWay(nums){ // using underscore
  return _.reduce(myNums, function(sum, num){return sum + num},0);
}
console.log("sumTheSimpleWay:", sumTheSimpleWay([2,6,9,2,0]));