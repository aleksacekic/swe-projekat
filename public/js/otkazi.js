// OVO ZA SAD NE RADI ! popravi

// function zatvoriFormu() {

// //   // Resetovanje polja forme na prazno
// //   // document.getElementById("naziv").value = "";
// //   // document.getElementById("opis").value = "";
// //   // document.getElementById("mesto").value = "";
// //   // document.getElementById("vreme").value = "";

// //   // Zatvaranje forme - ovo za sad nije ubaceno ! ! !
//   document.getElementById("forma").style.display = "none";

//   var wrapper = document.querySelector(".wrapper");
// 	wrapper.classList.add("inactive");
// }

// ------------------------------------------------------

var wrapper = document.querySelector(".wrapper");
var form = document.getElementById("forma");

function otvoriFormu() {
  wrapper.classList.remove("inactive");
  form.style.display = "block";
}

function zatvoriFormu() {
  wrapper.classList.add("inactive");
  form.style.display = "none";
}





