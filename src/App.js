import "./App.css";
import AddCard from "./components/add-card/addcard";
import AllColumns from "./components/all-columns";
import Card from "./components/card";
import Column from "./components/column/column";
import BodyFilter from "./components/filter";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BodyFilter></BodyFilter>
      <AddCard></AddCard>
      <AllColumns></AllColumns>
      <Card></Card>
    </div>
  );
}

export default App;
