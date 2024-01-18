function visibilityFunction(idp,idb) {
    var x = document.getElementById(idp);
    var button = document.getElementById(idb)
    if (x.style.display === "none") {
      x.style.display = "block";
      button.innerText = '🔺';
    } else {
      x.style.display = "none";
      button.innerHTML = '🔻';
    }
}