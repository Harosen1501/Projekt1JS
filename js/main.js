window.onload = function(){
deleteString();
checkButton();
};

function deleteString (){
    let trash = document.querySelectorAll(".bi-trash");
    trash.forEach((deleteButton) =>{
        deleteButton.addEventListener("click", ()=>{
            deleteButton.parentElement.remove();
        });
    });
};

function checkButton (){
    let check = document.querySelectorAll(".bi-check-circle");
check.forEach((done)=>{
    done.addEventListener("click", ()=>{
        done.style.color = "green";
    });
});
};





let addElement = document.querySelector(".button");
addElement.addEventListener("click", () =>{
    let li = document.createElement("li");
    li.classList.add("lista");
    let x = document.createElement("i");
    x.classList.add("bi");
    x.classList.add("bi-trash");
    let doneButton = document.createElement("i");
    doneButton.classList.add("bi");
    doneButton.classList.add("bi-check-circle");

    let inputValue = document.getElementById("input").value;
let text = document.createTextNode(inputValue);
li.appendChild(text);
if (inputValue === ""){
    alert("Du måste skriva något");
} else {
    document.getElementById("listContainer").appendChild(li);
}

li.appendChild(x);
li.appendChild(doneButton);

deleteString();
checkButton();
});