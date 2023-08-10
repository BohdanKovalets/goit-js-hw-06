const refs = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
  };
  
  refs.input.addEventListener('input', (event) => {
      const evCurrentEl = event.currentTarget.value
  
      if (evCurrentEl === '') {
          refs.output.textContent = 'Anonymous'
          return
      } 
          refs.output.textContent = evCurrentEl;
      
      
  })