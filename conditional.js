const fruits = ['Apple', 'Pineapple', 'Coconut']

if (fruits.includes('Orange')) {
  console.log('Oranges are in our list of items')
} else {
  console.log('Please add oranges to your list')
}

const age = 19

if (age >= 60) {
  console.log('Senior citizen')
} else if (age >= 20) {
  console.log('Working class citizen')
} else {
  console.log('This is a Teen')
}

const msg = fruits.includes('Orange') ? 'Oranges are included' : 'Add Oranges'

// true
// false
// 0 = false
// 1 = true
// null = false
// undefined = false
// {} = false
// [] =false


console.log(msg)