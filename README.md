# CV Lab Starter

Стартер для лабораторной работы: персональный CV → CI/CD → GitHub Pages.

> **TODO студент:** удали этот блок. Заполни README своим — про себя, про CV, и **обязательный раздел "Vibe coding log"** (см. внизу).

## Стек

- [Vite](https://vitejs.dev/) — dev server + бандлер
- Vanilla JS + HTML + CSS (можешь добавить TS / фреймворк — на свой страх и риск, CI/lint придётся подкрутить)
- ESLint 9 (flat config) — линтер
- GitHub Actions — CI + CD

## Локальный запуск

```bash
npm install
npm run dev      # dev server на http://localhost:5173
npm run lint     # проверить код
npm run build    # собрать в dist/
npm run preview  # посмотреть прод-сборку локально
```

## Структура

```
.
├── .github/workflows/
│   ├── ci.yml        # PR → lint + build
│   └── deploy.yml    # main → GitHub Pages
├── src/
│   └── main.js       # JS-точка входа
├── index.html        # CV здесь
├── style.css
├── eslint.config.js
├── vite.config.js
└── package.json
```

## Что делать

1. Форкни template или используй "Use this template".
2. Сделай репо публичным.
3. **Settings → Pages → Source: GitHub Actions** (важно, без этого деплой не пройдёт).
4. Заведи ветку `feature/my-cv`, перепиши `index.html` / `style.css` под свой CV.
5. Открой PR в `main`. Дождись зелёного CI.
6. Merge. Смотри Actions — должен запуститься deploy.
7. Открой `https://<username>.github.io/<repo>/` — твой CV в проде.

Подробнее — `STUDENT_GUIDE.md`.

## Vibe coding log

- **LLM-ассистент:** Claude
- **2–3 ключевых промпта:**
  1. Сделай мне красивый яркий стильный CV-сайт на чистом HTML/CSS/JS
(без фреймворков). Требования: имя и контакты, summary, минимум 2 
проекта/опыта с тегами технологий, блок скиллов, один нестандартный 
элемент (переключатель тем, анимация, easter egg — на твой выбор). 
Раздели на 3 файла: index.html, style.css, src/main.js.
  2. Раздели этот одностраничный HTML на 3 файла по структуре проекта:
index.html (только разметка), style.css (все стили и CSS-переменные
для тем), src/main.js (вся логика на JS, функции экспортировать и 
вешать на window для вызова из HTML).
- **Что правил(а) руками после генерации:** подстроил всё для себя, убрал ненужные отделы, добавил души в цифровой мир.

## Live URL

> **TODO студент:** https://ivanchesnakov.github.io/supervibe/
