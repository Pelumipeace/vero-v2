import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/homepage/index";
import LayoutWrapper from "./utils/layoutWrapper";
import AboutPage from "./pages/about/index";
import Contactpage from "./pages/contact/index";
import Blogpage from "./pages/Blog/index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <LayoutWrapper>
            <HomePage />
          </LayoutWrapper>
        }
      />
      <Route
        path="/about"
        element={
          <LayoutWrapper>
            <AboutPage />
          </LayoutWrapper>
        }
      />
      <Route
        path="/contact"
        element={
          <LayoutWrapper>
            <Contactpage />
          </LayoutWrapper>
        }
      />
      <Route
        path="/blog"
        element={
          <LayoutWrapper>
            <Blogpage />
          </LayoutWrapper>
        }
      />
      <Route path="*" element={<>Page NotFound</>} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
