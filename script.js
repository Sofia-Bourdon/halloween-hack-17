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
    currentRow.onclick = function () {
      clickcounter++;
      //highlight the selected row
      console.log("You selected:", this);
      if (clickcounter === 1) {
        this.classList.add("DefinitelyNot");
        this.children[0].style.color = "red";
      } else if (clickcounter === 2) {
        this.classList.remove("DefinitelyNot");
        this.classList.add("Possibly");
        this.children[0].style.color = "orange";
      } else if (clickcounter === 3) {
        this.classList.remove("Possibly");
        this.classList.add("Definitely");
        this.children[0].style.color = "green";
      } else {
        this.classList.remove("Definitely");
        this.classList.add("NotSelected");
        this.children[0].style.color = "white";
        clickcounter = 0;
      }
      console.log(this.classList);
      console.log(clickcounter);
    };
  }
}

function highlightSelectedRowOnTable2() {
  // get refernce to the table
  let table = document.getElementById("table2");
  //get refernce to the rows
  let rows = table.getElementsByTagName("tr");

  //iterate through the rows
  for (let i = 0; i < rows.length; i++) {
    let currentRow = table.rows[i];

    //bind click event to the row
    currentRow.onclick = function () {
      clickcounter++;
      //highlight the selected row
      console.log("You selected:", this);
      if (clickcounter === 1) {
        this.classList.add("DefinitelyNot");
        this.children[0].style.color = "red";
      } else if (clickcounter === 2) {
        this.classList.remove("DefinitelyNot");
        this.classList.add("Possibly");
        this.children[0].style.color = "orange";
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
    };
  }
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
    currentRow.onclick = function () {
      clickcounter++;
      //highlight the selected row
      console.log("You selected:", this);
      if (clickcounter === 1) {
        this.classList.add("DefinitelyNot");
        this.children[0].style.color = "red";
      } else if (clickcounter === 2) {
        this.classList.remove("DefinitelyNot");
        this.classList.add("Possibly");
        this.children[0].style.color = "orange";
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
    };
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

// Array to store the three randomized items
const randomItems = [
  getRandomItem(characters),
  getRandomItem(weapons),
  getRandomItem(scenes),
];

// Array to store all other items except the three chosen randomly
const allOtherItems = [
  ...characters.filter((character) => !randomItems.includes(character)),
  ...weapons.filter((weapon) => !randomItems.includes(weapon)),
  ...scenes.filter((scene) => !randomItems.includes(scene)),
];

console.log("Random Items:", randomItems);
console.log("All Other Items:", allOtherItems);

// Script for Random pick Mini Game
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
      }
    }
  } else if (allOtherItems.includes(selectedCharacter)) {
    characterDropdown.style.backgroundColor = "red";
    // iterate through the characters
    for (let i = 0; i < characters.length; i++) {
      // if the character matches the selected character, highlight it red
      if (characters[i].innerHTML === selectedCharacter) {
        characters[i].style.color = "red";
      }
    }
  }

  if (randomItems.includes(selectedWeapon)) {
    weaponDropdown.style.backgroundColor = "green";
    // iterate through the weapons
    for (let i = 0; i < weapons.length; i++) {
      // if the weapon matches the selected weapon, highlight it green
      if (weapons[i].innerHTML === selectedWeapon) {
        weapons[i].style.color = "green";
      }
    }
  } else if (allOtherItems.includes(selectedWeapon)) {
    weaponDropdown.style.backgroundColor = "red";
    // iterate through the weapons
    for (let i = 0; i < weapons.length; i++) {
      // if the weapon matches the selected weapon, highlight it red
      if (weapons[i].innerHTML === selectedWeapon) {
        weapons[i].style.color = "red";
      }
    }
  }

  if (randomItems.includes(selectedScene)) {
    sceneDropdown.style.backgroundColor = "green";
    for (let i = 0; i < scenes.length; i++) {
      if (scenes[i].innerHTML === selectedScene) {
        scenes[i].style.color = "green";
      }
    }
  } else if (allOtherItems.includes(selectedScene)) {
    sceneDropdown.style.backgroundColor = "red";
    for (let i = 0; i < scenes.length; i++) {
      if (scenes[i].innerHTML === selectedScene) {
        scenes[i].style.color = "red";
      }
    }
  }
}

// Script for the question mini-game
const questionButton1 = document.getElementById("question-button1");
const questionButton2 = document.getElementById("question-button2");
const numIndicator1 = document.getElementById("num-indicator1");
const numIndicator2 = document.getElementById("num-indicator2");

// Get the correct answers from the randomItems array
const correctCharacter = randomItems[0];
const correctWeapon = randomItems[1];
const correctScene = randomItems[2];

// Add an event listener to the question button 1
questionButton1.addEventListener("click", () => {
  const selectedCharacter = document.getElementById(
    "question-character-dropdown1"
  ).value;
  const selectedWeapon = document.getElementById(
    "question-weapon-dropdown1"
  ).value;
  const selectedScene = document.getElementById(
    "question-scene-dropdown1"
  ).value;

  let correctChoices1 = 0;

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
});

// Add an event listener to the question button 2
questionButton2.addEventListener("click", () => {
  const selectedCharacter = document.getElementById(
    "question-character-dropdown2"
  ).value;
  const selectedWeapon = document.getElementById(
    "question-weapon-dropdown2"
  ).value;
  const selectedScene = document.getElementById(
    "question-scene-dropdown2"
  ).value;

  let correctChoices2 = 0;

  if (selectedCharacter === correctCharacter) {
    correctChoices2++;
  }
  if (selectedWeapon === correctWeapon) {
    correctChoices2++;
  }
  if (selectedScene === correctScene) {
    correctChoices2++;
  }

  numIndicator2.value = correctChoices2.toString(); // Display the result
});

// Script for the Clues mini game
// Add event listener to the select button
const selectButton1 = document.getElementById("select-button1");

selectButton1.addEventListener("click", () => {
  // Get the selected clue type
  const clueTypeRandom1 = document.getElementById("clue-type-1-random");
  const selectedClueType1 = clueTypeRandom1.value;
  // Get the selected character, weapon, and scene
  const selectedCharacter1Input = document.getElementById(
    "clue-character-random1"
  );
  const selectedWeapon1Input = document.getElementById("clue-weapon-random1");
  const selectedScene1Input = document.getElementById("clue-scene-random1");

  if (selectedClueType1 === "It definitely was not") {
    // Generate three random incorrect items
    const incorrectCharacterItems = allOtherItems.slice(0, 6);
    const incorrectWeaponItems = allOtherItems.slice(7, 13);
    const incorrectSceneItems = allOtherItems.slice(14, 20);

    const incorrectCharacter1 = getRandomItem(incorrectCharacterItems);
    const incorrectWeapon1 = getRandomItem(incorrectWeaponItems);
    const incorrectScene1 = getRandomItem(incorrectSceneItems);

    selectedCharacter1Input.value = incorrectCharacter1;
    selectedWeapon1Input.value = incorrectWeapon1;
    selectedScene1Input.value = incorrectScene1;
  } else if (selectedClueType1 === "It might have been") {
    // Get one correct item and two random incorrect items
    const correctCharacter1 = randomItems[0]; 
    const correctWeapon1 = randomItems[1]; 
    const correctScene1 = randomItems[2]; 

    const randomIndex = Math.floor(Math.random() * 3);

    // Get the appropriate item lists based on the random index
    let characterItems, weaponItems, sceneItems;

    switch (randomIndex) {
      case 0: // Randomly selected a character
        characterItems = [correctCharacter1, getRandomItem(randomItems)];
        weaponItems = getTwoRandomIncorrectItems(weapons, correctWeapon1);
        sceneItems = getTwoRandomIncorrectItems(scenes, correctScene1);
        break;
      case 1: // Randomly selected a weapon
        characterItems = getTwoRandomIncorrectItems(characters,correctCharacter1);
        weaponItems = [correctWeapon1, getRandomItem(randomItems)];
        sceneItems = getTwoRandomIncorrectItems(scenes, correctScene1);
        break;
      case 2: // Randomly selected a scene
        characterItems = getTwoRandomIncorrectItems(characters,correctCharacter1);
        weaponItems = getTwoRandomIncorrectItems(weapons, correctWeapon1);
        sceneItems = [correctScene1, getRandomItem(randomItems)];
        break;
    }

    // Assign values to input elements
    selectedCharacter1Input.value = characterItems[0];
    selectedWeapon1Input.value = weaponItems[0];
    selectedScene1Input.value = sceneItems[0];
  }
});

// Function to get a random item from the provided list
function getRandomItem(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

// Function to get a random incorrect item from the list
function getRandomIncorrectItem(list) {
  const incorrectItems = list.filter(
    (item) =>
      !characters.includes(item) &&
      !weapons.includes(item) &&
      !scenes.includes(item)
  );
  return getRandomItem(incorrectItems);
}

// Function to get two random incorrect items from the list
function getTwoRandomIncorrectItems(list, correctItem) {
  const incorrectItems = list.filter((item) => item !== correctItem);
  const shuffledIncorrectItems = shuffleArray(incorrectItems);
  return [shuffledIncorrectItems[0], shuffledIncorrectItems[1]];
}

// Function to shuffle an array randomly
function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
