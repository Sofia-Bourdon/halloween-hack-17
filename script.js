// Define characters, weapons, and rooms

const characters = ["Peter Venkman", "Ray Stantz", "Egon Spengler", "Winston Zeddemore", "Slimer"];
const ghostTools = ["Proton Pack", "PKE Meter", "Ghost Trap", "Ecto Goggles", "Neutrona Wand"];
const rooms = ["Haunted House", "Pumpkin Patch", "Witch's Lair", "Cemetery", "Creepy Carnival"];

// Generate a random solution
const solution = {
    character: characters[Math.floor(Math.random() * characters.length)],
    weapon: ghostTools[Math.floor(Math.random() * ghostTools.length)],
    room: rooms[Math.floor(Math.random() * rooms.length)]
};

// Create an array to store clues
const clues = [];

// Display the solution
document.getElementById("solution-text").textContent = `${solution.character} in the ${solution.room} with the ${solution.weapon}`;

// Populate the Clue Notebook with initial clues
characters.forEach(character => {
    ghostTools.forEach(weapon => {
        rooms.forEach(room => {
            clues.push({ character, weapon, room, status: "Unknown" });
        });
    });
});

// Function to update the Clue Notebook
function updateClueNotebook() {
    const cluesList = document.getElementById("clues-list");
    cluesList.innerHTML = "Hello"; // Clear existing clues

    clues.forEach(clue => {
        const clueEntry = document.createElement("li");
        clueEntry.className = "clue-entry";
        clueEntry.textContent = `${clue.character}, ${clue.weapon}, ${clue.room}: ${clue.status}`;
        cluesList.appendChild(clueEntry);
    });
}

// Function to highlight the mousedover location
function changeOpacityOnHover() {
    let rooms = document.getElementsByClassName("room");

    for(room of rooms) {
        room.addEventListener("mouseover", function() {
            this.style.opacity = "1";
            this.style.border = "1px solid white";
        });

        room.addEventListener("mouseout", function() {
            this.style.opacity = "0.5";
            this.style.border = none;
        });
    }
}

updateClueNotebook(); // Initialize the Clue Notebook