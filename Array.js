///**************************************Array ***************************** */

// Array= Array is the non primitive type data structure which is hold the element like string, number or character. which is store in he brackets. 


let arr =["a","b","c","d","e","f"]
//console.log(arr.slice(0,2));


// slice== It's not modify the original array


// splice method =====
//console.log(arr.splice(2,4));
//console.log(arr)
// the output of the given array is ["c","d","e","f"]
// **** it modifies the original array

// push method**

const Marvel_heros=["thor", "spiderman","Ironman"]
const DC_heros=["superman", "flash", "batman"]

//let All_heros=(Marvel_heros.push(DC_heros));
//console.log(Marvel_heros);

// in the element we push the Array DC_Heros is pushed in the marvel_heros
  

//concat method

/*const Marvel_heros=["thor", "spiderman","Ironman"]
const DC_heros=["superman", "flash", "batman"]*/


//console.log(Marvel_heros.concat(DC_heros));


//***************//  in this space of concat we use spread operator *****

// spread Operator

//All_new_heros=[...Marvel_heros,...DC_heros];
//console.log(All_new_heros);



// flat method== flat method ka use arrary mein jab bahut saare array ho toh unhe ek array mein covert karne ke liye use karte hai 

const another_array=[,1,[2,3,4],5,6,[7,8,9]]
 real_array= another_array.flat(Infinity);
console.log(real_array);



// if we want to check the array is array or not then we use 
console.log(Array.isArray("hitesh"));

/// it gives you boolean type output like true or false.



// From method from method converts the normal string into array

console.log(Array.from("harshit"));


// Array.of method 

let score1=1000
let score2=2000
let score3=3000
console.log(Array.of(score1,score2,score3));










