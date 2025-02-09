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