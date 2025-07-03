import App from "@/App";
import BooksSection from "@/components/module/homePage/BooksSection";
import AllBooks from "@/pages/allBooks/AllBooks";
import BookDetails from "@/pages/bookDetails/BookDetails";
import BorrowDetails from "@/pages/borrowDetails/BorrowDetails";
import BorrowSummary from "@/pages/borrowSummary/BorrowSummary";
import { CreateBook } from "@/pages/createBook/CreateBook";
import { EditBook } from "@/pages/editBook/EditBook";
import { createBrowserRouter } from "react-router";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { index: true, element: <BooksSection></BooksSection> },
      { path: "books", element: <AllBooks></AllBooks> },
      {
        path: "create-book",
        element: <CreateBook></CreateBook>,
      },
      {
        path: "books/:id",
        element: <BookDetails></BookDetails>,
      },
      {
        path: "edit-book/:id",
        element: <EditBook></EditBook>,
      },
      {
        path: "borrow-summary",
        element: <BorrowSummary></BorrowSummary>,
      },
      {
        path: "borrow/:bookId",
        element: <BorrowDetails></BorrowDetails>,
      },
    ],
  },
]);
export default routes;
