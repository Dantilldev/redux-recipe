import {configureStore} from "@reduxjs/toolkit";
import favoritesReducer from "../features/favorites/favoritesSlice";
import {recipesApi} from "../features/recipes/rescipesApi";

const saved = localStorage.getItem("favorites");
const preloadedState = {
  favorites: {items: saved ? JSON.parse(saved) : []},
};

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    [recipesApi.reducerPath]: recipesApi.reducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipesApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
