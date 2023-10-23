// Define characters, weapons, and scenes

const characters = [
  "Ringmaster Rick",
  "Freya the Fortune Teller",
  "Carl the Clown",
  "Magnificent Macy the Magician",
  "Felix the Ferris Wheel Operator",
  "Charlie the Cotton Candy Vendor",
  "Rita the Roller Coaster Operator",
  "Strongman Sam",
];
const weapons = [
  "Poisoned Cotton Candy",
  "Magic Wand",
  "Fire-Eating Torch",
  "Dagger from the House of Mirrors",
  "Tilt-a-Whirl Wrench",
  "Popcorn Kernel Bomb",
  "Juggling Pins",
  "Crystal Ball",
];
const scenes = [
  "Ferris Wheel",
  "House of Mirrors",
  "Carnival Midway",
  "Funhouse",
  "Cotton Candy Stand",
  "Roller Coaster",
  "Fortune Teller's Tent",
  "Haunted House",
];
// Array to store the three randomized items
const randomItems = [
  getRandomItem(characters),
  getRandomItem(weapons),
  getRandomItem(scenes),
];

// get references to each dropdown menu
const characterDropdown = document.getElementById("character-dropdown");
const weaponDropdown = document.getElementById("weapon-dropdown");
const sceneDropdown = document.getElementById("scene-dropdown");

//get referencees to question button and numindicator
const questionButton1 = document.getElementById("question-button1");
const numIndicator1 = document.getElementById("num-indicator1");

// Get the correct answers from the randomItems array
const correctCharacter = randomItems[0];
const correctWeapon = randomItems[1];
const correctScene = randomItems[2];

// get refernces to each selection from the dropdown
let selectedCharacter = characterDropdown.value;
let selectedWeapon = weaponDropdown.value;
let selectedScene = sceneDropdown.value;

// get refernces to each table
let characterTable = document.getElementById("character-table")
console.log(characterTable)
let weaponTable = document.getElementById("weapon-table")
let sceneTable = document.getElementById("scene-table")

// get refernece to row for each table
let rows = document.getElementsByTagName("tr");

//set chances for player
let questionChances = 3;
let randomChances = 2;

// create a click counter for each table
let clickcounter = 0;

let definite = []
// Function to randomly select an item from a list
function getRandomItem(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function highlightSelectedRowOnTable(currentTable) {
  /**
   * Function to select a table row and change its color
   * based on the users confidence in their selection
   */

  
  for(let i =0; i < rows.length; i++){
    let currentRow = rows[i];
    let currentTable = currentRow.parentElement;
    currentRow.onclick = function (){
      clickcounter++;
      if(clickcounter === 1){
        this.classList.add("DefinitelyNot");
        this.children[0].style.color = "red";
      }else if(clickcounter === 2){
        this.classList.remove("DefinitelyNot");
        this.classList.add("Possibly");
        this.children[0].style.color = "orange";
      }else if(clickcounter === 3){
        this.classList.remove("Possibly");
        this.classList.add("Definitely");
        
        this.children[0].style.color = "green";
      }else{
        this.classList.remove("Definitely");
        this.children[0].style.color = "black";
        clickcounter = 0;
      }
    }
  }
}

function checkForOnlyOneDefiniteInTable(){

}

function clearSelections(){

  for(let i = 0; i < characterTable.rows.length; i++){
    characterTable.rows[i].classList.remove("DefinitelyNot");
    characterTable.rows[i].classList.remove("Possibly");
    characterTable.rows[i].classList.remove("Definitely");
    characterTable.rows[i].children[0].style.color = "black"
  }

  for(let i = 0; i < weaponTable.rows.length; i++){
    weaponTable.rows[i].classList.remove("DefinitelyNot");
    weaponTable.rows[i].classList.remove("Possibly");
    weaponTable.rows[i].classList.remove("Definitely");
    weaponTable.rows[i].children[0].style.color = "black"
  }

  for(let i = 0; i < sceneTable.rows.length; i++){
    sceneTable.rows[i].classList.remove("DefinitelyNot");
    sceneTable.rows[i].classList.remove("Possibly");
    sceneTable.rows[i].classList.remove("Definitely");
    sceneTable.rows[i].children[0].style.color = "black"
  }

}

// Function to highlight the mousedover location
function changeOpacityOnHover() {
  let scenes = document.getElementsByClassName("scene");

  for (scene of scenes) {
    scene.addEventListener("mouseover", function () {
      this.style.opacity = "1";
    });

    scene.addEventListener("mouseout", function () {
      this.style.opacity = "0.5";
    });
  }
}



// Array to store all other items except the three chosen randomly
const allOtherItems = [
  ...characters.filter((character) => !randomItems.includes(character)),
  ...weapons.filter((weapon) => !randomItems.includes(weapon)),
  ...scenes.filter((scene) => !randomItems.includes(scene)),
];

//----------------
console.log("Random Items:", randomItems);
console.log("All Other Items:", allOtherItems);

// Function to highlight selected items based on matches
function checkSelections() {
  randomChances--;
  const characterDropdown = document.getElementById("character-dropdown");
  const weaponDropdown = document.getElementById("weapon-dropdown");
  const sceneDropdown = document.getElementById("scene-dropdown");

  // Get the selected values
  const selectedCharacter = characterDropdown.value;
  const selectedWeapon = weaponDropdown.value;
  const selectedScene = sceneDropdown.value;

  // reference the charactersheet
  let characters = characterTable.getElementsByTagName("td");
  // reference the weaponsheet
  let weapons = weaponTable.getElementsByTagName("td");
  // reference the scenesheet
  let scenes = sceneTable.getElementsByTagName("td");


  // Check if selected items match randomItems or allOtherItems and apply highlighting
  if (randomItems.includes(selectedCharacter)) {
    characterDropdown.style.backgroundColor = "green";
    console.log(selectedCharacter)
    // iterate through the characters
    for (let i = 0; i < characters.length; i++) {
      // if the character matches the selected character, highlight it green
      if(characters[i].textContent === selectedCharacter){
        characters[i].children[0].style.color = "green"
      }
    }
  } else if (allOtherItems.includes(selectedCharacter)) {
    characterDropdown.style.backgroundColor = "red";
    // iterate through the characters
    for (let i = 0; i < characters.length; i++) {
      // if the character matches the selected character, highlight it red
      if (characters[i].textContent === selectedCharacter) {
        console.log(characters[i].textContent)
        characters[i].children[0].style.color = "red";
      }
    }
  }

  if (randomItems.includes(selectedWeapon)) {
    weaponDropdown.style.backgroundColor = "green";
    // iterate through the weapons
    for (let i = 0; i < weapons.length; i++) {
      // if the weapon matches the selected weapon, highlight it green
      console.log(weapons[i].textContent)
      if (weapons[i].textContent === selectedWeapon) {
        weapons[i].children[0].style.color = "green";
      }
    }
  } else if (allOtherItems.includes(selectedWeapon)) {
    weaponDropdown.style.backgroundColor = "red";
    // iterate through the weapons
    for (let i = 0; i < weapons.length; i++) {
      // if the weapon matches the selected weapon, highlight it red
      if (weapons[i].textContent === selectedWeapon) {
        weapons[i].children[0].style.color = "red";
      }
    }
  }

  if (randomItems.includes(selectedScene)) {
    sceneDropdown.style.backgroundColor = "green";
    for (let i = 0; i < scenes.length; i++) {
      if (scenes[i].textContent === selectedScene) {
        scenes[i].children[0].style.color = "green";
      }
    }
  } else if (allOtherItems.includes(selectedScene)) {
    sceneDropdown.style.backgroundColor = "red";
    for (let i = 0; i < scenes.length; i++) {
      if (scenes[i].textContent === selectedScene) {
        scenes[i].children[0].style.color = "red";
      }
    }
  }

  if(randomChances === 0){
    alert("You Are Out of Random Guesses");
    let button = document.getElementById("submit-button");
    button.disabled = true;
  }
};

// Add an event listener to the question button 1
questionButton1.addEventListener("click", () => {
    const selectedCharacter = document.getElementById("question-character-dropdown1").value;
    const selectedWeapon = document.getElementById("question-weapon-dropdown1").value;
    const selectedScene = document.getElementById("question-scene-dropdown1").value;

    let correctChoices1 = 0;
    // when the button is clicked, decrement the number of chances
    questionChances--;
        if (selectedCharacter === correctCharacter) {
            correctChoices1++;
        }
        if (selectedWeapon === correctWeapon) {
            correctChoices1++;
        }
        if (selectedScene === correctScene) {
            correctChoices1++;
        }

    numIndicator1.value = correctChoices1.toString(); // Display the result

    // Disable the button if the user is out of chances
    if (questionChances === 0) {
        alert("You are out of chances!");
        questionButton1.disabled = true;
    }
});

// Script for the Clues mini game

// Add event listener to the select button
const selectButton = document.getElementById("select-button1");

selectButton.addEventListener("click", () => {
  // Get the selected clue type
  const clueTypeDropdown = document.getElementById("clue-type-1-dropdown");
  const selectedClueType = clueTypeDropdown.value;

  // Get the selected character, weapon, and scene
  const selectedCharacterInput = document.getElementById(
    "clue-character-dropdown"
  );
  const selectedWeaponInput = document.getElementById("clue-weapon-dropdown");
  const selectedSceneInput = document.getElementById("clue-scene-dropdown");

  // Clear previous values
  selectedCharacterInput.value = "";
  selectedWeaponInput.value = "";
  selectedSceneInput.value = "";

  if (selectedClueType === "It definitely was not") {
    // Generate three random incorrect items
    const incorrectItems = getThreeRandomItems(allOtherItems);

    selectedCharacterInput.value = incorrectItems[0];
    selectedWeaponInput.value = incorrectItems[1];
    selectedSceneInput.value = incorrectItems[2];
  } else if (selectedClueType === "It might have been") {
    // Get one correct item and two random incorrect items
    const correctCharacter = getRandomItem(characters);
    const correctWeapon = getRandomItem(weapons);
    const correctScene = getRandomItem(scenes);

    // Generate two random incorrect items for each category
    const incorrectCharacters = getThreeRandomItems(
      characters.filter((c) => c !== correctCharacter)
    );
    const incorrectWeapons = getThreeRandomItems(
      weapons.filter((w) => w !== correctWeapon)
    );
    const incorrectScenes = getThreeRandomItems(
      scenes.filter((s) => s !== correctScene)
    );

    // Combine the correct and incorrect items
    const mixedCharacters = [correctCharacter, ...incorrectCharacters];
    const mixedWeapons = [correctWeapon, ...incorrectWeapons];
    const mixedScenes = [correctScene, ...incorrectScenes];

    // Shuffle the mixed items
    shuffleArray(mixedCharacters);
    shuffleArray(mixedWeapons);
    shuffleArray(mixedScenes);

    selectedCharacterInput.value = mixedCharacters[0];
    selectedWeaponInput.value = mixedWeapons[0];
    selectedSceneInput.value = mixedScenes[0];
  }
});

// Function to get a random item from the provided list
function getRandomItem(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

// Function to shuffle an array randomly
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to get three distinct random items from the provided list
function getThreeRandomItems(list) {
  const shuffledList = [...list];
  shuffleArray(shuffledList);
  return [shuffledList[0], shuffledList[1], shuffledList[2]];
}
