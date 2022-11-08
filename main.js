function displayMyName () {
    const myName = document.createElement("h2");
    myName.textContent = "I am Jenny";
    myName.style.color = "blue";
    myName.style.textAlign ="center";
    document.body.appendChild(myName);
}
displayMyName()