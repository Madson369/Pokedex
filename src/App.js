import Home from "./Home";
import Status from "./components/Status"
import { BrowserRouter, Route, Switch } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sobre/:id" component={Status} />
      </Switch>
    </BrowserRouter>
  );
}