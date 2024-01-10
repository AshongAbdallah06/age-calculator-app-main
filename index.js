const checkButton = document.querySelector('.check-btn');

// Labels 
const dayLabel = document.querySelector('.dd-label');
const monthLabel = document.querySelector('.mm-label');
const yearLabel = document.querySelector('.yy-label');


// Inputs
const inputDay = document.querySelector('.dd-input');
const inputMonth = document.querySelector('.mm-input');
const inputYear = document.querySelector('.yy-input');

// Outputs
let yearResult = document.querySelector('.yy-result');
let monthResult = document.querySelector('.mm-result');
let dayResult = document.querySelector('.dd-result');

// Errors
let day_error = document.querySelector('.dd-error');
let month_error = document.querySelector('.mm-error');
let year_error = document.querySelector('.yy-error');

let isValid = false;


inputDay.addEventListener("input", e => {
    if (+inputDay.value > 31  || !+inputDay.value.match(/^[0-9]{1,2}$/)) {
        day_error.textContent = "Must be a valid day";
        inputDay.classList.add('error-border');
        dayLabel.classList.add('error-label');
        isValid = false;
        return
    } else {
        day_error.textContent = "";
        inputDay.classList.remove('error-border')
        dayLabel.classList.remove('error-label');
        isValid = true;
    }

    if (+inputDay.value === 0) {
        isValid = false;
        day_error.textContent = "This field is required";
        dayLabel.classList.add('error-label');
        isValid = false;
        return
    }
})

inputMonth.addEventListener("input", e => {
    if (+inputMonth.value > 12 || !+inputMonth.value.match(/^[0-9]{1,2}$/)) {
        month_error.textContent = "Must be a valid month";
        inputMonth.classList.add('error-border');
        monthLabel.classList.add('error-label');
        isValid = false;
        return
    } else {
        month_error.textContent = "";
        inputMonth.classList.remove('error-border')
        monthLabel.classList.remove('error-label');
        isValid = true;
    }

    if (+inputMonth.value === 0) {
        isValid = false;
        month_error.textContent = "This field is required";
        monthLabel.classList.add('error-label');
        isValid = false;
        return
    }
})

inputYear.addEventListener("input", e => {
    if (+inputYear.value > new Date().getFullYear() - 1 || !+inputYear.value.match(/^[0-9]{4}$/)) {
        year_error.textContent = "Must be a valid day";
        inputYear.classList.add('error-border');
        yearLabel.classList.add('error-label');
        isValid = false;
        return
    } else {
        year_error.textContent = "";
        inputYear.classList.remove('error-border');
        yearLabel.classList.remove('error-label');
        isValid = true;
    }

    if (+inputYear.value === 0) {
        isValid = false;
        year_error.textContent = "This field is required";
        yearLabel.classList.add('error-label');
        isValid = false;
        return
    }
})



checkButton.addEventListener('click', () => {
    if (isValid) {
        let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`

        let birthdayObj  = new Date(birthday)
        let ageDiffMill = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiffMill);
        let ageYears = ageDate.getFullYear() - 1970;
        let ageMonths = ageDate.getMonth();  // Months are zero-based
        let ageDays = ageDate.getDate();    // Get the day of the month

        console.log(ageYears)

        yearResult.textContent = `${ageYears}`;
        monthResult.textContent = ageMonths;
        dayResult.textContent = ageDays;

        console.log(birthday)
    }
})
