const favchap = document.getElementById("favchap");
const ulList = document.getElementById("list");
const btn = document.querySelector("button");



let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter)
});



function setChapterList() {
    localStorage.setItem("MyBOMChapterList", JSON.stringify(chaptersArray))
}

function getChapterList() {
    let BOMList = JSON.parse(localStorage.getItem("MyBOMChapterList")); 
    return BOMList;
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray.filter((item) => item ==! chapter);
    setChapterList();
}


function displayList(item) {
    let li = document.createElement("li");
    let deleteBtn = document.createElement("button");
    li.textContent = item;
    deleteBtn.innerText = "❌";
    deleteBtn.classList.add('delete');
    li.append(deleteBtn);
    ulList.append(li);


    deleteBtn.addEventListener("click", () => {
        ulList.removeChild(li);
        deleteChapter(li.textContent);
        favchap.focus();
    })
}



btn.addEventListener("click", () => {


    if (favchap.value.trim() !== "") {
        displayList(favchap.value);
        chaptersArray.push(favchap.value);
        setChapterList();
        favchap.value = "";
        favchap.focus();
    }
})

