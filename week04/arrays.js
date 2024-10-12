//  arrays.js
const steps = ["one", "two", "three"];


function listTemplate(step) {
    return `<li>${step}</li>`
}


stepsNew = steps.map(listTemplate);

const stepsHtml = // use map to convert the list from strings to HTML
    document.querySelector("#myList").innerHTML = stepsNew.join()// set the innerHTML


const grades = ['A', 'B', 'A'];

function gpa(param) {
    let points = 0;
    if (param == "A") {
        points = 4;

    } else if (param == "B") {
        points = 3;
    }
    return points;
}

let gradesLetter = grades.map(gpa);