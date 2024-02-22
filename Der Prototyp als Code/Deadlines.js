const modal = document.getElementById('modal');
const setDeadlineBtn = document.getElementById('setDeadlineBtn1');
const saveDeadlineBtn = document.getElementById('saveDeadlineBtn');
const closeBtn = document.querySelector('.close');
const deadlineForm = document.getElementById('deadlineForm');
const savedDeadlinesContainer = document.getElementById('savedDeadlines');


let deadlines = [];

setDeadlineBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
saveDeadlineBtn.addEventListener('click', saveDeadline);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function saveDeadline() {
  const title = document.getElementById('title').value;
  const course = document.getElementById('course').value;
  const description = document.getElementById('description').value;
  const startDateInput = document.getElementById('startDate').value;
  const endDateInput = document.getElementById('endDate').value;

  if (!title || !course || !description || !startDateInput || !endDateInput) {
    alert('Alle Felder müssen ausgefüllt sein.');
    return;
  }

  const startDate = new Date(startDateInput).getTime();
  const endDate = new Date(endDateInput).getTime();

  if (isNaN(startDate) || isNaN(endDate)) {
    alert('Ungültiges Datum. Bitte verwenden Sie das Format "YYYY-MM-DDTHH:mm".');
    return;
  }

  if (endDate <= startDate) {
    alert('Das Enddatum muss nach dem Startdatum liegen.');
    return;
  }

  
  const deadline = {
    title,
    course,
    description,
    startDate,
    endDate
  };

 
  deadlines.push(deadline);

 
  sortDeadlines();


  updateDisplay();

 
  closeModal();
}

function sortDeadlines() {
  deadlines.sort((a, b) => a.endDate - b.endDate);
}

function updateDisplay() {
 
  savedDeadlinesContainer.innerHTML = '';


  deadlines.forEach(deadline => {
    createDeadlineBox(deadline.title, deadline.course, deadline.description, deadline.startDate, deadline.endDate);
  });
}

function createDeadlineBox(title, course, description, startDate, endDate) {
  const deadlineBox = document.createElement('div');
  deadlineBox.classList.add('deadline-box');

  const deadlineTitle = document.createElement('h3');
  deadlineTitle.textContent = title;

  const deadlineCourse = document.createElement('p');
  deadlineCourse.textContent = `Kurs: ${course}`;

  const deadlineDescription = document.createElement('p');
  deadlineDescription.textContent = `Beschreibung: ${description}`;

  const countdownContainer = document.createElement('div');
  countdownContainer.classList.add('countdown');

  const timeLeftContainer = document.createElement('div');
  countdownContainer.appendChild(timeLeftContainer);
  deadlineBox.appendChild(deadlineTitle);
  deadlineBox.appendChild(deadlineCourse);
  deadlineBox.appendChild(deadlineDescription);
  deadlineBox.appendChild(countdownContainer);

  savedDeadlinesContainer.appendChild(deadlineBox);

  startCountdown(endDate, timeLeftContainer);
}

function startCountdown(endDate, timeLeftContainer) {
  updateCountdown(endDate, timeLeftContainer);
  setInterval(() => {
    updateCountdown(endDate, timeLeftContainer);
  }, 1000);
}



function updateCountdown(endDate, timeLeftContainer) {
  const now = new Date().getTime();
  const timeRemaining = endDate - now;

  if (timeRemaining <= 0) {
    timeLeftContainer.textContent = 'Deadline abgelaufen!';
    timeLeftContainer.parentNode.style.backgroundColor = 'black';
  } else if (timeRemaining <= 24 * 60 * 60 * 1000) {
    const hours = Math.floor((timeRemaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);
    timeLeftContainer.textContent = `Verbleibende Zeit: ${hours}h ${minutes}m ${seconds}s`;
    timeLeftContainer.parentNode.style.backgroundColor = 'red';
  } else if (timeRemaining <= 3 * 24 * 60 * 60 * 1000) {
    const days = Math.floor(timeRemaining / (24 * 60 * 60 * 1000));
    const hours = Math.floor((timeRemaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);
    timeLeftContainer.textContent = `Verbleibende Zeit: ${days} Tage ${hours}h ${minutes}m ${seconds}s`;
    timeLeftContainer.parentNode.style.backgroundColor = 'orange';
  } else {
    const days = Math.floor(timeRemaining / (24 * 60 * 60 * 1000));
    const hours = Math.floor((timeRemaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);
    timeLeftContainer.textContent = `Verbleibende Zeit: ${days} Tage ${hours}h ${minutes}m ${seconds}s`;
    timeLeftContainer.parentNode.style.backgroundColor = 'green';
  }
}