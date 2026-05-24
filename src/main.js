// ============================================
// ПЕРЕКЛЮЧЕНИЕ ТЕМ
// ============================================

export function setTheme(theme, btn) {
  document.body.setAttribute('data-theme', theme);
  document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// Делаем функцию глобальной — она вызывается из onclick в HTML
window.setTheme = setTheme;


// ============================================
// ТЕРМИНАЛ — ТЕКСТ КОТОРЫЙ ПЕЧАТАЕТСЯ
// Замени на свой текст!
// ============================================

const lines = [
  { type: 'prompt',    text: '$ whoami' },
  { type: 'output',    text: 'Привет! Я сам в шоке что можно такую штуку сделать' },
  { type: 'highlight', text: 'это невероятно красиво' },
  { type: 'output',    text: '' },
  { type: 'prompt',    text: 'topitop.txt' },
  { type: 'output',    text: '→ Спасибо' },
  { type: 'output',    text: '→ за' },
  { type: 'output',    text: '→ просмотры' },
  { type: 'output',    text: '' },
  { type: 'prompt',    text: '$ echo "Готов к новым проектам!"' },
  { type: 'highlight', text: 'Готов к новым проектам! 🚀' },
];


// ============================================
// ЛОГИКА ТЕРМИНАЛА
// ============================================

let terminalOpen = false;
let typeInterval = null;

export function toggleTerminal() {
  const terminal = document.getElementById('terminal');
  const btn = document.getElementById('terminal-btn-text');
  terminalOpen = !terminalOpen;

  if (terminalOpen) {
    terminal.classList.add('open');
    btn.textContent = '$ Закрыть терминал';
    startTypewriter();
  } else {
    terminal.classList.remove('open');
    btn.textContent = '$ Запустить меня';
    if (typeInterval) clearTimeout(typeInterval);
  }
}

// Делаем функцию глобальной — она вызывается из onclick в HTML
window.toggleTerminal = toggleTerminal;


function startTypewriter() {
  const body = document.getElementById('terminal-body');
  body.innerHTML = '<span class="cursor" id="t-cursor"></span>';

  let lineIndex = 0;
  let charIndex = 0;
  let currentEl = null;

  function typeNext() {
    if (lineIndex >= lines.length) return;

    const line = lines[lineIndex];

    // Начало новой строки — создаём элемент
    if (charIndex === 0) {
      const cursor = document.getElementById('t-cursor');
      if (cursor) cursor.remove();

      currentEl = document.createElement('div');
      currentEl.className = line.type;
      body.appendChild(currentEl);

      // Пустая строка — сразу переходим к следующей
      if (!line.text) {
        lineIndex++;
        charIndex = 0;
        typeInterval = setTimeout(typeNext, 60);
        return;
      }
    }

    // Печатаем по одному символу
    if (charIndex < line.text.length) {
      currentEl.textContent += line.text[charIndex];
      charIndex++;
      typeInterval = setTimeout(typeNext, 28);
    } else {
      // Строка закончилась — пауза перед следующей
      lineIndex++;
      charIndex = 0;

      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      cursor.id = 't-cursor';
      body.appendChild(cursor);

      const delay = line.type === 'prompt' ? 200 : 80;
      typeInterval = setTimeout(typeNext, delay);
    }
  }

  typeNext();
}
