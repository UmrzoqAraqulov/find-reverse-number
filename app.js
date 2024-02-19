let number = document.querySelector("#number");
let mod = document.querySelector("#mod");
let submit = document.querySelector(".submit");
let result = document.querySelector(".result");
submit.addEventListener("click", function (e) {
  e.preventDefault();
  number = +number.value;
  mod = +mod.value;
  let reverseNumber = 2;
  while (true) {
    if ((number * reverseNumber) % mod === 1) {
      result.textContent+=reverseNumber;
      break;
    }
    reverseNumber += 1;
    if (reverseNumber > 200) {
      break;
    }
  }
});
