
const inputField = document.getElementById('inputField');
const submitButton = document.getElementById('submitButton');
const divValue = document.getElementById('value');


submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const inputValue = inputField.value.trim();
    divValue.innerHTML = '';
    
    const paragraph = document.createElement('p');
    paragraph.textContent =  inputValue;
    divValue.appendChild(paragraph);
});


