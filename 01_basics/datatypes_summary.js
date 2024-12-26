// #primitive datatypes
// 7 categories: string, number, boolean, null, undefined, symbol, BingINT

// Refrence type(non primitive): Arrays, objects, functions
   
// we donot need to define the type of the variable 

// const score = true / 23 / 2.3

// but in typescript we need to defien the typ of the data

// const score:number = 34 

const id = symbol('123')
const anotherid = symbol('123')

console.log(id == anotherid)
