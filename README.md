# Мастер Фурнитура — Опт (лендинг)

Production-сборка B2B-лендинга «Мастер Фурнитура». React 18 без сборщика, JSX прекомпилирован, грузится с CDN.

## Структура

- `index.html` — корневая точка входа
- `wholesale.html` — alias того же лендинга (для совместимости)
- `tokens.css` — дизайн-токены (цвета, шрифты, hex-утилиты)
- `components.js` — shared компоненты (`Logo`, `Header`, `Footer`)
- `screen-wholesale.js` — собственно страница `<WholesalePage />`
- `logo-icon*.png` — фавикон + логотип

## Локальный запуск

```bash
python -m http.server 8765
# открыть http://127.0.0.1:8765/
```

Любой статический сервер подойдёт — `npx serve`, `live-server` и т.п.

## Деплой на GitHub Pages

1. Создай пустой репозиторий на github.com (без README и .gitignore).
2. В терминале из этой папки:

   ```bash
   git remote add origin https://github.com/<your-username>/<repo>.git
   git branch -M main
   git push -u origin main
   ```

3. В репозитории: `Settings → Pages → Build and deployment → Source = Deploy from a branch → Branch = main / (root)`.
4. Через 1–2 минуты сайт будет на `https://<your-username>.github.io/<repo>/`.

Файл `.nojekyll` уже есть — Jekyll не будет вмешиваться.

## Изменить контент

Все тексты (заголовки, тарифы, FAQ, кейсы) живут в `screen-wholesale.js` — массивы `WHOLESALE_CATS`, `TIERS`, `STEPS`, `BENEFITS`, `CASES`, `FAQ_ITEMS`.
