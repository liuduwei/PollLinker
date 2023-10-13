import { HashRouter } from "react-router-dom";
import routes from "./routes/routes";
import RouterViews from "./routes";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <RouterViews routes={routes}></RouterViews>
      </HashRouter>
    </div>
  );
}

export default App;
