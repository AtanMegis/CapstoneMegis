import React, { useState } from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductList from "./components/Products/ProductsList";
import NewsList from "./components/News/NewsList";
import { Route } from "react-router-dom";
import Stunting from "./components/Stunting/Stunting";

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
        {LoginIsShown && <LoginForm onClose={hideLoginHandler} />}
        <Header onShowLoginForm={showLoginForm} />
        <main>
          <NewsList />
        </main>
      </React.Fragment>
      <Footer />
    </div>
  );
}

export default App;
