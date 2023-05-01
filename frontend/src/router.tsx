import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import ErrorPage from "./error-page";
import Root from "./routes/Root";
import Home from "./routes/Home";
import Group from "./routes/Group";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="/group" index element={<Group />} />
      </Route>
    </Route>
  )
);
