function toggleMapu() {
  var mapaDiv = document.getElementById("mapa");
  var toggleButton = document.getElementById("toggleMapa");
  if (mapaDiv.style.display === "none") {
    mapaDiv.style.display = "block";
    toggleButton.innerHTML = "Zatvori mapu događaja";
    toggleButton.classList.add("active");
    // ovde se moz doda kod za prikaz mape, npr Google Maps API
  } else {
    mapaDiv.style.display = "none";
    toggleButton.innerHTML = "Prikaži mapu događaja";
    toggleButton.classList.remove("active");
  }
}