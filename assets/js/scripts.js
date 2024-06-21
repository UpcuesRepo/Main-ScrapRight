// SHOW PASSWORD
function showPassword() {
  var x = document.getElementsByClassName("myInput");
  if (x.name === "password") {
    x.type = "text";
  } else {
    x.name = "password";
  }
}

// SHOW HIDE CONTENT
function showContent() {
  var x = document.getElementById("myBox");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



$('#jstree,#jstree2').jstree({
  'plugins': ['search', 'checkbox', 'wholerow'],
  'core': {
    'data': [
      {'id': '1', 'parent': '#', 'text': 'Greater London'},
      {'id': '11', 'parent': '1', 'text': 'Goldsmiths College'},
      {'id': '12', 'parent': '1', 'text': 'King\'s College London'},
      {'id': '13', 'parent': '1', 'text': 'University College London'},
      {'id': '14', 'parent': '1', 'text': 'University of Westminster'},
      {'id': '2', 'parent': '#', 'text': 'North East'},
      {'id': '21', 'parent': '2', 'text': 'University of Durham'},
      {'id': '22', 'parent': '2', 'text': 'University of Teeside'},
      {'id': '3', 'parent': '#', 'text': 'North West'},
      {'id': '31', 'parent': '3', 'text': 'Lancaster University'},
      {'id': '32', 'parent': '3', 'text': 'University of Liverpool'},
      {'id': '33', 'parent': '3', 'text': 'University of Manchester'},
      {'id': '34', 'parent': '3', 'text': 'Manchester Metropolitan University'},
      {'id': '4', 'parent': '#', 'text': 'South West'},
      {'id': '41', 'parent': '4', 'text': 'University of Bath'},
      {'id': '42', 'parent': '4', 'text': 'University of Bristol'},
      {'id': '43', 'parent': '4', 'text': 'University of Exeter'},
      {'id': '44', 'parent': '4', 'text': 'University of Plymouth'},
      {'id': '5', 'parent': '#', 'text': 'Yorkshire and Humberside'},
      {'id': '51', 'parent': '5', 'text': 'University of Hull'},
      {'id': '52', 'parent': '5', 'text': 'University of Leeds'},
      {'id': '53', 'parent': '5', 'text': 'University of York'},
    ],
    'animation': false,
    'expand_selected_onload': true,
    'themes': {
      'icons': false,
      
    }

    
  },
  
})


$('#jstree,#jstree2').on('changed.jstree', function (e, data) {
  var objects = data.instance.get_selected(true)
  var leaves = $.grep(objects, function (o) { return data.instance.is_leaf(o) })
  var list = $('#output')
  list.empty()
  $.each(leaves, function (i, o) {
    $('<li/>').text(o.text).appendTo(list)
  })
})










// BROWSE FILES

$('#file-upload').change(function() {
  var filepath = this.value;
  var m = filepath.match(/([^\/\\]+)$/);
  var filename = m[1];
  $('#filename').text(filename);
});

$('.file-upload').change(function() {
  var filepath = this.value;
  var m = filepath.match(/([^\/\\]+)$/);
  var filename = m[1];
  $('.filename').text(filename);
});



$(document).ready(function () {
  ("use strict");

    //=======================
    //CHECkBOX
    $(".add-after").after('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0627 7.33363C16.3574 7.00445 16.3295 6.49869 16.0003 6.20398C15.6711 5.90927 15.1653 5.93721 14.8706 6.26639L11.2769 10.2804C10.5486 11.0938 10.0582 11.6387 9.63895 11.9911C9.23954 12.3268 9.00494 12.4 8.8 12.4C8.59507 12.4 8.36047 12.3268 7.96105 11.9911C7.54176 11.6387 7.05136 11.0938 6.32315 10.2804L5.39603 9.2449C5.10132 8.91573 4.59556 8.88779 4.26638 9.1825C3.93721 9.47721 3.90927 9.98297 4.20398 10.3121L5.17073 11.3919C5.84896 12.1495 6.41467 12.7815 6.93158 13.2159C7.47839 13.6755 8.06819 14 8.8 14C9.53181 14 10.1216 13.6755 10.6684 13.2159C11.1853 12.7815 11.751 12.1496 12.4293 11.392L16.0627 7.33363Z" fill="white"/></svg>');

    //=======================
    //RADIO
      $(".add-after2").after('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" rx="5" transform="matrix(1 0 0 -1 5 15)" fill="#3384D8"/></svg>');

    // MOBILE HEADER

    const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'))
    const backLink = `<li class="nav-item">
      <a class="nav-link nav-back-link" href="javascript:;">
      <span class="material-symbols-rounded">chevron_left</span>
        Back
      </a>
    </li>`

    navExpand.forEach(item => {
      item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink)
      item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
      item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'))
    })

    //=======================
    // BOOTSTRAP SELECT
    $('.selectpicker').selectpicker();
    $('.selectpicker3').selectpicker();
    $('.selectpicker2').selectpicker();
    
    // =============================
    // TREE VIEW PLUGIN

    

});



// CALENDER
/* const holidays = [
 
];
const calendar = document.querySelector("#calendar");
const monthBanner = document.querySelector("#month");
let navigation = 0;
let clicked = null;
let events = localStorage.getItem("events") ? JSON.parse(localStorage.getItem("events")) : [];
const weekdays = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];

function loadCalendar() {
  const dt = new Date();

  if (navigation != 0) {
    dt.setMonth(new Date().getMonth() + navigation);
  }
  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();
  monthBanner.innerText = `${dt.toLocaleDateString("en-us", {
    month: "long",
  })} ${year}`;
  calendar.innerHTML = "";
  const dayInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayofMonth = new Date(year, month, 1);
  const dateText = firstDayofMonth.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const dayString = dateText.split(", ")[0];
  const emptyDays = weekdays.indexOf(dayString);

  for (let i = 1; i <= dayInMonth + emptyDays; i++) {
    const dayBox = document.createElement("div");
    dayBox.classList.add("day");
    const monthVal = month + 1 < 10 ? "0" + (month + 1) : month + 1;
    const dateVal = i - emptyDays < 10 ? "0" + (i - emptyDays) : i - emptyDays;
    const dateText = `${dateVal}-${monthVal}-${year}`;
    if (i > emptyDays) {
      dayBox.innerText = i - emptyDays;
      //Event Day
      const eventOfTheDay = events.find((e) => e.date == dateText);
      //Holiday
      const holidayOfTheDay = holidays.find((e) => e.hdate == dateText);

      if (i - emptyDays === day && navigation == 0) {
        dayBox.id = "currentDay";
      }

      if (eventOfTheDay) {
        const eventDiv = document.createElement("div");
        eventDiv.classList.add("event");
        eventDiv.innerText = eventOfTheDay.title;
        dayBox.appendChild(eventDiv);
      }
      if (holidayOfTheDay) {
        const eventDiv = document.createElement("div");
        eventDiv.classList.add("event");
        eventDiv.classList.add("holiday");
        eventDiv.innerText = holidayOfTheDay.holiday;
        dayBox.appendChild(eventDiv);
      }

      dayBox.addEventListener("click", () => {
        showModal(dateText);
      });
    } else {
      dayBox.classList.add("plain");
    }
    calendar.append(dayBox);
  }
}
function buttons() {
  const btnBack = document.querySelector("#btnBack");
  const btnNext = document.querySelector("#btnNext");
  const btnDelete = document.querySelector("#btnDelete");
  const btnSave = document.querySelector("#btnSave");
  const closeButtons = document.querySelectorAll(".btnClose");
  const txtTitle = document.querySelector("#txtTitle");

  btnBack.addEventListener("click", () => {
    navigation--;
    loadCalendar();
  });
  btnNext.addEventListener("click", () => {
    navigation++;
    loadCalendar();
  });
  modal.addEventListener("click", closeModal);
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", closeModal);
  });
  btnDelete.addEventListener("click", function () {
    events = events.filter((e) => e.date !== clicked);
    localStorage.setItem("events", JSON.stringify(events));
    closeModal();
  });

  btnSave.addEventListener("click", function () {
    if (txtTitle.value) {
      txtTitle.classList.remove("error");
      events.push({
        date: clicked,
        title: txtTitle.value.trim(),
      });
      txtTitle.value = "";
      localStorage.setItem("events", JSON.stringify(events));
      closeModal();
    } else {
      txtTitle.classList.add("error");
    }
  });
}

const modal = document.querySelector("#modal");
const viewEventForm = document.querySelector("#viewEvent");
const addEventForm = document.querySelector("#addEvent");

function showModal(dateText) {
  clicked = dateText;
  const eventOfTheDay = events.find((e) => e.date == dateText);
  if (eventOfTheDay) {
    //Event already Preset
    document.querySelector("#eventText").innerText = eventOfTheDay.title;
    viewEventForm.style.display = "block";
  } else {
    //Add new Event
    addEventForm.style.display = "block";
  }
  modal.style.display = "block";
}

//Close Modal
function closeModal() {
  viewEventForm.style.display = "none";
  addEventForm.style.display = "none";
  modal.style.display = "none";
  clicked = null;
  loadCalendar();
}

buttons();
loadCalendar();
*/

$('.datatable').DataTable({
  responsive: false,
  search:true,
  filter:false,
  length:false,
  paginate:false,
  info:false,
});

