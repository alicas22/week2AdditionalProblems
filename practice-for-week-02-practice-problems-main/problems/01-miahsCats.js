/***********************************************************************
Write a FAT ARROW function `miahsCats(obj)` that takes an object, containing
extremely important information about Miah's cats as an argument
and returns an integer representing how many keys and values
in the input object containing the string "cute" or "adorable".

****NOTE: You should account for upper and lowercase letters!****
Checkout MDN documentation on how to solve this issue.


Examples:

obj1 = {"Finn": "Smart lil boy, maximum cuTe", "Jake": "Not a dog, still cUte"}
miahsCats(obj1) // 2

obj2 = {"CuteFace": "Has an adoRable face, loves snuggles", "Baby": "Very chonky lady, adorable fluffy face"}
miahsCats(obj2) // 3

obj3 = {"Princess": "So much sass, cute AND fluffy", "adorable-boy": "Cute and funny"}
miahsCats(obj3) // 3

***********************************************************************/
let miahsCats =((obj) =>{
    let count = 0;
    let entries = Object.entries(obj)
   
    entries.forEach((arr) =>{
        arr.forEach((string) =>{
          if(string.toLowerCase().includes("cute") || string.toLowerCase().includes("adorable")) count++
    	})
    })

    return count


})




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try{
    module.exports = miahsCats;
} catch(e) {
    module.exports = null;






















}

// const miahsCats = obj => {
//     // Your code here
//     let count = 0
//     let keys = Object.keys(obj)
//     let vals = Object.values(obj)

//     keys.forEach((item) =>{
//        if (item.toLowerCase().includes("cute") || item.toLowerCase().includes("adorable")) count++;
//          })
//     vals.forEach((item) =>{
//         if (item.toLowerCase().includes("cute") || item.toLowerCase().includes("adorable")) count++;
//          })

//   console.log(count)
//         return count
//     }
