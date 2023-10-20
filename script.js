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


document.querySelectorAll('td.Action').forEach(cell => {
    let clickCount = 0;
    cell.addEventListener('click', () => {
        clickCount++;
        cell.classList.remove('Red', 'Green');

        if (clickCount % 3 === 1) {
            cell.classList.add('Red');
        } else if (clickCount % 3 === 2) {
            cell.classList.add('Green');
        }
    });
});

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
        });

        room.addEventListener("mouseout", function() {
            this.style.opacity = "0.5";
        });
    }
}

updateClueNotebook(); // Initialize the Clue Notebook