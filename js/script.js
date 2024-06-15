import Modal from './modal.js';
import AlertError from './alertError.js';
import { isNotNumber, calculateIMC } from './utils.js';

const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');
const form = document.querySelector('form');

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();

form.onsubmit = (event) => {
    event.preventDefault();
    
    const weight = inputWeight.value;
    const height = inputHeight.value;

    if(isNotNumber(weight) || isNotNumber(height)) {
        AlertError.open();
        return;
    }

    AlertError.close();

    const finalResult = calculateIMC(weight, height);

    displayResultMessage(finalResult);
}

function displayResultMessage(finalResult) {
    const imcMessage = `Seu IMC é de ${finalResult}`;
    
    Modal.message.innerText = imcMessage;
    Modal.open();
}