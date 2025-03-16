import PopularBooks from "../pages/PopularBooksPage";
import FavoriteBook from "../pages/FavoriteBooksPage";
import IntroPage from "../pages/IntroPage";
import NotFoundPage from "../pages/NotFoundPage";
import SettingsPage from "../pages/SettingsPage";

import BookDetails from "../components/BookItems/BookItems";
import {
  INTRO_PAGE_ROUTE,
  FAVORITE_PAGE_ROUTE,
  POPULAR_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
  SINGLE_BOOK_PAGE_ROUTE,
} from "./consts";

export const routes = [
  {
    path: INTRO_PAGE_ROUTE,
    element: IntroPage,
  },
  {
    path: FAVORITE_PAGE_ROUTE,
    element: FavoriteBook,
  },
  {
    path: POPULAR_PAGE_ROUTE,
    element: PopularBooks,
  },
  {
    path: SETTINGS_PAGE_ROUTE,
    element: SettingsPage,
  },
  {
    path: SINGLE_BOOK_PAGE_ROUTE,
    element: BookDetails,
  },
  {
    path: "*",
    element: NotFoundPage,
  },
];
