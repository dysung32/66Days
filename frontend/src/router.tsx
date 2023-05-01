import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import ErrorPage from "./error-page";
import Root from "./routes/Root";
import Home from "./routes/Home";
import Challenge from "./routes/Challenge";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route
          path="/groups/:groupId/challenges/:challengeId"
          element={<Challenge />}
        />
      </Route>
    </Route>
  )
);
