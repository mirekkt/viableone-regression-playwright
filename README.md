# Playwright regression tests 


## Pokryté oblasti

- Navigace (menu → správná URL)
- Kontaktní formulář (validace, modal)
- Přepínač jazyka CZ/EN

## Setup

1. Nainstalovat závislosti:
```bash
   npm install
   npx playwright install
```

2. Zkopírovat `.env.example` do `.env`:
```bash
   cp .env.example .env
```

3. Vyplň `BASE_URL` v `.env`:


## Spuštění testů

Všechny testy:
```bash
npx playwright test
```

Konkrétní soubor:
```bash
npx playwright test navigation.spec.ts
```

Pouze Chrome, jeden worker, s prohlížečem:
```bash
npx playwright test --headed --project=chromium --workers=1
```

## CI/CD

Testy se automaticky spouštějí na GitHub Actions při každém pushi nebo pull requestu do větve `main`.