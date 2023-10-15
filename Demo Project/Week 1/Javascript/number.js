const form = document.getElementById("numberForm");
form.addEventListener("submit", formEvent);
function formEvent(stop) {
  stop.preventDefault();
}
function calculateNumber() {
  const startNum = parseFloat(document.getElementById("startNumber").value);
  const endNum = parseFloat(document.getElementById("endNumber").value);
  const isEven = parseFloat(document.getElementById("evenOdd").value);
  const result = [];
  if (startNum == endNum) {
    alert("Start number and End number cannot be the same.");
  }
  if (startNum < endNum) {
    for (let num = startNum; num <= endNum; num++) {
      if (isEven == 1 && num % 2 == 0) {
        result.push(num);
      }
      if (isEven == 0 && !(num % 2 == 0)) {
        result.push(num);
      }
    }
  }
  if (startNum > endNum) {
    for (let num = startNum; num >= endNum; num--) {
      if (isEven == 1 && num % 2 == 0) {
        result.push(num);
      }
      if (isEven == 0 && !(num % 2 == 0)) {
        result.push(num);
      }
    }
  }
  let text = result.join(", ");
  document.getElementById("numberResult").innerHTML = text;
}
