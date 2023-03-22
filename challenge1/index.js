const prompt = require("prompt-sync")();

const marks = prompt('Input marks: ') //initialized the prompt

 function calculateMarks (){
    if(marks > 80 && marks <= 100){
        console.log('A');
    }
    else if (marks >= 60 && marks <= 79){
        console.log('B');
    }
    else if (marks >= 49 && marks <= 59){
        console.log('C');
    }
    else if (marks >= 40 && marks <= 49){
        console.log('D');
    }
    else if(marks <= 39) 
    {
        console.log(grade = 'E');
    }
    else{
        console.log('Failed'); //will log in when there are no marks to be logged
    }
 }
calculateMarks();