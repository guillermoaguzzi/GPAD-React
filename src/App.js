import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";


function App() {
  return (
/*     <div className="App">
      <Header />
      <ItemListContainer />
      <ItemDetailContainer />
    </div> */
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={ <ItemListContainer />} />
        <Route path="/category/:categoryName" element={ <ItemListContainer />} />
        <Route path="/ItemDetail/:id" element={ <ItemDetailContainer />} />
        <Route path="/Cart" element={ <Cart />} />
        <Route path="*" element={ <h1>404 not found</h1> }/>
    </Routes>
</BrowserRouter>
  );
}

export default App;
