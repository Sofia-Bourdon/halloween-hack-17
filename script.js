// Define characters, weapons, and rooms

const characters = ["Peter Venkman", "Ray Stantz", "Egon Spengler", "Winston Zeddemore", "Abby Yates", "Patty Tolan", "Jillian Holtzmann", "Erin Gilbert"];
const ghostTools = ["Proton Pack", "PKE Meter", "Ghost Trap", "Ecto Goggles", "Neutrona Wand", "Spirit Box", "REM Pod", "Ghost Book"];
const rooms = ["Games Room", "Kitchen", "Living Quarters", "Office", "Reception", "Attic", "Basement", "Sleeping Quarters"];
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
};

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