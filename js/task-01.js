
const childsEl = document.querySelectorAll('.item')

console.log(`Number of categories: ${childsEl.length}`);

childsEl.forEach((el) => {
    const firstChild = el.firstElementChild.textContent;
    
    console.log(`Category: ${firstChild}`);

    const lastChild = el.querySelectorAll('li').length

    console.log(`Elements: ${lastChild}`);
});