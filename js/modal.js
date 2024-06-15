const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal-wrapper h2'),
    closeBtn: document.querySelector('.modal-wrapper button'),
    open() {
        Modal.wrapper.classList.add('open');
    },
    close() {
        Modal.wrapper.classList.remove('open');
    }
}

Modal.closeBtn.onclick = () => Modal.close();

window.onkeydown = (event) => {
    if(event.key == "Escape") {
        Modal.close();
    }
}

export default Modal;