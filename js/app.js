//Javascript och HTML samarbetar genom att hämta element via deras ID (getElementByID).
//Här hämtar texten <p> och knappen <button> från HTML.
const text = document.getElementById("maintext");
const button = document.getElementById("knapp");

//När användaren klickar på knappen, ändrad JavaScript textinnehållet i <p> elementet.
button.addEventListener("click", function() {
text.innerText = "Du klickade på knappen";
});
