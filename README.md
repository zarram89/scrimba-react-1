# React + Vite + Scrimba
---
## Установка проекта React на Vite

Устанавливаем Vite
`npm create vite@latest`

После установки переходим в проект, подтягиваем зависимости и запускаем режим разработки
```bash
cd scrimba-react-1
npm install
npm run dev
```

Базовая разметка React c подключением createRoot и отрисовкой <App /> компонента и подключением стилей
```jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

# Базовая разметка для readme.md

# Заголовок уровня 1

## Заголовок уровня 2

Это **жирный текст**, а это *курсив*. Также можно ~~зачеркнуть текст~~.

### Списки

- Ненумерованный список:
  - Пункт 1
  - Пункт 2

1. Нумерованный список:
   1. Пункт 1
   2. Пункт 2

### Код

Однострочный код: `console.log("Hello, world!")`.

Многострочный код:

```javascript
function hello() {
  console.log("Hello, world!");
}