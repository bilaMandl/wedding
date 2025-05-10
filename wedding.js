const startDate = new Date('2025-04-20'); // כ"ב ניסן
const endDate = new Date('2025-08-19');   // כ"ה אב
const emojis = ['😴', '😑', '😐', '🤨', '😏', '🙂', '😊', '😇', '🤗', '😝', '😃', '😄', '😁', '🤩', '🔥'];
const today = new Date();
let confettiTriggered = false;


const hebrewDates = [
  'כ"ב ניסן', 'כ"ג ניסן', 'כ"ד ניסן', 'כ"ה ניסן', 'כ"ו ניסן', 'כ"ז ניסן', 'כ"ח ניסן', 'כ"ט ניסן','ל\' ניסן',
  'א\' אייר', 'ב\' אייר', 'ג\' אייר', 'ד\' אייר', 'ה\' אייר', 'ו\' אייר', 'ז\' אייר', 'ח\' אייר', 'ט\' אייר', 'י\' אייר',
  'י"א אייר', 'י"ב אייר', 'י"ג אייר', 'י"ד אייר', 'ט"ו אייר', 'ט"ז אייר', 'י"ז אייר', 'י"ח אייר', 'י"ט אייר', 'כ\' אייר',
  'כ"א אייר', 'כ"ב אייר', 'כ"ג אייר', 'כ"ד אייר', 'כ"ה אייר', 'כ"ו אייר', 'כ"ז אייר', 'כ"ח אייר', 'כ"ט אייר',
  'א\' סיון', 'ב\' סיון', 'ג\' סיון', 'ד\' סיון', 'ה\' סיון', 'ו\' סיון', 'ז\' סיון', 'ח\' סיון', 'ט\' סיון', 'י\' סיון',
  'י"א סיון', 'י"ב סיון', 'י"ג סיון', 'י"ד סיון', 'ט"ו סיון', 'ט"ז סיון', 'י"ז סיון', 'י"ח סיון', 'י"ט סיון', 'כ\' סיון',
  'כ"א סיון', 'כ"ב סיון', 'כ"ג סיון', 'כ"ד סיון', 'כ"ה סיון', 'כ"ו סיון', 'כ"ז סיון', 'כ"ח סיון', 'כ"ט סיון','ל\' סיון',
  'א\' תמוז', 'ב\' תמוז', 'ג\' תמוז', 'ד\' תמוז', 'ה\' תמוז', 'ו\' תמוז', 'ז\' תמוז', 'ח\' תמוז', 'ט\' תמוז', 'י\' תמוז',
  'י"א תמוז', 'י"ב תמוז', 'י"ג תמוז', 'י"ד תמוז', 'ט"ו תמוז', 'ט"ז תמוז', 'י"ז תמוז', 'י"ח תמוז', 'י"ט תמוז', 'כ\' תמוז',
  'כ"א תמוז', 'כ"ב תמוז', 'כ"ג תמוז', 'כ"ד תמוז', 'כ"ה תמוז', 'כ"ו תמוז', 'כ"ז תמוז', 'כ"ח תמוז', 'כ"ט תמוז',
  'א\' אב', 'ב\' אב', 'ג\' אב', 'ד\' אב', 'ה\' אב', 'ו\' אב', 'ז\' אב', 'ח\' אב', 'ט\' אב', 'י\' אב',
  'י"א אב', 'י"ב אב', 'י"ג אב', 'י"ד אב', 'ט"ו אב', 'ט"ז אב', 'י"ז אב', 'י"ח אב', 'י"ט אב', 'כ\' אב',
  'כ"א אב', 'כ"ב אב', 'כ"ג אב', 'כ"ד אב', 'כ"ה אב'
];

const totalDays = hebrewDates.length;


function getHebrewDate(i) {
  return hebrewDates[i] || 'תאריך לא מוגדר';
}

function daysRemaining(i) {
  return totalDays - i;
}

for (let d = new Date(startDate), i = 0; d <= endDate; d.setDate(d.getDate() + 1), i++) {
  const isPast = d < today;
  const isToday = d.toDateString() === today.toDateString();
  const isFuture = d > today;

  const box = document.createElement('div');
  box.className = 'day-box';
  if (isToday) box.classList.add('today');
  else if (isPast) box.classList.add('past');
  else box.classList.add('future');

  const inner = document.createElement('div');
  inner.className = 'inner';

  const front = document.createElement('div');
  front.className = 'front';

  const right = document.createElement('div');
  right.className = 'right-half';

  const left = document.createElement('div');
  left.className = 'left-half';

  const hebrewDate = getHebrewDate(i);
  const remainingDays = daysRemaining(i);
  
  // חצי ימני - תאריך + אימוג'י
  left.innerHTML = `
    <div style="font-size: 1.2em; margin-bottom: 5px;">${hebrewDate}</div>
    <div style="font-size: 2.5em;">${emojis[Math.floor(i / 7) % emojis.length]}</div>
  `;
  
  // חצי שמאלי - מספר ימים
  right.innerHTML = `
      <div style="font-size: 1.2em; margin-bottom: 13px;">עוד-</div>
    <div class="days-left">${remainingDays - 1}</div>
  `;



  front.appendChild(right);
  front.appendChild(left);

  const back = document.createElement('div');
  back.className = 'back';
  back.innerText =remainingDays - 1;

  inner.appendChild(front);
  inner.appendChild(back);
  box.appendChild(inner);

  function showPopup(i) {
    const popup = document.getElementById('popup');
    const content = document.getElementById('popup-content');
    content.innerHTML = `
      <h2>${getHebrewDate(i)}</h2>
      <p>${messages[i] || "אין משפט מוגדר"}</p>
    `;
    popup.classList.remove('hidden');
    setTimeout(() => popup.classList.add('show'), 10);
  }
  
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('show');
    setTimeout(() => popup.classList.add('hidden'), 300);
  }
  
  box.addEventListener('click', () => {
      const openBox = document.querySelector('.day-box.open');
      if (openBox && openBox !== box) {
        openBox.classList.remove('open');
      }
    
      box.classList.toggle('open');
    if (isPast || isToday) {
      const wasActive = box.classList.contains('active');
      
      // סגור את כל שאר הקופסאות
      document.querySelectorAll('.day-box.active').forEach(el => {
        el.classList.remove('active', 'flip', 'open');
      });
  
      if (!wasActive) {
        // הכנס את המשפט לגב הריבוע
        back.innerHTML = `
          <div style="padding: 10px;">
            <h3 style="margin-bottom: 0.5em;">${getHebrewDate(i)}</h3>
            <p style="font-size: 1em;">${messages[i] || "אין משפט מוגדר"}</p>
          </div>
        `;
        box.classList.add('flip', 'active');
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });      }
    } else {
      alert('סבלנות... היום הזה עוד לא הגיע!');
    }
  });
  calendar.appendChild(box);
}
