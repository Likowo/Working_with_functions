// Functions ---> We use function to invoke a piece of code in multiple places//
// A function should do one task and one task only.
// The trick is to be clear what you want your function to do 
// and translate that logic into working code
// in the onclick attribute you are passing an argument that becomes the "theme" in our function...//

// Two ways to write  Functions
// 1. functiion declaration
// function whateverName(){}

// 2. arrow function
///const whateverName = () => {}


// let students =[ "matt", "Ann", "Hu", "paul"

// ]
// function addTextToName(studentName){
//     console.log(studentName + " is an incredible student")

// }

// addTextToName(studentName[1])
// addTextToName(studentName[2])
// addTextToName(studentName[3])
// addTextToName(studentName[4])

//==================================================

//list of breakfast foods --- Use variable let or const
// [] use with Arrays always - Arrays is a list of items ( go in quotes)/numerals ( numbers do not go in quotes), separated by commas

const breakfastFoods = ["toast","eggs","bacon","milk"]
//console.log(breakfastFoods)

// Writing a function using the arrow fxn
   //parameters inside()
// be intentional with function names

const showFoodItems = () => {
    console.log(breakfastFoods)
}
// Now call the fxn by writing the fxn name followed by ()
//showfooditems()

// Creating an object {} called, menu
//Objects have properties and values

const menu = {
    breakfast : ["toast","eggs","bacon","milk"],
    lunch: ["burger","salad","fries"],
    dinner:["noddle soup","steak","mash potatoes and gravy"],
    drinks: ["tea","milk","water","soda"]

}
console.log(menu)
// dot notation to access properties inside an object  OR
// Square Bracket [] notation to access properties inside an object
//console.log(menu.breakfast)

const showDifferentFoodItems = (menuType) => {
    console.log(menuType)
   console.log(menu[menuType])
}
//===========================================
//Location variable
const locations = ["dallas","new york","Alabama"]


// create fxn for locations
const showLocations = () => {
   console.log(locations) 
}

///====================================

//Do breakFast Prices variable
 const prices = ["$2","$3","$1","$4"]


//create fxn for prices
const showPrices = () => {
    console.log(prices)
}