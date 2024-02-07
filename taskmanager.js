const tasks = ["shopping", "fishing", "coding", "laundry"]
//Q.1
function addTask(){
    tasks.push("swimming")
    return tasks
}
console.log(addTask())

//Q.2
function rmTask(){
    tasks.shift()
    return tasks
}
console.log(rmTask())
console.log(tasks)

//Q.3
function completedTask(){
    const compTask = tasks.splice(1,1)
    return (`${compTask} has been completed`)
}
console.log(completedTask())

//Q.4
function sorted(){
    const newSortedArray = tasks.toSorted();
    return (`Sorted alphabetically \n ${newSortedArray}`)
}
console.log(sorted())

//Q.5
console.log(`Incomplete tasks \n ${tasks}`)