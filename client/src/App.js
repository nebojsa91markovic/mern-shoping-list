import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./Components/AppNavbar";
import "./App.css";
import ShoppingList from "./Components/ShoppingList";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <ShoppingList />
    </div>
  );
}

export default App;
