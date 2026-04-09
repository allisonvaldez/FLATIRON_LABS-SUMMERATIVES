  // Declare a variable in the global scope called burgers assign it the value of an array for 2 elements 'Hamburger' and 'Cheeseburger'.
const burgers = ["Hamburger", "Cheeseburger"];

// Declare a variable in the global scope called featuredDrink and assign it the value 'Strawberry Milkshake'.
let featuredDrink= "Strawberry Milkshake";

 /* Write a function named addBurger that when called:
    1. Creates a function-scoped variable named newBurger and assigns it the value 'Flatburger'.
    2. Uses the .push() array method to add newBurger to the burgers array.
*/
function addBurger() {
    const newBurger = "Flatburger";
    burgers.push(newBurger);
};
// Write an if statement whose condition is true, so that the code in its block will always execute.
if(true) {
    const anotherNewBurger = "Maple Bacon Burger";
    burgers.push(anotherNewBurger);
}

/*Write a function named changeFeaturedDrink that, when called:
    1. changes the value of the FeaturedDrink variable to 'The JavaShake'.
*/
function changeFeaturedDrink(){
    featuredDrink = "The JavaShake";
};