let submit = document.querySelector(".submit");
let result = document.querySelector(".result");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  let number = +document.querySelector("#number").value;
  let mod = +document.querySelector("#mod").value;
  let reverseNumber = 2;
  while (true) {
    if ((number * reverseNumber) % mod === 1) {
      result.textContent = "Result : " + reverseNumber;
      break;
    }
    reverseNumber += 1;
    if (reverseNumber > 200) {
      result.textContent = "Result : not found";
      break;
    }
  }
});
