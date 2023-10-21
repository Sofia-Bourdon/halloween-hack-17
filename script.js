// Define characters, weapons, and rooms

const characters = ["Ringmaster Rick", "Freya the Fortune Teller", "Carl the Clown", "Magnificent Macy the Magician", "Felix the Ferris Wheel Operator", "Charlie the Cotton Candy Vendor", "Rita the Roller Coaster Operator", "Strongman Sam"];
const weapons = ["Poisoned Cotton Candy", "Magic Wand", "Fire-Eating Torch", "Dagger from the House of Mirrors", "Tilt-a-Whirl Wrench", "Popcorn Kernel Bomb", "Juggling Pins", "Crystal Ball"];
const scenes = ["Ferris Wheel", "House of Mirrors", "Carnival Midway", "Funhouse", "Cotton Candy Stand", "Roller Coaster", "Fortune Teller's Tent", "Haunted House"];
let clickcounter = 0;

// Function to randomly select an item from a list
function getRandomItem(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}

function highlightSelectedRowOnTable() {
    // get refernce to the table
    let table = document.getElementById("table");
    //get refernce to the rows
    let rows = table.getElementsByTagName("tr");

    //iterate through the rows
    for (let i = 0; i < rows.length; i++) {
        let currentRow = table.rows[i];

        //bind click event to the row
        currentRow.onclick = function() {
            clickcounter++;
            //highlight the selected row
            console.log("You selected:", this);
            if (clickcounter === 1) {
                this.classList.add("DefinitelyNot");
                this.children[0].style.color = "red";
            } else if (clickcounter === 2) {
                this.classList.remove("DefinitelyNot");
                this.classList.add("Possibly");
                this.children[0].style.color = "blue";
            } else if (clickcounter === 3) {
                this.classList.remove("Possibly");
                this.classList.add("Definitely");
                this.children[0].style.color = "green";
            } else {
                this.classList.remove("Definitely");
                this.classList.add("NotSelected");
                this.children[0].style.color = "black";
                clickcounter = 0;
            }
            console.log(this.classList);
            console.log(clickcounter);
        }
    };
};

function highlightSelectedRowOnTable2() {
    // get refernce to the table
    let table = document.getElementById("table2");
    //get refernce to the rows
    let rows = table.getElementsByTagName("tr");

    //iterate through the rows
    for (let i = 0; i < rows.length; i++) {
        let currentRow = table.rows[i];

        //bind click event to the row
        currentRow.onclick = function() {
            clickcounter++;
            //highlight the selected row
            console.log("You selected:", this);
            if (clickcounter === 1) {
                this.classList.add("DefinitelyNot");
                this.children[0].style.color = "red";
            } else if (clickcounter === 2) {
                this.classList.remove("DefinitelyNot");
                this.classList.add("Possibly");
                this.children[0].style.color = "blue";
            } else if (clickcounter === 3) {
                this.classList.remove("Possibly");
                this.classList.add("Definitely");
                this.children[0].style.color = "green";
            } else {
                this.classList.remove("Definitely");
                this.classList.add("NotSelected");
                this.children[0].style.color = "black";
                clickcounter = 0;
            }
            console.log(this.classList);
            console.log(clickcounter);
        }
    };
}

function highlightSelectedRowOnTable3() {
    // get refernce to the table
    let table = document.getElementById("table3");
    //get refernce to the rows
    let rows = table.getElementsByTagName("tr");

    //iterate through the rows
    for (let i = 0; i < rows.length; i++) {
        let currentRow = table.rows[i];

        //bind click event to the row
        currentRow.onclick = function() {
            clickcounter++;
            //highlight the selected row
            console.log("You selected:", this);
            if (clickcounter === 1) {
                this.classList.add("DefinitelyNot");
                this.children[0].style.color = "red";
            } else if (clickcounter === 2) {
                this.classList.remove("DefinitelyNot");
                this.classList.add("Possibly");
                this.children[0].style.color = "blue";
            } else if (clickcounter === 3) {
                this.classList.remove("Possibly");
                this.classList.add("Definitely");
                this.children[0].style.color = "green";
            } else {
                this.classList.remove("Definitely");
                this.classList.add("NotSelected");
                this.children[0].style.color = "black";
                clickcounter = 0;
            }
            console.log(this.classList);
            console.log(clickcounter);
        }
    };
}

// Function to highlight the mousedover location
function changeOpacityOnHover() {
    let scenes = document.getElementsByClassName("room");

    for(room of rooms) {
        room.addEventListener("mouseover", function() {
            this.style.opacity = "1";
        });

        room.addEventListener("mouseout", function() {
            this.style.opacity = "0.5";
        });
    }
};

// Array to store the three randomized items
const randomItems = [
    getRandomItem(characters),
    getRandomItem(weapons),
    getRandomItem(scenes)
];

// Array to store all other items except the three chosen randomly
const allOtherItems = [
    ...characters.filter(character => !randomItems.includes(character)),
    ...weapons.filter(weapon => !randomItems.includes(weapon)),
    ...scenes.filter(scene => !randomItems.includes(scene))
];

console.log("Random Items:", randomItems);
console.log("All Other Items:", allOtherItems);

// Function to highlight selected items based on matches
function checkSelections() {
    const characterDropdown = document.getElementById("character-dropdown");
    const weaponDropdown = document.getElementById("weapon-dropdown");
    const sceneDropdown = document.getElementById("scene-dropdown");

    // Get the selected values
    const selectedCharacter = characterDropdown.value;
    const selectedWeapon = weaponDropdown.value;
    const selectedScene = sceneDropdown.value;

    // reference the charactersheet
    let characterSheet = document.getElementById("table");
    let characters = characterSheet.getElementsByTagName("td");
    // reference the weaponsheet
    let weaponSheet = document.getElementById("table2");
    let weapons = weaponSheet.getElementsByTagName("td");
    // reference the scenesheet
    let sceneSheet = document.getElementById("table3");
    let scenes = sceneSheet.getElementsByTagName("td");

     // Check if selected items match randomItems or allOtherItems and apply highlighting
     if (randomItems.includes(selectedCharacter)) {
        characterDropdown.style.backgroundColor = "green";
        // iterate through the characters
        for (let i = 0; i < characters.length; i++) {
            // if the character matches the selected character, highlight it green
            if (characters[i].innerHTML === selectedCharacter) {
                characters[i].style.color = "green";
            }}
     } else if (allOtherItems.includes(selectedCharacter)) {
        characterDropdown.style.backgroundColor = "red";
        // iterate through the characters
        for (let i = 0; i < characters.length; i++) {
            // if the character matches the selected character, highlight it red
            if (characters[i].innerHTML === selectedCharacter) {
                characters[i].style.color = "red";
            }}
     }
 
     if (randomItems.includes(selectedWeapon)) {
         weaponDropdown.style.backgroundColor = "green";
         // iterate through the weapons
         for (let i = 0; i < weapons.length; i++) {
            // if the weapon matches the selected weapon, highlight it green
            if (weapons[i].innerHTML === selectedWeapon) {
                weapons[i].style.color = "green";
            }}
     } else if (allOtherItems.includes(selectedWeapon)) {
         weaponDropdown.style.backgroundColor = "red";
        // iterate through the weapons
        for (let i = 0; i < weapons.length; i++) {
            // if the weapon matches the selected weapon, highlight it red
            if (weapons[i].innerHTML === selectedWeapon) {
                weapons[i].style.color = "red";
            }}
     }
 
     if (randomItems.includes(selectedScene)) {
         sceneDropdown.style.backgroundColor = "green";
            for (let i = 0; i < scenes.length; i++) {
                if (scenes[i].innerHTML === selectedScene) {
                    scenes[i].style.color = "green";
                }}
     } else if (allOtherItems.includes(selectedScene)) {
         sceneDropdown.style.backgroundColor = "red";
            for (let i = 0; i < scenes.length; i++) {
                if (scenes[i].innerHTML === selectedScene) {
                    scenes[i].style.color = "red";
                }}
     }
 }