// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

const validateCred = arr => {
let newArray = [];
let double = [];
let rest = [];
// Iterate in reverse
  for (let i = arr.length -1; i >= 0; i--){
    newArray.push(arr[i]);
  }
  //console.log(newArray);
  //double every other digit
  for (let j = 0 ; j < newArray.length; j++){
    //console.log(j);
    if (j % 2 !== 0){
      double.push(newArray[j] * 2);
}
else {
  rest.push(newArray[j]);
}
  }
  let result = double.concat(rest);
  //console.log(result);
  let total1 = [];
  let total2 = [];
  for (let k in result){
    //console.log(result[k]);
    if (result[k] > 9){
      result[k] - 9;
      total1.push(result[k] - 9);
    } else {
      total2.push(result[k]);
    }

  }
  let total3 = total1.concat(total2)
  //console.log(total3);
  let sum = total3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  //console.log(sum);
  if (sum % 10 === 0){
    return true;
  } else {
    return false;
  }
}

const findInvalidCards = arrayNest => {
  let newArray = [];
  for (let i = 0; i < arrayNest.length; i++){
    if (validateCred(arrayNest[i]) === false){
      newArray.push(arrayNest[i]);
    }
   
  }
  return newArray;
}

const idInvalidCardCompanies = arrayNest =>{
  let newArray = [];
  let lastArray = [];
  for (let array in arrayNest){
    //console.log(arrayNest[array][0]);
    switch(arrayNest[array][0]){
      case 3:
      newArray.push("Amex (American Express)");
      break;
      case 4:
      newArray.push("Visa");
      break;
      case 5: 
      newArray.push("MasterCard");
      break;
      case 6: 
      newArray.push("Discover");
      break;
      default:
      newArray.push("Company not found");
      break;
    }
    
  }
  //console.log(newArray);
  if (newArray.includes('Visa')){
    lastArray.push('Visa');
  } 
   if (newArray.includes('Discover')){
    lastArray.push('Discover');
  } 
   if (newArray.includes('MasterCard')){
    lastArray.push('Mastercard');
  } 
   if (newArray.includes('Amex (American Express)')){
    lastArray.push('Amex (American Express)');
  } 
  if (newArray.includes('Company not found')) {
    lastArray.push('Company not found');
  }

  return lastArray;
}



console.log(idInvalidCardCompanies(batch));
//console.log(findInvalidCards(batch));
//console.log(validateCred(valid1));
