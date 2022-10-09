/*
    Items Within Budget
    Write an arrow function itemsWithinBudget(budget, items) that accepts a budget number and an array of objects.
    The function should return an array of item names whose price is within budget.
    Look at examples below to see how item objects are structured.

    const items1 = [{name: 'iPhone', price: 700},
                      {name: 'laptop', price: 2000},
                      {name: 'guitar', price: 300},
                      {name: 'camera', price: 1200}
                    ]
    const items2 = [ {name: 'online classes', price: 1000},
                        {name: 'omakase bento box', price: 100},
                        {name: 'medicine', price: 50}
                    ]

    console.log(itemsWithinBudget(1000, items1)) // prints ['iPhone', 'guitar']
    console.log(itemsWithinBudget(200, items2)) // prints ['omakase bento box', 'medicine']
*/

























// const itemsWithinBudget = (budget, items) => {
//     return items.filter(item => item.price <= budget).map(item => item.name);
// }


























// let itemsWithinBudget = ((budget, items) => {
//     // return empty array if array empty
//     if(budget.length === 0) return [];
//     let keys = []
//   let prices = []

//   //create arrays of items and their prices
//   for (let i = 0; i < items.length; i++){
//       keys.push(items[i].name)
//       prices.push(items[i].price)
//   }
//     //see if any individual price is under budget
// let count = 0;
// for (let i = 0; i< prices.length; i++){
// if (prices[i]>budget) count++
// }
// if (count === prices.length) return [];


// //make the array of items in budget
//   let sum = prices[0]
//   let arr = [keys[0]]
//   for(let i = 0; i < keys.length; i++){
//           for(let j = i+1; j < keys.length; j++){
//              if( sum < budget && arr[arr.length-1] !== keys[j]){
//                 sum += prices[j];
//                 arr.push(keys[j])

//               } else if(sum > budget){

//                 arr.pop();
//                 sum -=prices[j-1];
//                 j--;
//               }
//             console.log(arr)
//           }
//   }

//       return arr;
//   })





/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = itemsWithinBudget;
} catch (e) {
    module.exports = null
}
