import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import "./index.css";
import { ThemeProvider } from "./providers/theme-provider";
import { store } from "./redux/store";
import routes from "./routes/route";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={routes} />
        <ToastContainer></ToastContainer>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
