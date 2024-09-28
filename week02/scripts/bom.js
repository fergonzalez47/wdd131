const favchap = document.getElementById("favchap");
const ulList = document.getElementById("list");
const btn = document.querySelector("button");

const scriptureReference = document.createElement("li");

const deleteBtn = document.createElement("button");



btn.addEventListener("click", () => {
    if (favchap.value.trim() !== '') {
        
        scriptureReference.textContent = favchap.value;
        deleteBtn.innerText = "❌";
        
        scriptureReference.append(deleteBtn);
        ulList.append(scriptureReference);
        favchap.value = '';
        
        
    } else {
        favchap.focus();
    }
    

})

deleteBtn.addEventListener("click", () => {
    ulList.removeChild(scriptureReference);
    favchap.focus();
})