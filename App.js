const originalDiv = document.getElementById("container");
const otherDivs = document.createElement("div");
otherDivs.textContent = "Your\'e trying too"
originalDiv.appendChild(otherDivs)
