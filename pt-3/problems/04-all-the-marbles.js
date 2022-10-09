/*
All the marbles:

    Write a function that takes in any number of marble objects and returns the total weight of all marbles.
    Marble objects are structured as the following:

    const marble1 = { color: 'red', weight: 20 };
    const marble2 = { color: 'purple', weight: 100 };
    const marble3 = { color: 'blue', weight: 40 };

    console.log(allTheMarbles(marble1, marble2)) // prints 120;
    console.log(allTheMarbles(marble1, marble2, marble3)) // prints 160;
    console.log(allTheMarbles()) // prints 0;
*******************************************************************************************************************/




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = allTheMarbles;
} catch (e) {
    module.exports = null;
}

















// let allTheMarbles = ((...marbles) =>{

//     let sum = 0;
//     marbles.forEach((item) =>{
//         sum += item.weight;
// })
// return sum;
// })





// if (marbles.length === 0) return 0;


// let weights = []
// marbles.forEach((obj) => {
    //     for(let key in obj){
        //         if(typeof obj[key] === "number") weights.push(obj[key])
        //     }
        // })
        // return weights.reduce((prev, curr) => prev += curr)
