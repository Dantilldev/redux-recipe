# Redux Recipe Explorer

En liten app där du kan söka recept via ett öppet API och spara favoriter i Redux.
Du kan klicka på ett specifikt recept för att se dess detaljer (övning i Routing).

## Funktioner som är klara

- **Redux Toolkit**: Store konfigurerad med configureStore och typade RootState/AppDispatch.
- **Favorites Slice**: createSlice med typade actions (add, remove, clear) och state.
- **RTK Query**: Typade queries för att söka och hämta recept från https://dummyjson.com/docs/recipes.
- **React-Redux**: Provider, useSelector, useDispatch används medtyper.
- **Projektstruktur**: Delad i app, features, types.
- **Persistens**: Favoriter sparas i localStorage och laddas vid uppstart.
- **UI**: Sökfält, lista med recept, favoriter, detaljsida för recept, länk till JSON data.
- **Routing**: React Router för Home, Favoriter och RecipeDetail.
- **Responsivitet**: Home, Favoriter och RecipeDetail är responsiva med enkel CSS.

## Kvar att göra / Möjliga förbättringar

- **Filter/sort**: Skapa selectors som sorterar alfabetiskt eller filtrerar efter cuisine/difficulty.
- **Debounce**: Skriv en enkel useDebounce hook för sökinput (t.ex. 300 ms) för bättre UX.
- **Bättre felhantering**: Visa "försök igen"knapp vid fetch fel.
- **Extra UI/UX**: Lägg till skeleton loader med animation, förbättra mobilvänlighet ytterligare.

## Starta projektet

```bash
npm install
npm run dev
```

## Stack

- React + Vite (TypeScript)
- Redux Toolkit
- RTK Query
- React Redux
- React Router

## API

DummyJSON Recipes: https://dummyjson.com/docs/recipes

---

_workshop @Chas academy._
