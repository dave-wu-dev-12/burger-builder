import "./App.css";
import BurgerBuilder from "./containers/burgerbuilder/BurgerBuilder";
import Toolbar from "./components/toolbar/Toolbar";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <BurgerBuilder />
    </div>
  );
}

export default App;
