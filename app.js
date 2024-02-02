let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let incrementByValue = document.getElementById("changing-value");
let counter = document.getElementById("value");
let reset = document.getElementById("reset");

let stepped = 1;
incrementByValue.addEventListener("change", function (e) {
  stepped = parseInt(e.target.value);
});
decrement.addEventListener("click", handleDecrement);
increment.addEventListener("click", handleIncrement);
reset.addEventListener("click", handleReset);

function handleIncrement() {
  if (stepped >= 1) {
    const newVal = parseInt(counter.innerText) + stepped;
    document.getElementById("value").innerText = newVal;
  }
}

function handleDecrement() {
  if (stepped >= 1) {
    const newVal = parseInt(counter.innerText) - stepped;
    if (newVal >= 0) {
      document.getElementById("value").innerText = newVal;
    }
  }
}

function handleReset() {
  counter.innerText = 0;
  incrementByValue.value = 1;
}
