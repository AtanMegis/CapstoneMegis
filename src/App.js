import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductList from "./components/Products/ProductsList";
import NewsList from "./components/News/NewsList";
import Stunting from "./components/Stunting/Stunting";
import Register from "./components/Register/Register";
import AuthModal from "./components/AuthModal/AuthModal";
import {
  BrowserRouter as Router,
  Route,

} from "react-router-dom";

function App() {
  const [LoginIsShown, setLoginIsShown] = useState(false);

  const showLoginForm = () => {
    setLoginIsShown(true);
  };

  const hideLoginHandler = () => {
    setLoginIsShown(false);
  };


  return (
      <React.Fragment>
        {LoginIsShown && <AuthModal onClose={hideLoginHandler} />}
        <Header onShowLoginForm={showLoginForm} />
        <main>
          <ProductList />
        </main>
        <Footer />
      </React.Fragment>
  );
}

export default App;
