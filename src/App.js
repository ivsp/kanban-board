import "./App.css";
import AllColumns from "./components/all-columns";
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
