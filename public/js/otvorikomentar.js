function otvoriDiv(event) {
  event.preventDefault(); // da ga href="#" ne posalje na pocetnu stranu pri svakom kliku
  var div = document.getElementById("comment-section");
        if (div.style.display === "none") {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
}