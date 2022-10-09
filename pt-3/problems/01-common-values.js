/*
    Common values in two objects:
        Given two objects, return an array of values that are present in both objects

    const cat = {color: 'white', legs: 4, favoriteFood: 'sushi'};
    const bunny = {color: 'white', favoriteFood: 'carrots'};
    const human = {hobbies: ['running', 'painting'], legs: 4, favoriteFood: 'sushi'};
    const vehicle = { wheels: 4, color: 'red'};

    console.log(commonValues(cat, bunny)); // prints ['white']
    console.log(commonValues(cat, human)); // prints [4, 'sushi']
    console.log(commonValues(human, vehicle)); // prints [4]

*/






/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = commonValues;
} catch (e) {
    module.exports = null;
}












// const result = [];

// Object.values(obj1).forEach (val => {
    //     if (Object.values(obj2).includes(val)) {
//         result.push(val);
//     }
// })
// return result




// function commonValues(obj1, obj2) {
//     let newArr = [];
//     let values1 = Object.values(obj1)
//     let values2 = Object.values(obj2)
//     for (let i = 0; i < values1.length; i++){

//     if(values2.includes(values1[i])) newArr.push(values1[i])

//     }
//     return newArr;
// }
