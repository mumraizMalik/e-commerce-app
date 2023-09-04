import React, { useState } from "react";
import Home from "./Screens/Home";
import ProductsPage from "./Screens/ProductsPage";
import ProductDetailPage from "./Screens/ProductDetailPage";
import { ThemeColorContext } from "./Context/theme";
import { theme1 } from "./Styles/Colors";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CartScreen from "./Screens/CartScreen";
import "./App.css";
const App = () => {
  const [theme, setTheme] = useState(theme1);

  return (
    <Provider store={store}>
      <ThemeColorContext.Provider value={{ theme, setTheme }}>
        <div
          className="appPadding"
          style={{ backgroundColor: theme.white, color: theme.black }}
        >
          <BrowserRouter basename="/">
            <Routes>
              <Route>
                <Route path="/" element={<Home />} />
                <Route path="products" element={<ProductsPage />} />
                <Route path="ProductDetail" element={<ProductDetailPage />} />
              </Route>
              <Route path="/cart" element={<CartScreen />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeColorContext.Provider>
    </Provider>
  );
};

export default App;
