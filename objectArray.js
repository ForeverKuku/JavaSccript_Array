const items = [
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
];

// 1. Filter and show the product that will be bought when you don't have much money (Cheap one)
// const result =  items.filter((item)=> item.price <= 10)
// console.log(result)
// 2. Filter and show the product that will be expensive in the array
// const result = items.filter((item)=> item.price >= 500)
// result.map((item)=>
// console.log(item.name)
// )

// 3. Calculate the full price of all products combined
// 4. Calculate the full price of all products combined and remove products that are under $10
// 5. Filter and show the product that will be start with letter b at first postion



const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
// Using the join() method, create a string that joins all elements of the colors array into a single string separated by commas.
// Apply the splice() method to remove the second and third elements from the colors array and replace them with 'purple' and 'pink'.
// Utilize the copyWithin() method to copy the elements from index 1 to index 3 within the colors array to index 0.
// Finally, transform all elements of the colors array to uppercase using the toUpperCase() method.
// Apply the find() method to find the first element in the colors array that starts with the letter 'b'.
// Apply the slice() method to create a new array selectedColors containing the elements from index 1 to index 3 (inclusive) from the colors array.



const task = []

function addTask(taskText) {
    task.push({nameOfTask:taskText,completed:false});
}

function removeTask(index) {
    return task.splice(index,1)
}

function markedTask(index){
    task[index].completed = true
}
function sortTask(){
    return task.sort((a,b)=>a.nameOfTask.localeCompare(b.nameOfTask))
}

function IncompleteTask(){
    const result =  task.filter((item)=>item.completed === false)
    return result.length
}




addTask("Cleaning")
addTask("Cooking")
addTask("washing")
addTask("Eat")


markedTask(1)
sortTask()
console.log(task)