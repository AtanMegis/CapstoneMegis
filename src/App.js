import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Switch, Route } from 'react-router-dom';
import AuthModal from "./components/AuthModal/AuthModal";
import ProductList from "./components/Products/ProductsList"

function App() {
  const [LoginIsShown, setLoginIsShown] = useState(false);

  const showLoginForm = () => {
    setLoginIsShown(true);
  };

  const hideLoginHandler = () => {
    setLoginIsShown(false);
  };


  return (
    <div className="App">
      <React.Fragment>
        {LoginIsShown && <AuthModal onClose={hideLoginHandler} />}
        <Header onShowLoginForm={showLoginForm} />
        <main>
          <ProductList />
        </main>
      </React.Fragment>
      <Footer />
    </div>
  );
}

export default App;
