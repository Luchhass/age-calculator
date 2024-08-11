let ageForms = document.querySelector('.form-group');
let ageResults = document.querySelector('.age-results');

let yearResult = document.querySelector('.year-result');
let monthResult = document.querySelector('.month-result');
let dayResult = document.querySelector('.day-result');

let ageDatas = [];

function handleSubmitForm(e) {
    e.preventDefault();

    let formdata = new FormData(ageForms);
    let formobj = Object.fromEntries(formdata);
    ageDatas.push(formobj)

    ageForms.reset();
    renderSubmitForm();
    save();
}    

ageForms.addEventListener('submit', handleSubmitForm);

function save() {
    localStorage.ageDatas = JSON.stringify(ageDatas);
}    

let currentDate = new Date();

let yearDate = currentDate.getFullYear();
let monthDate = currentDate.getMonth() + 1;
let dayDate = currentDate.getDate();

function renderSubmitForm() {
    yearResult.innerHTML = '';
    monthResult.innerHTML = '';
    dayResult.innerHTML = '';

    for(let i = 0; i < ageDatas.length; i++) {
        yearResult.innerHTML = `<h1> <span>${Number(yearDate) - (ageDatas[i].year)}</span> years </h1>`
        monthResult.innerHTML = `<h1> <span>${Number(monthDate) - (ageDatas[i].month)}</span> months </h1>`
        dayResult.innerHTML = `<h1> <span>${Number(dayDate) - (ageDatas[i].day)}</span> days </h1>`
    }
}


