
const form = document.querySelector('.feedback-form');
const textarea = form.elements.message;
const localStorageKey = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(localStorage)) || {};
const { email, message } = form.elements;
reloadPage();

form.addEventListener('input', () => {
    formData = { email: email.value, message: message.value };
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log({ email: email.value, message: message.value });

    if (email.value === '' || message.value === '') {
        return alert('Please, fill in all required fields');
    }

    localStorage.removeItem(localStorageKey);
    event.currentTarget.reset();
    formData = {};
})

function reloadPage() {
    if (formData) {
        email.value = formData.email || '';
        message.value = formData.message || '';
    }
}