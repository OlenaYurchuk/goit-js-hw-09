
const form = document.querySelector('.feedback-form');
const textarea = form.elements.message;
const localStorageKey = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
const { email, message } = form.elements;
reloadPage();

form.addEventListener('input', () => {
    formData = { email: email.value.trim(), message: message.value.trim() };
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log({ email: email.value.trim(), message: message.value.trim() });

    if (email.value.trim() === '') {
        return alert('Please, enter your email');
    }

    if (message.value.trim() === '') {
        return alert('Please, write a message');
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