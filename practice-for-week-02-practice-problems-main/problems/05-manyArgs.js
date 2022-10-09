/***********************************************************************
Write a function, 'manyArgs' that accepts an arbitrary number of arguments!
What does this mean? Well sometimes your function could be given 20 arguments,
sometimes it could be given 1. Each argument will be a number. Your function
should return an integer representing every argument multiplied together.


Assumption:
Your function will always be passed at LEAST one argument.


Examples:

manyArgs(1, 2, 3, 4, 5, 6, 7) // 5040
manyArgs(1, 2, 5, 6, 7) // 420
manyArgs(1, 2, 5, 6) // 60




***********************************************************************/
let manyArgs = ((...args) =>{
    return args.reduce((prev, curr) =>{
        return prev *=curr;
    })

})

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try{
    module.exports = manyArgs;
} catch(e) {
    module.exports = null;
}

















// const manyArgs = (...args) => {
//     // Your code here
//     return args.reduce((acc, curr) =>{
//         return acc*=curr;
//     })

// }
