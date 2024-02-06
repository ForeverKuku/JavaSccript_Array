const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

//Create a string that joins all elements of the colors array into a single string separated by commas:
const colorsString = colors.join(', ');
console.log(colorsString); // Output: "red, green, blue, yellow, orange"


//Remove the second and third elements from the colors array and replace them with 'purple' and 'pink'.
colors.splice(1, 2, 'purple', 'pink');
console.log(colors); // Output: ["red", "purple", "pink", "yellow", "orange"]


//Copy the elements from index 1 to index 3 within the colors array to index 0.
colors.copyWithin(0, 1, 3);
console.log(colors); // Output: ["purple", "pink", "pink", "yellow", "orange"]


//Transform all elements of the colors array to uppercase.
colors.forEach((color, index, arr) => arr[index] = color.toUpperCase());
console.log(colors); // Output: ["PURPLE", "PINK", "PINK", "YELLOW", "ORANGE"]


//Find the first element in the colors array that starts with the letter 'b'.
const startsWithB = colors.find(color => color.toLowerCase().startsWith('b'));
console.log(startsWithB); // Depending on the manipulation, this might return undefined if no elements start with 'b'


//Create a new array selectedColors containing the elements from index 1 to index 3 (inclusive) from the colors array.

const selectedColors = colors.slice(1, 4); // slice(start, end) - end is not included, so we use 4 to include index 3
console.log(selectedColors); // Output: ["PINK", "PINK", "YELLOW"]
