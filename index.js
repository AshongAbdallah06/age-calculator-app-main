const checkButton = document.querySelector('.check-btn');
const day = document.querySelector('.dd-input');
const month = document.querySelector('.mm-input');
const year = document.querySelector('.yy-input');
let yearResult = document.querySelector('.yy-result');
let monthResult = document.querySelector('.mm-result');
let dayResult = document.querySelector('.dd-result');
let dayError = document.querySelector('.dd-error');
let monthError = document.querySelector('.mm-error');
let yearError = document.querySelector('.yy-error');

function validateField(value, max, errorContainer, errorMessage) {
    if (value === '') {
        errorContainer.innerHTML = 'This field is required';
        return false;
    } else if (Number(value) > max) {
        errorContainer.innerHTML = errorMessage;
        return false;
    } else {
        errorContainer.innerHTML = '';
        return true;
    }
}

function checkInputs() {
    const dayIsValid = validateField(day.value, 30, dayError, 'Must be a valid day');
    const monthIsValid = validateField(month.value, 12, monthError, 'Must be a valid month');
    const yearIsValid = validateField(year.value, 2024, yearError, 'Must be in the past');

    if (dayIsValid) {
        document.querySelector('.dd-label').classList.remove('error-label');
        day.classList.remove('error-border');
        document.querySelector('.dd-error').style.opacity = '0';
        dayResult.innerHTML = 2 + Number(day.value);
    } else {
        document.querySelector('.dd-label').classList.add('error-label');
        day.classList.add('error-border');
        document.querySelector('.dd-error').style.opacity = '1';
    }

    if (monthIsValid) {
        document.querySelector('.mm-label').classList.remove('error-label');
        month.classList.remove('error-border');
        document.querySelector('.mm-error').style.opacity = '0';
        monthResult.innerHTML = 12 - month.value;
    } else {
        document.querySelector('.mm-label').classList.add('error-label');
        month.classList.add('error-border');
        document.querySelector('.mm-error').style.opacity = '1';
    }

    if (yearIsValid) {
        document.querySelector('.yy-label').classList.remove('error-label');
        year.classList.remove('error-border');
        document.querySelector('.yy-error').style.opacity = '0';
        yearResult.innerHTML = 2024 - year.value;
    } else {
        document.querySelector('.yy-label').classList.add('error-label');
        year.classList.add('error-border');
        document.querySelector('.yy-error').style.opacity = '1';
    }
}

checkButton.addEventListener('click', () => {
    checkInputs();
});
