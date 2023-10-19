// Define characters, weapons, and rooms

const characters = ["Peter Venkman", "Ray Stantz", "Egon Spengler", "Winston Zeddemore", "Slimer"];
const ghostTools = ["Proton Pack", "PKE Meter", "Ghost Trap", "Ecto Goggles", "Neutrona Wand"];
const halloweenAreas = ["Haunted House", "Pumpkin Patch", "Witch's Lair", "Cemetery", "Creepy Carnival"];

// Generate a random solution
const solution = {
    character: characters[Math.floor(Math.random() * characters.length)],
    weapon: weapons[Math.floor(Math.random() * weapons.length)],
    room: rooms[Math.floor(Math.random() * rooms.length)]
};

// Create an array to store clues
const clues = [];

// Display the solution
document.getElementById("solution-text").textContent = `${solution.character} in the ${solution.room} with the ${solution.weapon}`;
