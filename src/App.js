import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer greeting="Tutor Corrector"/>
    </div>
  );
}

export default App;
