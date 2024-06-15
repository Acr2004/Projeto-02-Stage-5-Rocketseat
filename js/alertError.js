const AlertError = {
    alertError: document.querySelector('.error'),
    open() {
        AlertError.alertError.classList.add('open');
    },
    close() {
        AlertError.alertError.classList.remove('open');
    }
}

export default AlertError;