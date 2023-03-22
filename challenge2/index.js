const prompt = require("prompt-sync")();
let speed = prompt("Speed: ");
function carSpeed (){
    if (speed < 70){
        console.log('OK')
    } 
    else if (speed > 70){
        let demeritPoints = ((speed - 70) / 5)

       // console.log(math.ceil(demeritPoints));

        if (demeritPoints >= 12){
            console.log("License suspended");
        }
}
else{
    console.log('Enter speed again')
};

}
console.log(carSpeed());// function calling