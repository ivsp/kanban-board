import "./App.css";
import AddCard from "./components/add-card/addcard";
import AllColumns from "./components/all-columns";
import Card from "./components/card";
import Column from "./components/column/column";

function App() {
  return (
    <div className="App">
      <AddCard></AddCard>
      <AllColumns></AllColumns>
      <Card></Card>
    </div>
  );
}

export default App;
