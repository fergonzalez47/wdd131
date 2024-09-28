const favchap = document.getElementById("favchap");
const ulList = document.getElementById("list");
const btn = document.querySelector("button");

const scriptureReference = document.createElement("li");

const deleteBtn = document.createElement("button");

scriptureReference.textContent = favchap.value;
deleteBtn.innerText = "❌";
scriptureReference.append(deleteBtn);
ulList.append(scriptureReference);