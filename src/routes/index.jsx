import { Suspense } from "react";
import {
  Routes,
  Route,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
const Element = function (props) {
  const { component: Component, meta } = props;
  const { title = "心理树洞App" } = meta || {};
  document.title = title;
  const location = useLocation();
  const params = useParams();
  const [usp] = useSearchParams();

  return (
    <Component
      location={location}
      params={params}
      searchParams={usp}
    ></Component>
  );
};

const createRoute = function (routes) {
  return (
    <>
      {routes.map((item) => {
        const { name, path, component, meta, children } = item;
        return (
          <Route
            key={name}
            path={path}
            element={<Element component={component} meta={meta}></Element>}
          >
            {Array.isArray(children) ? createRoute(children) : null}
          </Route>
        );
      })}
    </>
  );
};

const RouterViews = function (props) {
  const { routes } = props;
  return (
    <Suspense>
      <Routes>{createRoute(routes)}</Routes>
    </Suspense>
  );
};

export default RouterViews;
