const form = document.getElementById("factorialForm");
form.addEventListener("submit", formEvent);
function formEvent(stop) {
  stop.preventDefault();
}
function calculateFactorial() {
  const dataFactorial = document.getElementById("factorialInput").value;
  const dataValue = parseFloat(dataFactorial);

  function f(dataValue) {
    if (dataValue < 0) {
      return "The number has to be positive.";
    }
    if (dataValue == 0 || dataValue == 1) {
      return 1;
    }
    return dataValue * f(dataValue - 1);
  }
  const factorialResult = f(dataValue);
  const answer = `${factorialResult}`;
  document.getElementById("factorialResult").innerHTML = answer;
}
