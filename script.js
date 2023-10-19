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

// Populate the Clue Notebook with initial clues
characters.forEach(character => {
    weapons.forEach(weapon => {
        rooms.forEach(room => {
            clues.push({ character, weapon, room, status: "Unknown" });
        });
    });
});

// Function to update the Clue Notebook
function updateClueNotebook() {
    const cluesList = document.getElementById("clues-list");
    cluesList.innerHTML = ""; // Clear existing clues

    clues.forEach(clue => {
        const clueEntry = document.createElement("li");
        clueEntry.className = "clue-entry";
        clueEntry.textContent = `${clue.character}, ${clue.weapon}, ${clue.room}: ${clue.status}`;
        cluesList.appendChild(clueEntry);
    });
}

updateClueNotebook(); // Initialize the Clue Notebook
