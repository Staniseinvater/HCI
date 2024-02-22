import { getSubjectsForSemester } from './stundenplaene.js';



function initializeTimetableData() {
  // Initialisiere den Stundenplan mit leeren Arrays für jeden Wochentag
  return {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: []
  };
}


// Hilfsfunktion zum Sortieren der Zeiten
function sortTimes(a, b) {
  return a.localeCompare(b);
}





// Funktion zum Finden oder Erstellen der richtigen Zeile im Stundenplan, basierend auf der angegebenen Zeit
function findOrCreateTimeRow(timetableBody, time) {
  // Suchen Sie zuerst nach einer bestehenden Zeile mit der gleichen Zeit
  let existingRow = Array.from(timetableBody.rows).find(row => row.cells[0].textContent.trim() === time);
  
  if (existingRow) {
    return existingRow; // Verwenden Sie die bestehende Zeile, wenn sie gefunden wurde
  }
  
  // Wenn keine bestehende Zeile gefunden wurde, erstellen Sie eine neue und fügen Sie sie in der richtigen Reihenfolge ein
  let newRow = timetableBody.insertRow();
  let timeCell = newRow.insertCell(0);
  timeCell.textContent = time;

  // Füllen Sie den Rest der Zeile mit leeren Zellen für jeden Wochentag aus
  for (let i = 1; i <= 5; i++) {
    newRow.insertCell();
  }

  // Sortieren Sie alle Zeilen basierend auf der Zeit, um sicherzustellen, dass sie in der richtigen Reihenfolge sind
  let sortedRows = Array.from(timetableBody.rows).sort((rowA, rowB) => sortTimes(rowA.cells[0].textContent.trim(), rowB.cells[0].textContent.trim()));
  
  // Ersetzen Sie die bestehenden Zeilen im Stundenplan durch die sortierten Zeilen
  sortedRows.forEach((row, index) => timetableBody.insertBefore(row, timetableBody.rows[index]));
  
  return newRow; // Geben Sie die neu erstellte Zeile zurück
}










// Funktion zum Hinzufügen von Veranstaltungen zum Stundenplan
function addToSchedule(selectedDay, selectedTime, selectedSubjects) {
  console.log('Adding to schedule:', selectedDay, selectedTime, selectedSubjects);

  var timetableContainer = document.getElementById('myTimetable');
  if (!timetableContainer) {
    console.error("Element with ID 'myTimetable' not found.");
    return;
  }

  var timetableBody = timetableContainer.querySelector('tbody');
  var selectedTimeRow = findOrCreateTimeRow(timetableBody, selectedTime);

  var dayIndex = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].indexOf(selectedDay);
  var dayCell = selectedTimeRow.cells[dayIndex + 1];

  // Überprüfen, ob das Fach bereits hinzugefügt wurde
  if (dayCell.innerHTML.includes(selectedSubjects[0].courses.join(', '))) {
    alert('Diese Veranstaltung wurde bereits hinzugefügt.');
    return;
  }

  // Füge das Fach hinzu, wenn es noch nicht vorhanden ist
  selectedSubjects.forEach((subject) => {
    var subjectContainer = document.createElement('div');
    subjectContainer.classList.add('subject-container');

    var subjectSpan = document.createElement('span');
    subjectSpan.textContent = subject.courses.join(', ');
    subjectContainer.appendChild(subjectSpan);

    dayCell.appendChild(subjectContainer);
  });

  console.log('Updated Timetable:', timetableContainer.innerHTML);
}



function changeSemester() {
  var selectedSemester = document.getElementById('semesterDropdown').value;
  console.log('Selected Semester:', selectedSemester);

  var timetableContainer = document.getElementById('myTimetable');
  timetableContainer.classList.remove('hidden');

  var timetableBody = document.querySelector('#timetable tbody');
  timetableBody.innerHTML = '';

  var subjects = getSubjectsForSemester(selectedSemester);

  subjects.sort(function(a, b) {
    var timeComparison = a.time.localeCompare(b.time);
    if (timeComparison === 0) {
      return a.days[0].localeCompare(b.days[0]);
    }
    return timeComparison;
  });

 
  
  var timeGroups = {};
  for (var i = 0; i < subjects.length; i++) {
    var key = subjects[i].time;
    if (!timeGroups[key]) {
      timeGroups[key] = { subjects: [] };
    }
    timeGroups[key].subjects.push(subjects[i]);
  }

  for (var key in timeGroups) {
    var timeGroup = timeGroups[key];
    var row = timetableBody.insertRow();
    var timeCell = row.insertCell(0);
    timeCell.innerHTML = key;
  
    var daysOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  
    for (var j = 0; j < daysOrder.length; j++) {
      var currentDay = daysOrder[j];
      var dayCell = row.insertCell();
  
      var subjectsForDay = timeGroup.subjects.filter(s => s.days[0] === currentDay);
  
      subjectsForDay.forEach(function(subject) {
        var container = document.createElement('div');
        container.classList.add('subject-container');
  
        var span = document.createElement('span');
        span.innerHTML = subject.courses.join(', ');
        container.appendChild(span);
  
        var buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
  
        var button = document.createElement('button');
        button.innerHTML = '+';
        button.onclick = (function (subjectDay, subjectTime, subjectCourse) {
          return function () {
            console.log('Button clicked. Day:', subjectDay, 'Time:', subjectTime, 'Course:', subjectCourse);
            addToSchedule(subjectDay, subjectTime, [subject]);
          };
        })(currentDay, key, subject);
  
        buttonContainer.appendChild(button);
        container.appendChild(buttonContainer);
  
        dayCell.appendChild(container);
      });
  
    }
  }
}
window.changeSemester = changeSemester;

