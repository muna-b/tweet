window.addEventListener("DOMContentLoaded", () => {
    const inputavatar = document.querySelector('#input-avatar');
    const formContainer = document.querySelector('#form-container');

    formContainer.addEventListener('click', () => {
        inputavatar.click()
    })

    inputavatar.addEventListener('change', () => {
        formContainer.submit()
    })

});