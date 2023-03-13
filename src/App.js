import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import Header from "./components/Header/Header";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";


function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>

    <Header/>
    <Routes>
        <Route path="/" element={ <ItemListContainer />} />
        <Route path="/category/:categoryName" element={ <ItemListContainer />} />
        <Route path="/ItemDetail/:id" element={ <ItemDetailContainer />} />
        <Route path="/Cart" element={ <Cart />} />
        <Route path="*" element={ <h1>404 not found</h1> }/>
    </Routes>

    </CartContextProvider>
</BrowserRouter>
  );
}

export default App;
