rain(`It's raining.....`)
rain(`The weather is now clear!!!!`)
// Global scope
// local scope
// console.log()
// const date = new Date()
// function name(params) {
//   let x = 'x'
//   console`It's raining .......`
//   function name(params) {
    
//     const name = 'Adams'
//     date
//   }
//   const date = new Date()
// }
// local scopename`It's raining .......`



function rain (value){
  console.log(value)
}

function add (x, y) {

  console.log(this)
  return x + y
}

const total = add(59, 90)
console.log(add(34, 76767))
console.log(total)

const print = () => {
  console.log(this)
}