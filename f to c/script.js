function convert() {
  const fare = document.getElementById("input").value;
  const celsi = fare-32 *5/9;
  const result = document.getElementById("result");
  result.innerHTML = celsi.toFixed(3) + "celsi";
}

