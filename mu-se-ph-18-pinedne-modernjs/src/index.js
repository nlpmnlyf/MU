console.log("Hello");

console.log("--- variables ---");

function variableTest() {
  const id = 100;

  console.log(`id - inital ${id}`);

  if (id === 100) {
    let id = "a new value";
    console.log(`id - inside block ${id}`);
  }

  console.log(`id - outside block ${id}`)

  try {
    id = 200;
  
  } catch(error) {
    console.log(`const - error: ${error}`)
  }
}

variableTest();

console.log("--- objects ---");

const food = {
  name: "Steak",
  price: 89
}

console.log("food: ", food);
console.log("food name: ", food.name);
console.log("food price: ", food["price"]);

food.name = "quek";
food["price"] = 25;

console.log("Food update :", food);


console.log("--- Spread ---");

const foodWithInfo = {...food, isVegan: false};

foodWithInfo.cuisine = "Filipino";
console.log("Food:", food);
console.log("FoodWithinfo", foodWithInfo);

console.log("--- Destructuring ---");

const { 
  name: food_name, 
  price, cuisine, 
  isVegan, 
  store: stall = "Julibe" } = foodWithInfo;

console.log(`${food_name},${cuisine},${price},${isVegan},${stall}`);


console.log("--- Array ---");

const foodArray = [
  { name: "Sisig", price: 50 },
  { name: "Taho", price: 10 },
  { name: "Lumpia", price: 5 }
]

console.log('1st element', foodArray[0]);
console.log('Last element', foodArray[foodArray.length - 1]);

const newFoodArray = [{ name: "cheken", price : 90 }, ...foodArray];

console.log("newFoodArray", newFoodArray);

const [a,b, ...rest] = [1,2,3,4,5,6, "Hello"];

console.log("rest destructuring", rest);

function sumTwo(f1, f2, ...rest)
{
  console.log('F1: ', f1.price);
  console.log('F2', f2.price),
  console.log('rest:', rest);
  return f1.price + f2.price;
}

console.log(`sumTwo: ${sumTwo(...newFoodArray,"hello")}`);

const arrowFunctionCalcArea = (height, width) => height * width;

console.log(`arrowfunc - ${arrowFunctionCalcArea(10,50)}`);


console.log("--- Array Helper ---");

const sisig = foodArray.find((food) => food.name === "Sisig");

console.log("Sisig: ", sisig);

const filteredFood = foodArray.filter((food) => food.price > 9 );

console.log(filteredFood);

const foodArrayMap = newFoodArray.map((food) => { return {food : food.name , price: food.price * 2} });

console.log(foodArrayMap);