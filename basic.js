let a = "test";
console.log(a);

let i = 0;
while(i < 10)
{
    i++;
    //console.log("I am none "+ i);
}

let marks = [3,56,7,8,9,1200];
let subMarks = marks.slice(2,5);
console.log(subMarks);

for(i=0; i<marks.length;i++)
{
    console.log(marks[i]);
}

marks.push(98);
//console.log(marks);
marks.pop();
//console.log(marks);
marks.unshift(7);
console.log(marks);
console.log(marks.includes(5));

//filter, map & reduce method
let scores = [3,5,7,8,9,12]; 
let total = scores.reduce((sum,mark)=>sum+mark,0);
console.log(total);
let evenScore = scores.filter(score=>score%2==0);
console.log(evenScore);
let mappedArray = evenScore.map(score=>score*3);
console.log(mappedArray);
//single line
let sumValue = scores.filter(score=>score%2==0).map(score=>score*3).reduce((sum,mark)=>sum+mark,0);
console.log(sumValue);
//sort numeric value
console.log(scores.sort((a,b)=>b-a));

//accessing class from different file
const chelsea = require('./basic2');
let ch = new chelsea('Tuchel');
console.log(ch.jersey + " " + ch.stadium + " " + ch.coach);
