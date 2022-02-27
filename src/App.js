<<<<<<< HEAD
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
=======
import "./App.css";
import AllColumns from "./components/all-columns";
import Card from "./components/card";
import BodyFilter from "./components/filter";
import Header from "./components/header";
import CardContextProvider from "./context/cards-context-provider";

function App() {
  return (
    <div className="App">
      <Header></Header> 
      <CardContextProvider>
        <BodyFilter></BodyFilter>
        <AllColumns></AllColumns>
        
      </CardContextProvider>
    </div>
  );
}

export default App;
>>>>>>> 91411f98e462e4f386a060501c358b1375721805
