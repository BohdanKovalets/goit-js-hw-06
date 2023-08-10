function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  number: 0,
  size: 30,
  allBoxes: [],
  inputEl: document.querySelector("input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${refs.size}px`;
    div.style.height = `${refs.size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.marginTop = `15px`;
    refs.size += 10;
    refs.allBoxes.push(div);
  }
};

function destroyBoxes() {
  refs.boxes.innerHTML = '';
  refs.size = 30;
  refs.allBoxes.splice(0, 999999999)
}

refs.inputEl.addEventListener('input', (event) => {
  refs.number = event.currentTarget.value;
})

refs.btnCreate.addEventListener("click", (event) => {
  createBoxes(refs.number);
  refs.boxes.append(...refs.allBoxes);
  refs.inputEl.value = '';
  refs.number = 0;
});

refs.btnDestroy.addEventListener("click", (event) => {
  destroyBoxes();
});