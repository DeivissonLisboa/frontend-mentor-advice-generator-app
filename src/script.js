const ADVICE_ID_ELEMENT = document.getElementById("advice-id")
const ADVICE_TEXT_ELEMENT = document.getElementById("advice")
const ADVICE_BUTTON = document.querySelector(".advice__button")
const API_URL = "https://api.adviceslip.com/advice"

function getAdvice() {
  let rand = Math.floor(Math.random() * 224)
  fetch(`${API_URL}/${rand}`)
    .then((response) => response.json())
    .then(({ slip: { id, advice } }) => {
      ADVICE_ID_ELEMENT.innerText = id
      ADVICE_TEXT_ELEMENT.innerText = advice
      console.log(id, advice)
    })
}

getAdvice()

ADVICE_BUTTON.addEventListener("click", () => getAdvice())
