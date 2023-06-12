// function prikaziPopup() {
//   var popup = document.getElementById("popup");
//   popup.style.display = "block";
// }

// function zatvoriPopup() {
//   var popup = document.getElementById("popup");
//   popup.style.display = "none";
// }

// function otkaziPrijavu1() {
//   zatvoriPopup();
//   
// }

// function submitForm1() {
//   prikaziPopup();
//   
// }

function prikaziPopup() {
  var popup = document.getElementById("popup");
  var overlay1 = document.getElementById("overlay1");
  popup.style.display = "block";
  overlay1.style.display = "block";
}

function zatvoriPopup() {
  var popup = document.getElementById("popup");
  var overlay1 = document.getElementById("overlay1");
  popup.style.display = "none";
  overlay1.style.display = "none";
}

function otkaziPrijavu1() {
  zatvoriPopup();
  
}
