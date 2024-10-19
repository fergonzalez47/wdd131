const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];


let count = getLocalStorage() || 0;

const form = document.querySelector('form.wf1');

const select = document.getElementById("product");

function populateElements() {
    products.forEach(product => {
        let option = createElement(product);
        select.appendChild(option); // Añadir cada opción al select
    });

}

function createElement(param) {
    let option = document.createElement("option");
    option.innerHTML = param.name;
    option.setAttribute("value", param.id);
    return option;
}


populateElements();


form.addEventListener("submit", () => {
    count++;
    setLocalStorage();
})


function setLocalStorage() {
    localStorage.setItem("counterVisits", JSON.stringify(count))

}

function getLocalStorage() {
    let count = JSON.parse(localStorage.getItem("counterVisits"));
    return count;

}