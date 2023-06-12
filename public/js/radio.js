// function toggleDiv(id) {
//   var div = document.getElementById(id);
//   if (div.style.display !== 'none') { // OVO AKO HOCEMO DA MOZE I DA SE DUPLIM KLIKOM NE POKAZUJE NI JEDAN NI DRUGI DIV(SEARCH)
//     div.style.display = 'none';
//   }
//   {
//     div.style.display = 'block';
//   }
  
//   var otherDiv = (id === 'div1') ? 'div2' : 'div1';
//   document.getElementById(otherDiv).style.display = 'none';

// }

function toggleDiv(id) {
  var div = document.getElementById(id);
  var otherDiv = (id === 'div1') ? 'div2' : 'div1';
  
  if (div.style.display === 'block') { 
    div.style.display = 'none';
  } else {
    div.style.display = 'block';
    document.getElementById(otherDiv).style.display = 'none';
  }
}
