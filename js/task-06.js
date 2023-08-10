

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener('blur', (event) => {
    const value = event.currentTarget.value.length;
    const currentNumber = Number(event.currentTarget.dataset.length);
    if (value === currentNumber) {
      inputEl.classList.remove("invalid");
      inputEl.classList.add("valid");
      return;
    }
        inputEl.classList.add('invalid')
})