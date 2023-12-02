import { HashRouter } from "react-router-dom";
import routes from "./routes/routes";
import RouterViews from "./routes";
import { useEffect, useLayoutEffect } from "react";

function App() {
  useLayoutEffect(() => {
    document.title = "心理树洞";
  }, []);
  useEffect(() => {
    document.title = "心理树洞";
  }, []);
  return (
    <div className="App">
      <HashRouter>
        <RouterViews routes={routes}></RouterViews>
      </HashRouter>
    </div>
  );
}

export default App;
