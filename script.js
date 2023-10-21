// Define characters, weapons, and rooms

const characters = ["Peter Venkman", "Ray Stantz", "Egon Spengler", "Winston Zeddemore", "Abby Yates", "Patty Tolan", "Jillian Holtzmann", "Erin Gilbert"];
const ghostTools = ["Proton Pack", "PKE Meter", "Ghost Trap", "Ecto Goggles", "Neutrona Wand", "Spirit Box", "REM Pod", "Ghost Book"];
const rooms = ["Games Room", "Kitchen", "Living Quarters", "Office", "Reception", "Attic", "Basement", "Sleeping Quarters"];

// Function to randomly select an item from a list
function getRandomItem(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}

// Array to store the three randomized items
const randomItems = [
    getRandomItem(characters),
    getRandomItem(ghostTools),
    getRandomItem(rooms)
];

// Array to store all other items except the three chosen randomly
const allOtherItems = [
    ...characters.filter(character => !randomItems.includes(character)),
    ...ghostTools.filter(tool => !randomItems.includes(tool)),
    ...rooms.filter(room => !randomItems.includes(room))
];

console.log("Random Items:", randomItems);
console.log("All Other Items:", allOtherItems);