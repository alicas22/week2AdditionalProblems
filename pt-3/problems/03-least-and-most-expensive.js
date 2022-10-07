/*
Least and Most Expensive Toys:
    Write a function that accepts an object that represents a catalog of toys with their names and prices.
    The keys of the object are names of each toy, and the corresponding value is its price.
    The function should return an array where the first element is the name of the least expensive toy,
    and the second element is the name of the most expensive toy. You may assume there will always be
    one most and least expensive toy.

    const catalog1 = {'ball': 5, 'jumprope': 3, 'yo-yo': 10, 'trading cards': 12}
    const catalog2 = {'skateboard': 50, 'bicycle': 100, 'doll': 10, 'puzzle': 20}
    console.log(leastAndMostExpensive(catalog1)); // prints ['jumprope', 'trading cards']
    console.log(leastAndMostExpensive(catalog2)); // prints ['doll', 'bicycle']
*/

function leastAndMostExpensive(catalog) {
    let keys = Object.keys(catalog);
    let values = Object.values(catalog)
    let cheapest = values[0]
    let cheapIndex = 0
    let expensive = values[0]
    let expensiveIndex = 0
        values.forEach((price, i) =>{
            if (cheapest > price){
                cheapest = price;
                cheapIndex = i
            }
            if ( expensive< price ) {
                expensive = price;
                expensiveIndex = i;
        }
    })
    
    let array = [keys[cheapIndex], keys[expensiveIndex]]
    return array

}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = leastAndMostExpensive;
} catch (e) {
    module.exports = null;
}
