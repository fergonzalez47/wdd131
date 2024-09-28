// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
        {
            place: "Rexburg, ID",
            length: "5 years",
        },
        {
            place: "Ammon, ID",
            length: "3 years",
        },
        {
            place: "Sandy, UT",
            length: "1 year",
        },
    ],
};

const placesElement = document.querySelector("#places-lived");
const foodsElement = document.querySelector("#favorite-foods");


// myInfo.favoriteFoods.forEach(food => {
//     let favoriteFood = document.createElement("li");
//     favoriteFood.textContent = food;
//     foodsElement.appendChild(favoriteFood);

// });


// myInfo.favoriteFoods.map((food) => {
//     let favoriteFood = document.createElement("li");
//     favoriteFood.textContent = food;
//     foodsElement.appendChild(favoriteFood);
// })

//activity 3.1

function foodsTemplate(food) {
    return `<li>${food}</li>`
}

//activity 3.2

function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

//activity 3.3

function generateListMarkup(list, callback) {
    htmlList = list.map(callback)
    return htmlList.join("");
}

foodsElement.innerHTML = generateListMarkup(myInfo.favoriteFoods, foodsTemplate)
placesElement.innerHTML = generateListMarkup(myInfo.placesLived, placesTemplate)

//
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

console.log("FOR LOOP:")
for (let i = 0; i < studentReport.length; i++) {
    const value = studentReport[i];

    if (value < LIMIT) {
        console.log(value)
    }


}
console.log("-----------------------");

console.log("   while LOOP:")


index = 0;
while (index < studentReport.length) {
    const value = studentReport[index];
    if (value < LIMIT) {
        console.log(value)
    }
    index++;
}
console.log("-----------------------");


console.log("FOR EACH:")

studentReport.forEach(value => {
    if (value < LIMIT) {
        console.log(value)
    }
})

console.log("-----------------------");

console.log("FOR IN");

for (const value in studentReport) {
    if (Object.prototype.hasOwnProperty.call(studentReport, value)) {
        const element = studentReport[value];
        if (element < LIMIT) {
            console.log(element)
        }
        
    }
}
console.log("-----------------------");

const daysArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


const date = new Date();
const todayNumber = date.getDate();
const dayOfWeek = date.getDay();
console.log(todayNumber);
console.log(dayOfWeek);


for (let i = 0; i < DAYS; i++) {
    let nextDay = (dayOfWeek + i) % 7;
    let day = daysArray[nextDay];
    console.log(day);
}