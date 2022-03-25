function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza = {}
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings
    return pizza;
}

console.log(pizzaOven("deep dish","traditional",["mozzarella"],["pepperoni","sausage"]));
console.log(pizzaOven("hand tossed","marinara",["mozzarella","feta"],["mushrooms","olives","onions"]));

function randomPizza(){
    //all pizza options:
    let crust = ["deep dish","hand tossed","stuffed crust","garlic butter"];
    let sauceType = ["traditional","marinara","white","ranch","garlic butter"];
    let cheeseOptions = ["mozzarella","cheddar","feta","garlic cheese"];
    let toppingOptions = ["pepperoni","sausage","mushrooms","onions","olives","peppers","garlic"];
    //choosing randomly the number of cheeses we'll pick out for the pizza
    let numCheese = Math.floor(Math.random()*5);
    let numToppings = Math.floor(Math.random()*8);
    //setting up my empty pizza. I mainly had to do this so I could use .push() on "cheeses" and "toppings" later (I had to initial them to arrays so I didn't get errors)
    let pizza = {
        "crustType":"",
        "sauceType":"",
        "cheeses":[],
        "toppings":[],
    };

    //set the curst and sauce types with just random numbers
    pizza.crustType = crust[Math.floor(Math.random()*4)];
    pizza.sauceType = sauceType[Math.floor(Math.random()*5)];
    
    //setting the cheeses and toppings (I did this the same way for both)
    if(numCheese === 0) { //first, setting pizza.cheeses to ["none"] if the numCheeses value is 0
        pizza["cheeses"] = ["none"];
    } else { //if numCheeses is not zero:
        for (let i = 0; i < numCheese; i++) { //we're going to go through the loop numCheeses times
            let random = Math.floor(Math.random()*cheeseOptions.length); //creating a random number for our cheeseOptions index. I have to create it every loop because cheeseOptions.length shrinks with each loop
            pizza["cheeses"].push(cheeseOptions[random]) //adding the cheese choice
            cheeseOptions = cheeseOptions.filter(cheese => cheese !== cheeseOptions[random]); //I'm now removing that cheese choice from the array using .filter() so we can avoid duplicate cheeses
        }
    }
    //Basically did the exact same thing as with the cheeses above, just for the toppings
    if(numToppings === 0) {
        pizza["toppings"] = ["none"];
    } else {
        for (let i = 0; i < numToppings; i++) {
            let random = Math.floor(Math.random()*toppingOptions.length);
            pizza["toppings"].push(toppingOptions[random])
            toppingOptions = toppingOptions.filter(topping => topping !== toppingOptions[random]);
        }
    }

    return pizza;
}

console.log(randomPizza());