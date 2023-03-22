const prompt = require("prompt-sync")() //prompting the browser
const salary = prompt("Put salary: ")

function salaryDeduction(){
    let monthlyPayee;
    let nssf = 400;
    let nhif;
    let netDeductions = (monthlyPayee += nssf) + nhif;
    const netSalary = salary - netDeductions
//calculating payee
    if(salary <= 24000 && salary <= 5999){
        monthlyPayee=(salary*0.1);
        nhif =150;
     }
    else if (salary <= 32333 && salary<=34999 ){
        monthlyPayee=(salary*0.25);
        nhif = 900;
     }
    else if (salary > 32333 && salary <=99999){
      monthlyPayee=(salary*0.3);
      nhif = 1600;
     }
   
//     //nhif deductions
//     else if  (salary <= 5999){
//      return nhif = 150;
//   }
//  else if (salary>=6000 && salary<=7900){
//        return  nhif = 300;
//  }
//  else if (salary>=8000 && salary<=11999){
//        return  nhif = 400;
//  }
//  else if (salary>=12000 && salary<=14900){
//         return nhif = 500;
//   }
//  else if(salary>=15000 && salary<=19999){
//        return nhif = 600;
//  }
// else if (salary>=20000 && salary<=24999){
// return nhif = 750;
// }
// else if(salary>=25000 && salary<=29999){
// return nhif = 850;
// }
// else if(salary>=30000 && salary<=34999){
//    return  nhif = 900;
// }
// else if (salary>=35000 && salary<=39999){
//    return  nhif = 950;
// }
// else if (salary>=40000 && salary<=44999){
//   return  nhif= 1000;
// }
// else if (salary>=45000 && salary<=49999){
//    return   nhif = 1100;
// }
// else if(salary>=50000 && salary<=59999){
//    return   nhif = 1200;
// }
// else if (salary>=60000 && salary<=69999){
//   return  nhif = 1300;
// }
// else if (salary>=70000 && salary<=79999){
//   return   nhif = 1400;
// }
// else if (salary>=80000 && salary<=89999){
//     return nhif = 1500;
// }
// else if (salary>=90000 && salary <=99999){
//  return nhif = 1600;
// }
// else if (salary>=100000){
//    return nhif = 1700;
// }
else {
    console.log('No payee or nhif was deducted');
}
    
console.log(`PAYE: ${monthlyPayee}`);
console.log(`NHIF: ${nhif}`);
console.log(`NSSF: ${nssf}`);
console.log(netDeductions);
console.log(netSalary);

}
salaryDeduction()
   

