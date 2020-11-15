/*
  This list gives the ids of all the great houses that we want to look up.
  It should be inserted into the html above all the other files to ensure it is available
*/
const houseIdList = [
    7, // Eyrie
    17, // Baratheon
    169, // Greyjoy
    229, // Lannister
    362, // Stark
    378, // Targaryen
    395, // Tully
    398, // Tyrell
];

// variables

const housesContainer = document.getElementById("got-house-list");
const allHousesUrl = "https://anapioficeandfire.com/api/houses/7";
const killButton = document.getElementById("kill-random-lord-button");

async function fetchAllHouses() {
    try {
        // fetching the 8 houses and parsing the response into json
        const allHouses = await Promise.all([
            fetch("https://anapioficeandfire.com/api/houses/7").then((res) => res.json()),
            fetch("https://anapioficeandfire.com/api/houses/17").then((res) => res.json()),
            fetch("https://anapioficeandfire.com/api/houses/169").then((res) => res.json()),
            fetch("https://anapioficeandfire.com/api/houses/229").then((res) => res.json()),
            fetch("https://anapioficeandfire.com/api/houses/362").then((res) => res.json()),
            fetch("https://anapioficeandfire.com/api/houses/378").then((res) => res.json()),
            fetch("https://anapioficeandfire.com/api/houses/395").then((res) => res.json()),
            fetch("https://anapioficeandfire.com/api/houses/398").then((res) => res.json()),
        ]);

        return allHouses;
    } catch (error) {
        throw new Error("something went wrong");
    }
}

// after getting the result from api we use then to handle the data and append it to the dom

fetchAllHouses().then((res) => {
    let swornMemebersArray = [];
    // looping through the results to get the name of each house
    res.forEach(async (house) => {
        // after getting the url of the current lord we fetch the names to append them to our dom
        try {
            const currentLordName = await fetch(house.currentLord).then((res) => res.json());

            housesContainer.innerHTML += ` 
                                    <div class="got-house">
                                    <h1 class="got-house__title">${house.name}</h1>
                                    <span class="got-house__current-lord">${currentLordName.name}</span>
                                    </div>
                                  `;

            // making array of the swornmemebrs

            swornMemebersArray.push(house.swornMembers);
        } catch (error) {
            console.log("there is a house that doesn't have a current lord" + error);
        }
    });

    // adding event to the button

    killButton.addEventListener("click", function () {
        // random index to select random house
        let randomHousesIndex = Math.floor(Math.random(1 * 10) * swornMemebersArray.length);
        // random index to select random charachter from the random house
        let randomIndex = Math.floor(
            Math.random(1 * 10) * swornMemebersArray[randomHousesIndex].length
        );

        fetch(swornMemebersArray[randomHousesIndex][randomIndex])
            .then((res) => res.json())
            .then((res) => {
                currentLordName = res.name;

                // update the new current lord name after killing the old one

                const lordsOutput = document.querySelectorAll(".got-house__current-lord");

                lordsOutput[
                    Math.floor(Math.random(1 * 10) * lordsOutput.length)
                ].innerHTML = `${currentLordName}`;
            })
            .catch((err) => {
                console.log("Something went wrong", err);
            });
    });
});
