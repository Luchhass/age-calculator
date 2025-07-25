let ageForms = document.querySelector(".form-group");
let ageResults = document.querySelector(".age-results");

let yearResult = document.querySelector(".year-result");
let monthResult = document.querySelector(".month-result");
let dayResult = document.querySelector(".day-result");

let ageDatas = [];

// Form submit handler
function handleSubmitForm(e) {
  e.preventDefault();

  const day = ageForms.querySelector("#day").value.trim();
  const month = ageForms.querySelector("#month").value.trim();
  const year = ageForms.querySelector("#year").value.trim();

  // Inputlar boşsa uyar ve form gönderimini engelle
  if (!day || !month || !year) {
    alert("Please fill all the fields before submitting.");
    return;
  }

  // Tarih geçerli mi basit kontrol (opsiyonel)
  if (
    isNaN(day) ||
    isNaN(month) ||
    isNaN(year) ||
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12 ||
    year < 1900 ||
    year > new Date().getFullYear()
  ) {
    alert("Please enter a valid date.");
    return;
  }

  let formdata = new FormData(ageForms);
  let formobj = Object.fromEntries(formdata);
  ageDatas.push(formobj);

  ageForms.reset();
  renderSubmitForm();
  save();
}

ageForms.addEventListener("submit", handleSubmitForm);

function save() {
  localStorage.ageDatas = JSON.stringify(ageDatas);
}

let currentDate = new Date();

let yearDate = currentDate.getFullYear();
let monthDate = currentDate.getMonth() + 1;
let dayDate = currentDate.getDate();

function renderSubmitForm() {
  yearResult.innerHTML = "";
  monthResult.innerHTML = "";
  dayResult.innerHTML = "";

  for (let i = 0; i < ageDatas.length; i++) {
    const birthYear = Number(ageDatas[i].year);
    const birthMonth = Number(ageDatas[i].month);
    const birthDay = Number(ageDatas[i].day);

    // Yaş hesaplama fonksiyonu (basit)
    let years = yearDate - birthYear;
    let months = monthDate - birthMonth;
    let days = dayDate - birthDay;

    if (days < 0) {
      months--;
      days += 30; // Yaklaşık olarak
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    yearResult.innerHTML = `<h1><span>${years}</span> years</h1>`;
    monthResult.innerHTML = `<h1><span>${months}</span> months</h1>`;
    dayResult.innerHTML = `<h1><span>${days}</span> days</h1>`;
  }
}
